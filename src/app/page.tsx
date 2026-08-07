import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustBadges } from "@/components/home/trust-badges"
import { VideoSection } from "@/components/home/video-section"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { ManufacturingHighlight } from "@/components/home/manufacturing-highlight"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"
import dbConnect from "@/lib/db"
import SiteSettings from "@/models/SiteSettings"

// Revalidate every 24 hours (86400 seconds) to prevent Vercel ISR Write limit exhaustion
export const revalidate = 86400;

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
  const manufacturingHighlight = content?.home?.manufacturingHighlight;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero heroImage={heroImage} />
      <TrustBadges />
      <VideoSection />
      <FeaturedCategories categories={categories} />
      <ManufacturingHighlight data={manufacturingHighlight} />
      <BulkEnquiryCTA />
      <Footer />
    </main>
  )
}
