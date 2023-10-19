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
          }
        ]
      },
}

module.exports = nextConfig
