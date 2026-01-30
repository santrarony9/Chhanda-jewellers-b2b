"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
    {
        title: "100% Natural Jewellery",
        subtitle: "22K & 18K Hallmarked",
        href: "/products?cat=gold",
        gradient: "from-[#D4AF37]/30 to-[#AA8C2C]/5", // Gold
        visual: "/cat-natural-gold-new.png",
        colSpan: "md:col-span-2",
        delay: 0
    },
    {
        title: "Diamond Jewellery",
        subtitle: "IGI and HRD , SGI Certified",
        href: "/products?cat=diamond",
        gradient: "from-blue-100/10 to-blue-300/5", // Diamond (Subtle Cool)
        visual: "/cat-diamond-ring.png",
        colSpan: "md:col-span-1",
        delay: 0.1
    },
    {
        title: "Gift Collection",
        subtitle: "Wedding Sets",
        href: "/products?cat=bridal",
        gradient: "from-rose-900/40 to-red-900/10", // Deep Red/Rose
        visual: "/cat-gift-new.png",
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        title: "Lightweight Daily Wear",
        subtitle: "Modern & Minimal",
        href: "/products?cat=lightweight",
        gradient: "from-zinc-800/60 to-zinc-900/30",
        visual: "/cat-lightweight.png",
        colSpan: "md:col-span-2",
        delay: 0.3
    }
]

export function FeaturedCategories() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="h-4 w-4 text-primary-400" />
                            </motion.div>
                            <span className="text-primary-300 text-xs font-bold tracking-[0.3em] uppercase">Collections</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Curated <span className="text-white/40 italic font-light">Excellence</span>
                        </h2>
                    </motion.div>
                    <Button variant="ghost" className="text-primary-300 hover:bg-primary-500/10 hover:text-primary-200 rounded-none px-6 uppercase tracking-widest text-xs" asChild>
                        <Link href="/products">View Complete Catalog <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className={`${cat.colSpan} h-[450px] group relative overflow-hidden border border-white/5 bg-surface-dark backdrop-blur-sm`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: cat.delay, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Link href={cat.href} className="flex flex-col h-full justify-between p-8 z-10 relative">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-20 group-hover:opacity-50 transition-opacity duration-1000`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />

                                {/* Visual Cue */}
                                <div className="absolute top-0 right-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110 -z-10 origin-center grayscale-[20%] group-hover:grayscale-0">
                                    {cat.visual ? (
                                        <img src={cat.visual} alt={cat.title} className="w-full h-full object-cover object-center transition-all duration-700" />
                                    ) : (
                                        <div className="w-full h-full bg-surface-light/5" />
                                    )}
                                </div>

                                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                    <div className="bg-primary text-black p-3 rounded-none shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:bg-white transition-colors duration-300">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-lg">{cat.title}</h3>
                                    <div className="h-[1px] w-12 bg-primary/50 mb-3 group-hover:w-24 transition-all duration-700 ease-out" />
                                    <p className="text-gray-300 text-sm tracking-widest uppercase font-medium group-hover:text-white transition-colors duration-300">{cat.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
