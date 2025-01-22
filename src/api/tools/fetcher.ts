import { createProxiedUrlStringWithParams } from "./createProxedUrlStringWithPrams";
import { Options } from "./Options";

type FetcherOptions = {
  params?: object;
};

export async function fetcher(endpoint: string, { params }: FetcherOptions) {
  const proxied = createProxiedUrlStringWithParams(
    process.env.REACT_APP_API_URL + endpoint,
    params
  );

  const options = new Options();

  try {
    const res = await fetch(proxied, options).then((res) => {
      if (res.status >= 300) throw new Error();

      return res;
    });

    return res;
  } catch (err) {
    console.error("***API ERROR***", endpoint, err);

    throw err;
  }
}
