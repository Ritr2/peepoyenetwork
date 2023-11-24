/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    async redirects() {
        return [
          {
            source: '/monetize-x-free',
            destination: '/guide-x',
            permanent: true,
          },
          {
            source: '/gigolo-scam-what-are-the-red-flags-to-watch-out-for',
            destination: '/social-awareness/blogs/gigolo-scam-what-are-the-red-flags-to-watch-out-for',
            permanent: true,
          },
          {
            source: '/accelerator-ind',
            destination: '/accelerator-bf-ind',
            permanent: true,
          },
          {
            source: '/accelerator-int',
            destination: '/accelerator-bf-int',
            permanent: true,
          },
          {
            source: '/accelerator-bf',
            destination: 'https://youtubeneur.com/accelerator',
            permanent: true,
          }
        ]
      },
}

module.exports = nextConfig
