import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustBadges } from "@/components/home/trust-badges"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { ManufacturingHighlight } from "@/components/home/manufacturing-highlight"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"
import dbConnect from "@/lib/db"
import SiteSettings from "@/models/SiteSettings"

// Force dynamic rendering to ensure fresh content
export const dynamic = 'force-dynamic';

async function getSiteContent() {
  try {
    await dbConnect();
    const settings = await SiteSettings.findOne().lean();
    if (!settings) return null;

    // Serialize explicitly to avoid passing Mongoose docs
    return JSON.parse(JSON.stringify(settings));
  } catch (error) {
    console.error("Failed to fetch site content:", error);
    return null;
  }
}

export default async function Home() {
  const content = await getSiteContent();
  const heroImage = content?.home?.heroImage;
  const categories = content?.home?.categories;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero heroImage={heroImage} />
      <TrustBadges />
      <FeaturedCategories categories={categories} />
      <ManufacturingHighlight />
      <BulkEnquiryCTA />
      <Footer />
    </main>
  )
}
