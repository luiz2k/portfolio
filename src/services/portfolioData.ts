import { Data } from "./portfolioData.d";

const URL: string =
  "https://gist.githubusercontent.com/luiz2k/94036aaaa0dad496b37f9099aa2e7e86/raw";

export default async function getPortfolioData(): Promise<Data> {
  const ONE_HOUR: number = 3600;

  const response = await fetch(URL, { next: { revalidate: ONE_HOUR } });
  const data: Data = await response.json();

  return data;
}
