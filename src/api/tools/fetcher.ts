import { createUrlStringWithParams } from "./createUrlWithParams";
import { Options } from "./Options";

type FetcherOptions = {
  params?: object;
};

export async function fetcher(endpoint: string, { params }: FetcherOptions) {
  const url = createUrlStringWithParams(
    process.env.REACT_APP_API_URL + endpoint,
    params
  );

  const options = new Options();

  try {
    const data = await fetch(url, options).then((response) => response?.json());

    return data;
  } catch (err) {
    console.error("***API ERROR***", endpoint, err);
  }

  return null;
}
