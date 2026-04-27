import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Pixel-perfect marketing sites and product UIs. Modern stacks, accessibility, Core Web Vitals, and conversion-focused design.",
};

export default function WebDesignPage() {
  return <ServiceDetail slug="web-design" />;
}
