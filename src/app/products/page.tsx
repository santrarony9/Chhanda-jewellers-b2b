import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProductFilters } from "@/components/products/filters"
import { ProductGrid } from "@/components/products/product-grid"

export const metadata = {
    title: "Product Catalog | Chhanda Jewellers - B2B Collection",
    description: "Browse our exclusive collection of Gold and Diamond jewellery tailored for retail partners. Bulk enquiry available.",
}

export default function ProductsPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            {/* Header */}
            <section className="bg-surface-dark py-12 border-b border-surface-light">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-serif text-white font-bold mb-2">Our Collection</h1>
                    <p className="text-gray-400">Exclusive B2B Designs • Gold (22K/18K) • Certified Diamonds</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                    <ProductFilters />
                    <ProductGrid />
                </div>
            </section>

            <Footer />
        </main>
    )
}
