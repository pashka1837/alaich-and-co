export async function getInfo() {
  try {
    const res = await fetch("/api/info");
    if (!res.ok) throw Error();
    const json = (await res.json()) as InfoGetResType | ErrorResType;
    if (!json.success) throw Error(json.data.message);
    return json.data;
  } catch (error: any) {
    throw Error(error?.message || "Some Error happend!");
  }
}

export async function postLogin(data: { email: string; password: string }) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!res.ok) throw Error();
    const json = (await res.json()) as LoginPostResType | ErrorResType;
    if (!json.success) throw Error(json.data.message);
    return json.data;
  } catch (error: any) {
    throw Error(error?.message || "Some Error happend!");
  }
}
