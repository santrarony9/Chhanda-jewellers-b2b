"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ManufacturingHighlight() {
    return (
        <section className="py-24 bg-surface-dark relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative h-[500px]">
                        {/* Abstract representation of factory/craftsmanship since no images yet */}
                        <div className="absolute inset-0 bg-surface-light rounded-lg border border-surface-light overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                            <span className="text-surface-light/20 font-serif text-8xl font-black">MFG</span>
                        </div>
                        {/* Floating Card */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-black border border-primary/30 p-6 rounded-lg max-w-xs shadow-2xl"
                        >
                            <h4 className="text-primary font-bold text-3xl mb-1">25+</h4>
                            <p className="text-gray-400 text-sm">Years of manufacturing excellence in Singur</p>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Our Process</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">From Design to Delivery</h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We combine traditional karigari with modern casting technology to produce jewellery that meets international standards. Our manufacturing unit in Singur handles everything from CAD design to final polishing.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Advanced CAD/CAM Design', 'Vacuum Casting Technology', 'Handcrafted Stone Setting', 'Precision Laser Soldering'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" variant="default" asChild>
                            <Link href="/manufacturing">See How We Make It</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
