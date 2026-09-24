import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Customer Support | 24/7 Assistance - Wizard TV",
  description: "Need help with your Wizard TV subscription? Contact our 24/7 customer support team via WhatsApp or email for instant setup assistance and inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
