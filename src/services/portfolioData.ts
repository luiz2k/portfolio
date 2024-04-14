import { Data } from "./portfolioData.d";

const URL: string =
  "https://gist.githubusercontent.com/luiz2k/94036aaaa0dad496b37f9099aa2e7e86/raw";

export default async function getPortfolioData(): Promise<Data> {
  const response = await fetch(URL);
  const data: Data = await response.json();

  return data;
}
