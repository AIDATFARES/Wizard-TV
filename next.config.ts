import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 90, 95],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/iptv-quality-drops-during-streaming",
        destination: "/blog/fix-iptv-quality-drops",
        permanent: true,
      },
      {
        source: "/blog/iptv-subscription-guide",
        destination: "/blog/best-iptv-subscription-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-live-sports-with-iptv",
        destination: "/blog/watch-live-sports-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-best-iptv-service-2026",
        destination: "/blog/how-to-choose-best-iptv-service",
        permanent: true,
      },
      {
        source: "/blog/iptv-not-working-common-problems-fixes",
        destination: "/blog/fix-iptv-not-working-problems",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-devices-2026-smart-tv-firestick-android-tv",
        destination: "/blog/best-iptv-streaming-devices",
        permanent: true,
      },
      {
        source: "/blog/what-internet-speed-do-you-need-for-iptv",
        destination: "/blog/internet-speed-for-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-streaming-services-2026",
        destination: "/blog/iptv-vs-streaming-services-comparison",
        permanent: true,
      },
      {
        source: "/blog/how-to-set-up-iptv-on-android-tv",
        destination: "/blog/best-iptv-streaming-devices",
        permanent: true,
      },
      {
        source: "/blog/how-to-set-up-iptv-on-smart-tv",
        destination: "/blog/best-iptv-streaming-devices",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-during-live-sports",
        destination: "/blog/watch-live-sports-iptv-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-epg-guide-2026",
        destination: "/blog/best-iptv-subscription-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-not-working-today",
        destination: "/blog/fix-iptv-not-working-problems",
        permanent: true,
      },
      {
        source: "/blog/firestick-2026",
        destination: "/blog/best-iptv-streaming-devices",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-2026",
        destination: "/blog/best-iptv-streaming-devices",
        permanent: true,
      },
      {
        source: "/blog/channels-not-loading",
        destination: "/blog/fix-iptv-not-working-problems",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-every-few-minutes",
        destination: "/blog/fix-iptv-quality-drops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
