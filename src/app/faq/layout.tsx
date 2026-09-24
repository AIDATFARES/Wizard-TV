import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Wizard TV",
  description: "Got questions about Wizard TV? Find fast answers about compatible devices, channel lineups, setup instructions, payment methods, and troubleshooting.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
