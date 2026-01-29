"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

type Product = {
    _id: string;
    title: string;
    description: string;
    category: string;
    material: string;
    weight: string;
    images: string[];
}

export function ProductGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                if (data.success) {
                    setProducts(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex-1 flex justify-center items-center min-h-[400px]">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="flex-1 flex justify-center items-center min-h-[400px] text-gray-400">
                No products found in the catalog.
            </div>
        )
    }

    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <Card className="hover:border-primary/50 transition-colors group h-full flex flex-col bg-surface-dark border-surface-light">
                        <div className="aspect-square bg-black relative overflow-hidden rounded-t-lg">
                            {product.images?.[0] ? (
                                <div className="w-full h-full relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                </div>
                            ) : (
                                <div className="absolute inset-0 bg-surface-light group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                    <span className="text-surface-dark font-serif text-6xl font-bold opacity-20">{product.title?.[0]}</span>
                                </div>
                            )}

                            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur-md border border-white/10">
                                {product.material}
                            </div>
                        </div>
                        <CardContent className="p-4 pt-4 flex-1">
                            <div className="text-xs text-primary mb-1 uppercase tracking-wider">{product.category}</div>
                            <h3 className="text-white font-bold font-serif text-lg mb-1 truncate">{product.title}</h3>
                            <div className="text-gray-400 text-sm flex justify-between">
                                <span>Wt: {product.weight}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-black transition-colors border-zinc-700" asChild>
                                {/* We can create a detailed connection page later if needed, for start simply link to products detail placeholder or nothing if not implemented yet. Let's redirect to just # for now if detail page isn't ready or keep the logic */}
                                <Link href={`/products/${product._id}`}>View Details</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}
