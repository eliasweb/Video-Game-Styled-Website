import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "E-Commerce Stores",
  description:
    "Shopify, headless commerce, and CRO for ambitious DTC brands. PDP layouts, checkout flow, post-purchase, retention.",
};

export default function EcommercePage() {
  return <ServiceDetail slug="ecommerce" />;
}
