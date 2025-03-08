import { jwtDecode } from "jwt-decode";
import { UserType } from "./db-types";

export function resCreater(data: any) {
  if (data) return JSON.stringify({ data: data, success: true });
  return JSON.stringify({
    data: { message: "Access denied." },
    success: false,
  });
}

export function userVerif(token: string | string[] | null | undefined) {
  if (!token || typeof token !== "string") return null;
  const { user } = jwtDecode(token) as {
    user: { [key: string]: any } & UserType;
  };
  if (!user || !user.id) return null;
  return user;
}

export function randomId(endNm: number) {
  return Math.floor(Math.random() * endNm + 1);
}
