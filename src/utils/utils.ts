export function errBldr(msg: string, errorName: string) {
  const error = new Error(msg);
  error.name = errorName;
  return error;
}

export const reqBuilderFn = async <K extends { data: unknown }>(
  path: string,
  method: string,
  queryParams?: QueryParams,
  data?: any,
  signal?: AbortSignal | null
) => {
  let url = `/api${path}`;
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, val], i) => {
      if (i === 0) url = url.concat(`?${key}=`, val);
      else url = url.concat(`&${key}=`, val);
    });
  }
  console.log(url);

  const options: RequestInit = {
    method,
    body: data ? JSON.stringify(data) : undefined,
    signal,
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw errBldr("", "FetchError");
    const json = (await res.json()) as SuccResType<K> | ErrorResType;
    if (!json.success) throw errBldr(json.data.message, "UnsuccessErr");

    return json.data;
  } catch (error: any) {
    if (error.name === "FetchError" || error.name === "TypeError")
      throw Error("Network error happend! Try to reload.");
    throw error;
  }
};
