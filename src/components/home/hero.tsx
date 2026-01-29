"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with luxury gradient and pattern overlay */}
            <div className="absolute inset-0 bg-luxury-gradient" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-black/40" />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-surface-light border border-surface-light text-primary text-sm font-medium tracking-wider mb-6">
                        EST. 1995 • SINGUR, WEST BENGAL
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Mastery in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FFE5B4] to-primary">
                            Gold & Diamond
                        </span>
                        <br /> Manufacturing
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                        Premier B2B partner for retailers and wholesalers.
                        Delivering hallmark purity, exquisite craftsmanship, and bulk supply solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full text-lg px-8 py-6" asChild>
                            <Link href="/contact">Request Bulk Quote</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6" asChild>
                            <Link href="/manufacturing">Explore Capability</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
