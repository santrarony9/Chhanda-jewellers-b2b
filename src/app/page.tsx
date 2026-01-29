import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustBadges } from "@/components/home/trust-badges"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { ManufacturingHighlight } from "@/components/home/manufacturing-highlight"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeaturedCategories />
      <ManufacturingHighlight />
      <BulkEnquiryCTA />
      <Footer />
    </main>
  );
}
