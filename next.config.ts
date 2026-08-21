import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack does not pick up a stray lockfile
  // from a parent directory.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The old Webador site had exactly two URLs. Keep them alive.
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
