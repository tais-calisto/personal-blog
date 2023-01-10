/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['rnnqmjblctoyyvrqfchs.supabase.co'],
  },
};

module.exports = nextConfig;
