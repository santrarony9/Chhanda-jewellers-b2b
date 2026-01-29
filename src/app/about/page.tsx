import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CompanyLegacy } from "@/components/about/company-legacy"
import { ManufacturingUnit } from "@/components/about/manufacturing-unit"
import { QualityCertification } from "@/components/about/quality-certification"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"

export const metadata = {
    title: "About Us | Chhanda Jewellers - Manufacturing Excellence",
    description: "Learn about Chhanda Jewellers, our legacy in Singur, and our commitment to quality gold and diamond jewellery manufacturing.",
}

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            {/* Page Header */}
            <section className="bg-surface-dark py-16 border-b border-surface-light">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Our Story</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Building trust through purity and precision since 2000.
                    </p>
                </div>
            </section>

            <CompanyLegacy />
            <ManufacturingUnit />
            <QualityCertification />
            <BulkEnquiryCTA />

            <Footer />
        </main>
    )
}
