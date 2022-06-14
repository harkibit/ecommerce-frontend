/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    BASE_URL: "http://localhost:1337/api",
  },
};

module.exports = nextConfig;
