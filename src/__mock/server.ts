import { belongsTo, createServer, Factory, Model } from "miragejs";
import { authors, profiles, quoutes, users } from "./data";
import { AuthorType, ProfileType, QouteType, UserType } from "./db-types";
import { randomId, resCreater, userVerif } from "./utils";
import sign from "jwt-encode";

const secretKey = "123!.dsa']asdc5832,z.";

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    models: {
      user: Model,
      profile: Model.extend({
        user: belongsTo(),
      }),
      author: Model,
      quote: Model.extend({
        author: belongsTo(),
      }),
    },

    factories: {
      user: Factory.extend<Partial<UserType>>({}),
      profile: Factory.extend<Partial<ProfileType>>({}),
      author: Factory.extend<Partial<AuthorType>>({}),
      quote: Factory.extend<Partial<QouteType>>({}),
    },

    seeds(_server) {
      users.forEach((u, i) => {
        const user = _server.create("user", u);
        _server.create("profile", { ...profiles[i], user });
      });
      authors.forEach((a, i) => {
        const author = _server.create("author", a);
        _server.create("quote", { ...quoutes[i], author });
      });
    },

    routes() {
      this.namespace = "api";
      this.get("/info", () =>
        resCreater({
          // info: `Returning info from server and Math.random=${Math.random()}`,
          info: `The story about company`,
        })
      );

      this.post("/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        if (!email || !password) return resCreater(null);
        const user = schema.findBy("user", {
          email,
          password,
        });
        if (!user) return resCreater(null);
        const token = sign({ user }, secretKey);
        return resCreater({ token });
      });

      this.get("/profile", (schema, request) => {
        const token = request.queryParams?.["token"];
        const user = userVerif(token);

        if (!user) return resCreater(null);
        const profile = schema.findBy("profile", { userId: Number(user.id) });
        if (!profile) return resCreater(null);

        return resCreater({ fullname: profile.fullname, email: user.email });
      });

      this.get(
        "/author",
        (schema, request) => {
          const token = request.queryParams?.["token"];
          const user = userVerif(token);
          if (!user) return resCreater(null);

          const author = schema.find("author", `${randomId(authors.length)}`);
          if (!author) return resCreater(null);
          return resCreater({ authorId: author.id, name: author.name });
        },
        { timing: 5000 }
      );

      this.get(
        "/quote",
        (schema, request) => {
          const token = request.queryParams?.["token"];
          const authorId = request.queryParams?.["authorId"];

          if (!authorId || typeof authorId !== "string")
            return resCreater(null);
          const user = userVerif(token);
          if (!user) return resCreater(null);

          const quote = schema.findBy("quote", { authorId: Number(authorId) });
          if (!quote) return resCreater(null);
          return resCreater({
            authorId,
            quoteId: quote.id,
            quote: quote.quoute,
          });
        },
        { timing: 5000 }
      );

      this.delete("/logout", (_, request) => {
        const token = request.queryParams?.["token"];
        const user = userVerif(token);
        if (!user) return resCreater(null);
        return resCreater({});
      });
    },
  });
}
