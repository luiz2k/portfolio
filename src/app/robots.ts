import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const originURL = process.env.__NEXT_PRIVATE_ORIGIN;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${originURL}/sitemap.xml`,
  };
}
