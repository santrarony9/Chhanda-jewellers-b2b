"use client"

import { motion } from "framer-motion"

export function CompanyLegacy() {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm font-bold tracking-widest uppercase mb-3"
                    >
                        Since 1995
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white mb-8"
                    >
                        A Legacy of Pure Gold & Trust
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        Chhanda Jewellers began as a humble workshop in Singur with a singular vision: to create jewellery that is as pure in quality as it is beautiful in design. Over three decades, we have evolved from a local jeweller to a premier B2B manufacturer, supplying retailers and wholesalers across West Bengal and beyond with BIS Hallmarked gold and certified diamond jewellery.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { label: "Years of Excellence", value: "30+" },
                        { label: "Retail Partners", value: "150+" },
                        { label: "Designs Created", value: "5000+" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="p-8 border border-surface-light rounded-lg bg-surface-light/5 hover:border-primary/30 transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-serif text-primary mb-2 font-bold">{stat.value}</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
