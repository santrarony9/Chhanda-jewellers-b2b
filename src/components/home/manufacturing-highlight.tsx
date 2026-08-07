"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, MoveRight } from "lucide-react"

interface ManufacturingHighlightProps {
    data?: {
        founderImage?: string
        founderName?: string
        founderTitle?: string
        yearsOfMastery?: string
        heading?: string
        subheading?: string
        description?: string
        mdImage?: string
        mdName?: string
        mdTitle?: string
        mdDescription?: string
    }
}

export function ManufacturingHighlight({ data }: ManufacturingHighlightProps) {
    return (
        <section className="py-32 bg-surface-dark relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side - Dual Leadership */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-1 mt-8 lg:mt-0">
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-6">
                            {/* Founder - Chairman */}
                            <motion.div
                                className="flex-1 relative h-[400px] sm:h-[450px] md:h-[550px] group w-full"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="absolute inset-0 bg-zinc-900 border border-white/5 overflow-hidden rounded-xl md:rounded-none">
                                    <img
                                        src={data?.founderImage || "/founder.jpg"}
                                        alt={`${data?.founderName || "Mr. Hemanta Koley"} - ${data?.founderTitle || "Chairman"}, Chhanda Jewellers`}
                                        className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                                    <div className="absolute bottom-6 left-6 z-20 pr-4">
                                        <div className="text-xl md:text-2xl font-serif font-bold text-white mb-0.5">{data?.founderName || "Mr. Hemanta Koley"}</div>
                                        <div className="text-primary uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium mb-2">{data?.founderTitle || "Chairman"}</div>
                                        <div className="text-2xl md:text-3xl font-serif font-bold text-white/80">{data?.yearsOfMastery || "25+"}</div>
                                        <div className="text-gray-400 uppercase tracking-[0.15em] text-[9px] md:text-[10px] font-medium">Years of Mastery</div>
                                    </div>
                                </div>
                                {/* Decorative Frame */}
                                <div className="hidden md:block absolute -inset-3 border border-primary/20 -z-10 translate-x-3 translate-y-3" />
                            </motion.div>

                            {/* Son - Managing Director */}
                            <motion.div
                                className="flex-1 relative h-[400px] sm:h-[450px] md:h-[550px] group w-full"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-zinc-900 border border-white/5 overflow-hidden rounded-xl md:rounded-none">
                                    <img
                                        src={data?.mdImage || "/rabi-shankar.jpg"}
                                        alt={`${data?.mdName || "Rabi Shankar Koley"} - Managing Director, Chhanda Jewellers`}
                                        className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                                    <div className="absolute bottom-6 left-6 z-20 pr-4">
                                        <div className="text-xl md:text-2xl font-serif font-bold text-white mb-0.5">{data?.mdName || "Rabi Shankar Koley"}</div>
                                        <div className="text-primary uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium mb-2">{data?.mdTitle || "Managing Director"}</div>
                                        <div className="text-gray-400 text-xs leading-relaxed max-w-[200px]">{data?.mdDescription || "Now leading Chhanda Jewellers into the next era of excellence."}</div>
                                    </div>
                                </div>
                                {/* Decorative Frame */}
                                <div className="hidden md:block absolute -inset-3 border border-primary/20 -z-10 -translate-x-3 translate-y-3" />
                            </motion.div>
                        </div>
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
                                {data?.heading || "Precision Casting meets"} <br />
                                <span className="text-gray-500 italic">{data?.subheading || "Bengal's Artistry"}</span>
                            </h3>

                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                                {data?.description || "Our Singur facility is equipped with advanced Vacuum Casting technology and Laser Soldering units. Yet, we believe the soul of jewellery lies in the hands of the artisan. We combine automation with unmatched hand-finishing."}
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
