import "@testing-library/jest-dom";
import { makeServer } from "../__mock/server";

import { authors, profiles, quoutes, users } from "../__mock/data";

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoieHh4MTExMjIiLCJlbWFpbCI6InBhdmVsQGV4YW1wbGUuY29tIiwiaWQiOiIyIn19.bL8fCSWigTbZfzlcyNFm8T8i6NSNxpQzll15B0JUpes";

export let server: any;
beforeEach(() => {
  server = makeServer();
  users.forEach((u, i) => {
    const user = server.create("user", u);
    server.create("profile", { ...profiles[i], user });
  });
  authors.forEach((a, i) => {
    const author = server.create("author", a);
    server.create("quote", { ...quoutes[i], author });
  });
});
afterEach(() => {
  server.shutdown();
});
