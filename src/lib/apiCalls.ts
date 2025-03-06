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
