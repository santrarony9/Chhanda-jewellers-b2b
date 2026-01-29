import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BulkEnquiryCTA } from "@/components/home/bulk-enquiry-cta"

const images = [
    { src: "bg-surface-light", size: "col-span-1 row-span-1", label: "Casting Floor" },
    { src: "bg-primary/20", size: "col-span-1 md:col-span-2 row-span-2", label: "Detailed Polishing" },
    { src: "bg-accent/20", size: "col-span-1 row-span-1", label: "Quality Check" },
    { src: "bg-surface-light", size: "col-span-1 row-span-1", label: "Inventory" },
    { src: "bg-primary/10", size: "col-span-1 row-span-2", label: "Stone Setting" },
    { src: "bg-surface-light", size: "col-span-1 md:col-span-2 row-span-1", label: "Final Inspection" },
]

export const metadata = {
    title: "Factory Gallery | Chhanda Jewellers",
    description: "Visual tour of our jewellery manufacturing facility in Singur.",
}

export default function GalleryPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            <section className="bg-surface-dark py-16 border-b border-surface-light">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Manufacturing Gallery</h1>
                    <p className="text-gray-400">Behind the scenes excellence</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] gap-4">
                        {images.map((img, i) => (
                            <div key={i} className={`relative rounded-xl overflow-hidden border border-surface-light group ${img.size} ${img.src}`}>
                                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">{img.label}</span>
                                </div>
                                {/* Placeholder Texture */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BulkEnquiryCTA />

            <Footer />
        </main>
    )
}
