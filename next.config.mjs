/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    BASE_URL: "http://localhost:3005/api",
  },
};

export default nextConfig;
