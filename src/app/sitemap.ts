import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects/data";

const base = "https://www.cmlearn.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [...new Set(projects.map((project) => project.slug))];
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/prd-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...slugs.map((slug) => ({
      url: `${base}/project/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
