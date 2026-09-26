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
  if (!category) return { title: "Services" };
  return {
    title: `${category.title} | Kawaii Japan Career & HR`,
    description: category.summary,
    openGraph: {
      title: category.title,
      description: category.summary,
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
