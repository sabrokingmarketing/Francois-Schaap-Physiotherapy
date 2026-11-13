import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));
}
