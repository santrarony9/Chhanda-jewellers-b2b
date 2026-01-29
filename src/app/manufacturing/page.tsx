import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ManufacturingWorkflow } from "@/components/manufacturing/workflow"
import { ManufacturingGallery } from "@/components/manufacturing/gallery"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"

export const metadata = {
    title: "Manufacturing Process | Chhanda Jewellers - B2B Production",
    description: "Explore our end-to-end jewellery manufacturing process in Singur. From CAD design to casting and finishing.",
}

export default function ManufacturingPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            {/* Header */}
            <section className="bg-surface-dark py-20 border-b border-surface-light relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    {/* Decorative Element */}
                    <svg width="200" height="200" viewBox="0 0 100 100" className="text-primary animate-pulse">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Precision Manufacturing</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Combining traditional Bengal craftsmanship with modern technology to deliver excellence at scale.
                    </p>
                </div>
            </section>

            <ManufacturingWorkflow />
            <ManufacturingGallery />
            <BulkEnquiryCTA />

            <Footer />
        </main>
    )
}
