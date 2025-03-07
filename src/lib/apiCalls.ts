import { errBldr } from "../utils/utils";

export async function getInfo() {
  try {
    const res = await fetch("/api/info");
    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as InfoGetResType | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");
    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
}

export async function postLogin(data: { email: string; password: string }) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as LoginPostResType | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");
    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
}

export async function getProfile(token: string) {
  try {
    const res = await fetch(`/api/profile?token=${token}`);
    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as ProfileGetResType | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");
    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
}

export async function getAuthor(token: string, signal: AbortSignal | null) {
  try {
    const res = await fetch(`/api/author?token=${token}`, { signal });

    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as AuthoreGetResType | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");
    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
}

export async function getQuote(
  token: string,
  authorId: string,
  signal: AbortSignal | null
) {
  try {
    const res = await fetch(`/api/quote?token=${token}&authorId=${authorId}`, {
      signal,
    });
    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as QuoteGetResType | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");
    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
}
