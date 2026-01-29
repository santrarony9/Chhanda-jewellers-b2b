import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Download, ArrowLeft } from "lucide-react"

export default function ProductDetails({ params }: { params: { slug: string } }) {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Catalog
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-surface-dark rounded-xl border border-surface-light flex items-center justify-center relative overflow-hidden">
                            <span className="text-surface-light/10 font-serif text-9xl font-bold">IMG</span>
                            <div className="absolute top-4 left-4 bg-primary text-black font-bold px-3 py-1 rounded-full text-sm">
                                New Arrival
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-surface-dark rounded-lg border border-surface-light hover:border-primary/50 cursor-pointer transition-colors" />
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-2">Traditional Gold Necklace</h1>
                        <p className="text-primary text-lg mb-6">Product Code: CJ-NK-{params.slug || '001'}</p>

                        <div className="bg-surface-light/5 rounded-xl p-6 border border-surface-light mb-8">
                            <h3 className="text-white font-bold mb-4 border-b border-surface-light pb-2">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-gray-400">Purity</div>
                                <div className="text-white font-medium">22K (916 Hallmarked)</div>

                                <div className="text-gray-400">Gross Weight</div>
                                <div className="text-white font-medium">approx. 24.500 g</div>

                                <div className="text-gray-400">Net Weight</div>
                                <div className="text-white font-medium">approx. 24.500 g</div>

                                <div className="text-gray-400">Dimensions</div>
                                <div className="text-white font-medium">L: 18 inch (Adjustable)</div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Ready for Bulk Production (MOQ: 5 pcs)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Customization Available (Gold Color/Weight)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>BIS Certificate Included</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="flex-1" asChild>
                                <Link href="/contact?product=CJ-NK-001">Enquire for Bulk Rate</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="flex-1 gap-2">
                                <Download className="h-4 w-4" /> Download Spec Sheet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
