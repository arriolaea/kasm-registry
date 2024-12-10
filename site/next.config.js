/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Arriola Kasm',
    description: 'Arriola Kasm workspaces.',
    icon: 'https://arriolaea.github.io/kasm-registry/1.0/Kasm-images.jpg',
    listUrl: 'https://arriolaea.github.io/kasm-registry/',
    contactUrl: 'https://github.com/arriolaea/kasm-registry/issues',
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
