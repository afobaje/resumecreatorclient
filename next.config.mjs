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
    GOOGLECLIENTID:
      "745542161351-kr1d1fc6bumac9rc8q025trfa6bh9tks.apps.googleusercontent.com",
    GOOGLECLIENTSECRET: "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",
    NEXTAUTHSECRET:
      "OEC0ZRmjknsWJp6Bk0tec+dOWz3GrqrizdZuHNAK7NZtUomchrFUUwbbZDPOmUpwVYbKog4ApiRD6M6P5/gNHre1X3sPyOYkUJZ0Tw5naqXFQVTejT7vk0ji5n50+mHctEWO8pusAksTiK0Qxc9/drqmqU8icit+roQZXNvVwiPIm7dRhLFuAo+CrLRFglsvGr/QonpyvGsGEez9bqfkoibwVUCg7iPvF8XwXyLr6y6+uNXAbNzgMHurOMd2tSHLJo6sxqKkh5Q1bcO1a9Rndxdtk2imr/GiYtU88JK14x4QGnPEY4KG00d547R/9aQmiu2ySU9ug3IDbP8eql7GRw==",
    GITHUBCLIENTID: "47d575e19257f9bd0b56",
    GITHUBCLIENTSECRET: "0dfb9a047707f0ddbb9f2caeb2eca47d9e3b2d4d",
    NEXTAUTH_URL: "http://localhost:3000",
    BASE_URL: "http://localhost:3005/api",
  },
};

export default nextConfig;
