import { AuthorType, ProfileType, QouteType, UserType } from "./db-types";

export const users: UserType[] = [
  {
    email: "aleksei@example.com",
    password: "lkJlkn8hj",
  },
  {
    email: "pavel@example.com",
    password: "xxx11122",
  },

  {
    email: "maxim@example.com",
    password: "qwerty1234",
  },
];

export const profiles: ProfileType[] = [
  { fullname: "Aleksei K" },
  { fullname: "Pavel D" },
  { fullname: "Maxim A" },
];

export const authors: AuthorType[] = [
  { name: "Leo Rosten" },
  { name: "John Kenneth Galbraith " },
  { name: "Quentin Crisp" },
];

export const quoutes: QouteType[] = [
  { quoute: "Money can't buy happiness, but neither can poverty." },
  {
    quoute:
      "Under capitalism, man exploits man. Under communism, it's just the opposite.",
  },
  { quoute: "If at first you don't succeed, failure may be your style." },
];
