import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ServicesList } from "@/components/b2b/services-list"
import { B2BInfo } from "@/components/b2b/info-section"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"

export const metadata = {
    title: "B2B Services | Chhanda Jewellers - Wholesale Supply",
    description: "Bulk jewellery supply, OEM manufacturing, and private label services for retailers. Partner with Singur's leading manufacturer.",
}

export default function B2BPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            {/* Header */}
            <section className="bg-surface-dark py-20 border-b border-surface-light">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Business Solutions</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive manufacturing services tailored for jewellery retailers and wholesalers.
                    </p>
                </div>
            </section>

            <ServicesList />
            <B2BInfo />
            <BulkEnquiryCTA />

            <Footer />
        </main>
    )
}
