"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
    {
        title: "Gold Jewellery",
        subtitle: "22K & 18K Hallmarked",
        href: "/products?cat=gold",
        gradient: "from-[#D4AF37]/20 to-[#AA8C2C]/5", // Gold
        visual: "/cat-gold.png",
        colSpan: "md:col-span-2",
        delay: 0
    },
    {
        title: "Diamond Jewellery",
        subtitle: "VVS/VS Clarity Certified",
        href: "/products?cat=diamond",
        gradient: "from-blue-200/10 to-blue-400/5", // Diamond
        visual: "/cat-diamond.png",
        colSpan: "md:col-span-1",
        delay: 0.1
    },
    {
        title: "Bridal Collection",
        subtitle: "Wedding Sets",
        href: "/products?cat=bridal",
        gradient: "from-red-800/20 to-rose-900/10", // Deep Red/Rose
        visual: "/cat-bridal.png",
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        title: "Lightweight Daily Wear",
        subtitle: "Modern & Minimal",
        href: "/products?cat=lightweight",
        gradient: "from-zinc-700/30 to-zinc-900/30",
        visual: "/cat-lightweight.png",
        colSpan: "md:col-span-2",
        delay: 0.3
    }
]

export function FeaturedCategories() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Collections</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Curated <span className="text-gray-500 italic">Excellence</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary hover:text-black rounded-none px-6" asChild>
                        <Link href="/products">View Complete Catalog <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className={`${cat.colSpan} h-[400px] group relative overflow-hidden rounded-sm border border-white/5 bg-surface-dark backdrop-blur-sm hover:border-primary/30 transition-all duration-500`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: cat.delay, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Link href={cat.href} className="flex flex-col h-full justify-between p-8 z-10 relative">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Visual Cue */}
                                <div className="absolute top-0 right-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10">
                                    {cat.visual ? (
                                        <img src={cat.visual} alt={cat.title} className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700" />
                                    ) : (
                                        <div className="w-full h-full bg-surface-light/10" />
                                    )}
                                </div>

                                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                                        <ArrowRight className="h-5 w-5 text-white" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-300 text-shadow">{cat.title}</h3>
                                    <div className="h-[1px] w-12 bg-primary/50 mb-3 group-hover:w-20 transition-all duration-500" />
                                    <p className="text-gray-300 text-sm tracking-wide uppercase text-shadow">{cat.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
