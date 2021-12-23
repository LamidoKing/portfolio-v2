/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"], // Only run ESLint on the 'src' directories during production builds (next build)
  },
}
