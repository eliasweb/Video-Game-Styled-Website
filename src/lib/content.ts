/**
 * All site copy/content. Swap any of this out to rebrand the site —
 * pages render straight from these objects.
 */

export const studio = {
  name: "AGENCY 1-1",
  tagline: "Press Start to ship.",
  established: 2018,
  email: "hello@agency-1-1.dev",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "star" as const },
    { label: "Twitter", href: "https://twitter.com", icon: "coin" as const },
    { label: "Dribbble", href: "https://dribbble.com", icon: "mushroom" as const },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "fire" as const },
  ],
};

export type ServiceSlug = "web-design" | "ecommerce" | "google-ads";

export const services: {
  slug: ServiceSlug;
  world: string;
  title: string;
  blurb: string;
  features: string[];
  faq: { q: string; a: string }[];
  color: "red" | "green" | "blue";
}[] = [
  {
    slug: "web-design",
    world: "WORLD 1-1",
    title: "Web Design & Development",
    blurb:
      "Pixel-perfect marketing sites and product UIs built on modern stacks (Next.js, Astro, vanilla). Fast, accessible, conversion-focused.",
    features: [
      "Custom design system + reusable components",
      "Responsive, accessible, WCAG AA",
      "CMS integration (Sanity, Contentful, Notion)",
      "Core Web Vitals tuned for SEO",
      "Animation & micro-interactions",
      "Hosting & launch on Vercel/Netlify",
    ],
    faq: [
      {
        q: "How long does a typical site take?",
        a: "4–8 weeks from kickoff to launch for a 6–12 page marketing site. Larger product UIs we scope per-project.",
      },
      {
        q: "Do you provide copy?",
        a: "We pair with a network of copywriters when you don't have an in-house writer. Otherwise we'll work from your draft and tighten it.",
      },
      {
        q: "What does it cost?",
        a: "Marketing sites start at $12k. See the Power-Ups page for tier breakdowns or hop in /contact for a quote.",
      },
    ],
    color: "red",
  },
  {
    slug: "ecommerce",
    world: "WORLD 1-2",
    title: "E-Commerce Stores",
    blurb:
      "Shopify, BigCommerce, and headless commerce builds. We obsess over PDP layouts, checkout speed, and post-purchase flows that lift AOV.",
    features: [
      "Shopify & Shopify Plus theme builds",
      "Headless commerce (Hydrogen, Next.js + Shopify)",
      "Custom checkout & subscription flows",
      "Klaviyo email + SMS automation",
      "Conversion-rate audits & A/B tests",
      "Inventory, ERP & 3PL integration",
    ],
    faq: [
      {
        q: "Shopify or headless?",
        a: "If you're under 7-figure revenue, classic Shopify is usually the right call. Headless makes sense once you've outgrown theme limits or need a unique storefront.",
      },
      {
        q: "Do you migrate from another platform?",
        a: "Yes — we've moved stores off WooCommerce, Magento, BigCommerce and Squarespace into Shopify with redirects and SEO preserved.",
      },
      {
        q: "What about post-launch growth?",
        a: "We retainer with most clients for 3–6 months post-launch on CRO experiments and email/SMS optimization.",
      },
    ],
    color: "green",
  },
  {
    slug: "google-ads",
    world: "WORLD 1-3",
    title: "Google Ads & Paid Search",
    blurb:
      "Search, Performance Max, Shopping, and YouTube campaigns built for ROAS. We handle setup, creative, and weekly optimization.",
    features: [
      "Account audit + restructure",
      "Search, Shopping, PMax, YouTube",
      "Conversion tracking via GA4 + Tag Manager",
      "Negative keyword sculpting",
      "Landing page CRO collaboration",
      "Weekly reporting + slack channel",
    ],
    faq: [
      {
        q: "What's your minimum monthly ad spend?",
        a: "We work best with accounts spending $5k+/mo on Google. Below that, we'd point you to a smaller agency.",
      },
      {
        q: "Do you guarantee results?",
        a: "We guarantee process, not platform outcomes. We share weekly reports and make recommendations you can verify.",
      },
      {
        q: "Do you also do Meta / TikTok?",
        a: "Not in-house — we partner with paid social specialists when channels need to align.",
      },
    ],
    color: "blue",
  },
];

export const portfolio: {
  title: string;
  client: string;
  vertical: string;
  category: ServiceSlug;
  metric: string;
  stars: 1 | 2 | 3;
}[] = [
  { title: "Pipeworks Plumbing", client: "Pipeworks Co.", vertical: "Local services", category: "web-design", metric: "+184% leads in 90 days", stars: 3 },
  { title: "Mushroom Roastery", client: "Mushroom Coffee", vertical: "DTC food & bev", category: "ecommerce", metric: "+62% AOV after PDP rebuild", stars: 3 },
  { title: "Star Bros Realty", client: "Star Bros", vertical: "Real estate", category: "google-ads", metric: "3.2x ROAS on PMax", stars: 2 },
  { title: "Goomba Goods", client: "Goomba Goods", vertical: "Lifestyle DTC", category: "ecommerce", metric: "$1.4M Black Friday revenue", stars: 3 },
  { title: "Bowser Boilers", client: "Bowser HVAC", vertical: "Home services", category: "web-design", metric: "Top 3 organic for 14 keywords", stars: 2 },
  { title: "Toad Tours", client: "Toad Travel", vertical: "Travel", category: "google-ads", metric: "−41% CPA vs. last agency", stars: 3 },
  { title: "Yoshi Yogurt", client: "Yoshi Foods", vertical: "Grocery DTC", category: "ecommerce", metric: "+2.8% checkout conversion", stars: 2 },
  { title: "Princess Peach Salon", client: "P. Peach Co.", vertical: "Beauty", category: "web-design", metric: "Won 2024 Awwwards SOTD", stars: 3 },
];

export const pricing: {
  tier: "MUSHROOM" | "FIRE FLOWER" | "SUPER STAR";
  power: string;
  price: string;
  cadence: string;
  features: string[];
  highlight?: boolean;
}[] = [
  {
    tier: "MUSHROOM",
    power: "Starter",
    price: "$4,800",
    cadence: "one-time",
    features: [
      "5-page marketing site",
      "Custom design from template",
      "Mobile-first responsive",
      "1 round of revisions",
      "Launch on Vercel",
      "30 days of support",
    ],
  },
  {
    tier: "FIRE FLOWER",
    power: "Pro",
    price: "$12,000",
    cadence: "one-time",
    features: [
      "12-page custom marketing site",
      "Brand-led design system",
      "CMS integration",
      "On-page SEO + analytics",
      "3 rounds of revisions",
      "60 days of post-launch support",
    ],
    highlight: true,
  },
  {
    tier: "SUPER STAR",
    power: "Enterprise",
    price: "$3,500",
    cadence: "monthly retainer",
    features: [
      "Custom site or store + Google Ads",
      "Weekly experiments & A/B tests",
      "Dedicated PM + slack channel",
      "Quarterly strategy off-site",
      "Priority support, no SLAs",
      "Cancel anytime after 90 days",
    ],
  },
];

export const team: {
  name: string;
  role: string;
  hp: number;
  mp: number;
  atk: number;
  bio: string;
  emoji: "mushroom" | "fire" | "star" | "coin";
}[] = [
  {
    name: "MARI",
    role: "Founder / Engineering",
    hp: 99,
    mp: 87,
    atk: 92,
    bio: "Ex-staff engineer at two YC startups. Builds the hard parts so you don't have to.",
    emoji: "mushroom",
  },
  {
    name: "LUI",
    role: "Design Lead",
    hp: 88,
    mp: 99,
    atk: 81,
    bio: "Ten years across Figma, Webflow, and a sketchbook. Believes in serif fonts and white space.",
    emoji: "fire",
  },
  {
    name: "PEACH",
    role: "Performance Marketing",
    hp: 84,
    mp: 91,
    atk: 99,
    bio: "Ran $40M in Google Ads spend before joining. Will tell you when to stop running ads.",
    emoji: "star",
  },
  {
    name: "TOAD",
    role: "Project Manager",
    hp: 95,
    mp: 78,
    atk: 70,
    bio: "Keeps the trains running. Sends Slack updates that don't waste your time.",
    emoji: "coin",
  },
];
