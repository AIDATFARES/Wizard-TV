import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wizard TV Channel List | 50,000+ Live Channels & VOD Movies",
  description: "Explore the complete Wizard TV channel lineup. Live international sports, PPV events, news, entertainment, and 120,000+ movies & series in 4K/FHD.",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
