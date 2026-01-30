"use client"

import React from "react"
import { motion } from "framer-motion"
import { PencilRuler, Flame, Hammer, Gem, Search, PackageCheck } from "lucide-react"

const steps = [
    {
        icon: PencilRuler,
        title: "1. Design & CAD",
        desc: "Concepts are transformed into 3D models using Matrix/Rhino, ensuring precision before production begins."
    },
    {
        icon: Flame,
        title: "2. Casting",
        desc: "Using lost-wax casting with advanced inductothermy machines for flaw-free gold base structures."
    },
    {
        icon: Hammer,
        title: "3. Filing & Polishing",
        desc: "Rough castings are manually filed and pre-polished to prepare the surface for stone setting."
    },
    {
        icon: Gem,
        title: "4. Stone Setting",
        desc: "Master setters hand-set diamonds and gemstones (Prong, Pave, Bezel) with microscopic precision."
    },
    {
        icon: Search,
        title: "5. Quality Inspection",
        desc: "Rigorous checking for purity, weight, loose stones, and finishing quality."
    },
    {
        icon: PackageCheck,
        title: "6. Final Buffing & Plating",
        desc: "The final mirror-polish and rhodium plating give the jewellery its premium turnover."
    }
]

export function ManufacturingWorkflow() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">The Process</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-white">From Sketch to Reality</h3>
                </div>

                <div className="relative">
                    <div className="relative">
                        {/* Central Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-light -translate-x-1/2" />

                        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-8 gap-y-16">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    {/* Left Column Content (Even Index - Desktop Only) */}
                                    <div className={`hidden md:block md:text-right ${index % 2 === 0 ? 'visible' : 'invisible'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed max-w-sm ml-auto">{step.desc}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center Icon Column */}
                                    <div className="flex justify-center items-start relative z-10">
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="h-16 w-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 z-20"
                                        >
                                            <step.icon className="h-8 w-8 text-primary" />
                                        </motion.div>
                                    </div>

                                    {/* Right Column Content (Odd Index - Desktop Only) */}
                                    <div className={`hidden md:block md:text-left ${index % 2 !== 0 ? 'visible' : 'invisible'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed max-w-sm mr-auto">{step.desc}</p>
                                        </motion.div>
                                    </div>

                                    {/* Mobile Content (Below Icon) */}
                                    <div className="md:hidden col-span-1 text-center -mt-8 mb-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
                                        </motion.div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
