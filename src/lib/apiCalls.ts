import { reqBuilderFn } from "../utils/utils";

export const getInfo = () => reqBuilderFn<InfoDataType>("/info", "GET");

export const postLogin = (data: { email: string; password: string }) =>
  reqBuilderFn<LoginDataType>("/login", "POST", undefined, data);

export const getProfile = (token: string) =>
  reqBuilderFn<ProfileDataType>("/profile", "GET", { token });

export const getAuthor = (token: string, signal: AbortSignal | null) =>
  reqBuilderFn<AuthorDataType>("/author", "GET", { token }, undefined, signal);

export const getQuote = (
  token: string,
  authorId: string,
  signal: AbortSignal | null
) =>
  reqBuilderFn<QuoteDataType>(
    "/quote",
    "GET",
    { token, authorId },
    undefined,
    signal
  );

export const deleteLogout = (token: string) =>
  reqBuilderFn<LogoutDataType>("/logout", "DELETE", { token });
