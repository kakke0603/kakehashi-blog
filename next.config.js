/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "/articles",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
