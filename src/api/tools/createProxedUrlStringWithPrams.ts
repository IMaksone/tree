import { createUrlStringWithParams } from "./createUrlWithParams";

export function createProxiedUrlStringWithParams(
  urlString: string,
  params?: object
) {
  const url = createUrlStringWithParams(urlString, params);

  const proxied = createUrlStringWithParams(process.env.REACT_APP_PROXY_URL, {
    url,
  });

  return proxied;
}
