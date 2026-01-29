"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
    {
        title: "Gold Jewellery",
        subtitle: "22K & 18K Hallmarked",
        image: "/images/gold-cat.jpg", // Placeholder
        href: "/products?cat=gold",
        color: "from-yellow-600/20 to-yellow-900/20"
    },
    {
        title: "Diamond Jewellery",
        subtitle: "Certified VVS/VS Clarity",
        image: "/images/diamond-cat.jpg", // Placeholder
        href: "/products?cat=diamond",
        color: "from-blue-100/10 to-blue-300/10"
    },
    {
        title: "Bridal Collection",
        subtitle: "Heavy Sets for Weddings",
        image: "/images/bridal-cat.jpg", // Placeholder
        href: "/products?cat=bridal",
        color: "from-red-900/20 to-pink-900/20"
    }
]

export function FeaturedCategories() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-light to-transparent opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-white">Crafted for Excellence</h3>
                    </div>
                    <Button variant="link" className="hidden md:inline-flex text-primary" asChild>
                        <Link href="/products">View All Categories <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href={cat.href} className="group block relative h-[500px] overflow-hidden rounded-xl border border-surface-light">
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} group-hover:scale-105 transition-transform duration-700 ease-out`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                                {/* Visual Placeholder for Image (Remove when real images added) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
                                    <h4 className="text-9xl font-serif text-white/10 rotate-[-15deg]">{cat.title.split(' ')[0][0]}</h4>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{cat.title}</h4>
                                    <p className="text-gray-300 text-sm mb-6 max-w-[80%]">{cat.subtitle}</p>
                                    <span className="inline-flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                                        Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/products">View All Categories</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
