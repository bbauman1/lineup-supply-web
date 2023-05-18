/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/plugin-help',
        destination: 'https://boulder-syzygy-5ff.notion.site/PlaylistAI-Plugin-for-ChatGPT-Help-fc0cd28dd78b46c781d6d93b120831a1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
