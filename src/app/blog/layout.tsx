import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Blog, Guides & Streaming Tips | Wizard TV",
  description: "Discover the latest IPTV guides, setup tutorials, sports schedules, and streaming technology news from the Wizard TV expert team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
