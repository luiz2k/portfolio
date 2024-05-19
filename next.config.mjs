/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/bjx1xzx4/portfolio-dataset/**",
      },
    ],
  },
};

export default nextConfig;
