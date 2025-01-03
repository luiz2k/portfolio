import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const originURL = process.env.ORIGIN_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${originURL}/sitemap.xml`,
  };
}
