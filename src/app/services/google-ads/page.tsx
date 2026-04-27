import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Google Ads & Paid Search",
  description:
    "Search, Performance Max, Shopping, and YouTube campaigns built for ROAS. Tracking, sculpting, and weekly optimization.",
};

export default function GoogleAdsPage() {
  return <ServiceDetail slug="google-ads" />;
}
