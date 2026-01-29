"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, MoveRight } from "lucide-react"

export function ManufacturingHighlight() {
    return (
        <section className="py-32 bg-surface-dark relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative h-[600px] order-2 lg:order-1">
                        <div className="absolute inset-0 bg-zinc-900 border border-white/5 overflow-hidden group">
                            {/* Placeholder for Video/Image */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10" />
                            <div className="h-full w-full bg-[url('/grid.svg')] opacity-5 scale-150" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0">
                                <span className="block text-9xl font-serif font-black text-white/5">EST</span>
                                <span className="block text-9xl font-serif font-black text-white/5">2000</span>
                            </div>

                            <motion.div
                                className="absolute bottom-10 left-10 z-20"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-6xl font-serif font-bold text-white mb-2">25+</div>
                                <div className="text-primary uppercase tracking-[0.3em] text-sm font-medium">Years of Mastery</div>
                            </motion.div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
                                <span className="h-[1px] w-8 bg-primary"></span>
                                The Process
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight text-balance">
                                Precision Casting meets <br />
                                <span className="text-gray-500 italic">Bengal's Artistry</span>
                            </h3>

                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                                Our Singur facility is equipped with advanced Vacuum Casting technology and Laser Soldering units.
                                Yet, we believe the soul of jewellery lies in the hands of the artisan. We combine automation with unmatched
                                hand-finishing.
                            </p>

                            <ul className="grid grid-cols-1 gap-6 mb-12">
                                {[
                                    { t: 'Advanced CAD/CAM Design', d: 'Perfect symmetry & weight' },
                                    { t: 'Vacuum Casting Technology', d: 'Zero porosity finishes' },
                                    { t: 'Precision Laser Soldering', d: 'Seamless joints' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <div className="h-12 w-12 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                                            <Check className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-serif text-lg">{item.t}</h4>
                                            <p className="text-gray-500 text-sm">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none rounded-none px-8 font-semibold tracking-wide" asChild>
                                <Link href="/manufacturing" className="flex items-center gap-2">
                                    Explore Facility <MoveRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
