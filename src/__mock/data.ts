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
  { name: "John Kenneth Galbraith" },
  { name: "Quentin Crisp" },

  { name: "H. L. Mencken " },
  { name: "Henry Wadsworth Longfellow " },
  { name: "George Burns" },

  { name: "Umberto Eco" },
  { name: "Jennifer Hudson" },
  { name: "John Muir" },

  { name: "Dag Hammarskjold" },
  { name: "Francis J. Braceland" },
  { name: "Francois de La Rochefoucauld " },
];

export const quoutes: QouteType[] = [
  { quoute: "Money can't buy happiness, but neither can poverty." },
  {
    quoute:
      "Under capitalism, man exploits man. Under communism, it's just the opposite.",
  },
  { quoute: "If at first you don't succeed, failure may be your style." },

  {
    quoute:
      "After all, all he did was string together a lot of old, well-known quotations.",
  },
  {
    quoute:
      "Give what you have. To someone, it may be better than you dare to think.",
  },
  {
    quoute:
      "If you live to be one hundred, you've got it made. Very few people die past that age.",
  },

  {
    quoute:
      "The real hero is always a hero by mistake; he dreams of being an honest coward like everybody else.",
  },
  {
    quoute:
      "You cannot just work out and then eat poorly and expect to lose weight. It doesn’t work that way.",
  },
  {
    quoute:
      "I know that our bodies were made to thrive only in pure air, and the scenes in which pure air is found.",
  },

  { quoute: "The longest journey is the journey inward." },
  {
    quoute:
      "We can be sure that the greatest hope for maintaining equilibrium in the face of any situation rests within ourselves.",
  },
  {
    quoute:
      "When we are unable to find tranquility within ourselves, it is useless to seek it elsewhere.",
  },
];
