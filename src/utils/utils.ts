export function errBldr(msg: string, errorName: string) {
  const error = new Error(msg);
  error.name = errorName;
  return error;
}
