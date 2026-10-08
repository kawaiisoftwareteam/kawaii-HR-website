import { MetadataRoute } from "next";

export const dynamic = "force-static";

const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/for-businesses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/for-job-seekers", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/news", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
];

const SERVICE_SLUGS = [
  "recruitment",
  "payroll",
  "managed-service",
  "peo-eor",
  "hr-outsourcing",
  "bpo-rpo",
  "immigration",
  "remote-staffing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kawaiicareer.com";
  const lastModified = new Date();

  return [
    ...PAGES.map(({ path, priority, changeFrequency }) => ({
      url: path === "/" ? baseUrl : `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
