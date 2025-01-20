export function createUrlStringWithParams(urlString: string, params?: object) {
  const url = new URL(urlString);

  for (const key in params) {
    url.searchParams.set(key, params[key]);
  }

  return url.toString()
}
