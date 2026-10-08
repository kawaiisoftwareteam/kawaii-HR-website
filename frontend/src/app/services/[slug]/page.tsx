import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_CATEGORIES, getServiceCategory } from "@/data/serviceCategories";
import { ServiceCategoryView } from "./ServiceCategoryView";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) return { title: "Services | Kawaii Career" };
  const pageTitle = category.metaTitle || `${category.title} | Kawaii Career`;
  const pageDesc = category.metaDescription || category.summary;
  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      category.navLabel,
      category.title,
      "Kawaii HR",
      "Kawaii Japan HR Solutions",
      "HR Solutions",
      "Career Solutions",
      "HR Outsourcing",
      "Career Outsourcing",
      `${category.navLabel} Bangladesh`,
    ],
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      images: [{ url: category.heroImage, width: 1200, height: 630, alt: category.title }],
    },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) notFound();
  return <ServiceCategoryView category={category} />;
}
