"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cog, MapPin } from "lucide-react"

export function ManufacturingUnit() {
    return (
        <section className="py-24 bg-surface-dark relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 text-primary/80 mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">Heart of Singur, Hooghly</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">State-of-the-Art Manufacturing Unit</h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Our facility in Singur is equipped with advanced machinery for casting, laser cutting, and polishing, blending technology with the skilled hands of Bengal’s finest Karigars.
                        </p>
                        <p className="text-gray-400 mb-8">
                            We maintain strict control over every stage of production, ensuring that bulk orders are fulfilled with the same precision as individual custom pieces.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/manufacturing">Tour Our Factory</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        {/* Visual Placeholder for Factory Image */}
                        <div className="aspect-video bg-surface-light rounded-xl border border-surface-light overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cog className="h-24 w-24 text-primary/20 animate-spin-slow duration-[10000ms]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
