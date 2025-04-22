/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Krytius',
    description: 'Customs workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://krytius.github.io/kasm-registry/',
    contactUrl: 'https://krytius.github.io/kasm-registry/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
