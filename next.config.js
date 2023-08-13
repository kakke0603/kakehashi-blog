/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    runtime: 'edge',
  },
}

module.exports = nextConfig
