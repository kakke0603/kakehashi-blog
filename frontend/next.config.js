const path = require("path");
const nextConfig = {
  /** WebPack の設定を追加 */
  webpack: (config) => {
    // return config;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "/"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    };
  },
};
module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
});
