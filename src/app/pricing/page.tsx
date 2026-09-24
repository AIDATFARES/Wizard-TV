import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "IPTV Subscription Pricing & Plans | Wizard TV",
  description: "Explore affordable Wizard TV subscription plans. Enjoy 50,000+ live TV channels, premium live sports, and 120,000+ movies in 4K UHD. Instant activation & 24/7 support.",
  alternates: {
    canonical: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
