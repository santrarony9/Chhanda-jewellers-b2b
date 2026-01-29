import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Download, ArrowLeft, AlertCircle } from "lucide-react"
import dbConnect from "@/lib/db"
import Product from "@/models/Product"
import { notFound } from "next/navigation"

// Helper to get product
async function getProduct(id: string) {
    try {
        await dbConnect();
        const product = await Product.findById(id).lean();
        if (!product) return null;
        return JSON.parse(JSON.stringify(product)); // Serialize
    } catch (e) {
        return null;
    }
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    if (!product) {
        // You could also return notFound() here
        return (
            <main className="bg-background min-h-screen pt-20 flex flex-col items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-2xl text-white font-serif mb-2">Product Not Found</h1>
                    <Link href="/products" className="text-primary hover:underline">Back to Catalog</Link>
                </div>
                <Footer />
            </main>
        )
    }

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
                        <div className="aspect-square bg-surface-dark rounded-xl border border-surface-light flex items-center justify-center relative overflow-hidden bg-black">
                            {product.images && product.images.length > 0 ? (
                                <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-surface-light/10 font-serif text-9xl font-bold uppercase">{product.title?.[0]}</span>
                            )}

                            {product.isFeatured && (
                                <div className="absolute top-4 left-4 bg-primary text-black font-bold px-3 py-1 rounded-full text-sm">
                                    Featured
                                </div>
                            )}
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img: string, i: number) => (
                                    <div key={i} className="aspect-square bg-surface-dark rounded-lg border border-surface-light hover:border-primary/50 cursor-pointer overflow-hidden">
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div>
                        <div className="text-sm text-primary mb-2 uppercase tracking-wide">{product.category}</div>
                        <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="bg-surface-light/5 rounded-xl p-6 border border-surface-light mb-8">
                            <h3 className="text-white font-bold mb-4 border-b border-surface-light pb-2">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-gray-400">Material</div>
                                <div className="text-white font-medium">{product.material}</div>

                                <div className="text-gray-400">Gross Weight</div>
                                <div className="text-white font-medium">{product.weight}</div>

                                <div className="text-gray-400">Product ID</div>
                                <div className="text-white font-medium font-mono text-xs pt-1">{product._id}</div>
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
                            <Button size="lg" className="flex-1 bg-primary text-black font-bold hover:bg-primary/90" asChild>
                                <Link href={`/contact?product=${encodeURIComponent(product.title)}`}>Enquire for Bulk Rate</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="flex-1 gap-2 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white">
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
