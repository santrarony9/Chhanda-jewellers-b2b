"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const featuredProducts = [
    {
        id: "feat-1",
        title: "Royal Antique Kundan Necklace",
        category: "Heritage Collection",
        image: "/prod-featured-1.png",
        price: "Enquire for Price"
    },
    {
        id: "feat-2",
        title: "Solitaire Diamond Studs",
        category: "Diamond Collection",
        image: "/prod-featured-2.png",
        price: "Enquire for Price"
    },
    {
        id: "feat-3",
        title: "Pearl & Gold Nath",
        category: "Traditional Wear",
        image: "/prod-featured-3.png",
        price: "Enquire for Price"
    }
]

export function FeaturedCollection() {
    return (
        <section className="py-20 bg-surface-dark border-b border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Star className="h-4 w-4 text-primary fill-primary" />
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Handpicked</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                            Featured <span className="text-gray-500 italic">Masterpieces</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-black">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <Button className="w-full bg-white/90 text-black hover:bg-primary hover:text-white" asChild>
                                        <Link href={`/products/${product.id}`}>View Details</Link>
                                    </Button>
                                </div>
                            </div>

                            <h3 className="text-xl font-serif text-white mb-1 group-hover:text-primary transition-colors">{product.title}</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">{product.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
