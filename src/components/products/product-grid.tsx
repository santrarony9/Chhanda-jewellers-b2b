"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

// Sample Data
const products = [
    { id: "1", name: "Traditional Gold Necklace", code: "CJ-NK-001", weight: "24.5g", purity: "22K", category: "Gold" },
    { id: "2", name: "Diamond Studded Bangle", code: "CJ-BG-045", weight: "18.2g", purity: "18K", category: "Diamond" },
    { id: "3", name: "Bridal Choker Set", code: "CJ-BR-012", weight: "85.0g", purity: "22K", category: "Bridal" },
    { id: "4", name: "Lightweight Gold Chain", code: "CJ-CH-089", weight: "8.5g", purity: "22K", category: "Lightweight" },
    { id: "5", name: "Antique Finish Jhumka", code: "CJ-ER-023", weight: "15.0g", purity: "22K", category: "Gold" },
    { id: "6", name: "Solitaire Ring", code: "CJ-RG-056", weight: "4.2g", purity: "18K", category: "Diamond" },
]

export function ProductGrid() {
    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <Card className="hover:border-primary/50 transition-colors group h-full flex flex-col">
                        <div className="aspect-square bg-surface-dark relative overflow-hidden rounded-t-lg">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-surface-light group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <span className="text-surface-dark font-serif text-6xl font-bold opacity-20">{product.name[0]}</span>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur-md">
                                {product.purity}
                            </div>
                        </div>
                        <CardContent className="p-4 pt-4 flex-1">
                            <div className="text-xs text-primary mb-1">{product.category}</div>
                            <h3 className="text-white font-bold font-serif text-lg mb-1 truncate">{product.name}</h3>
                            <div className="text-gray-400 text-sm flex justify-between">
                                <span>Code: {product.code}</span>
                                <span>Wt: {product.weight}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-black transition-colors" asChild>
                                <Link href={`/products/${product.id}`}>View Details</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}
