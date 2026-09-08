import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // ✅ Skip ESLint during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ✅ Skip TypeScript type checking during `next build`
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hxcygmrgqrfjoggeuwnw.supabase.co",
      },
    ],
  },
  // ✅ Fix turbopack root detection with multiple lockfiles
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
