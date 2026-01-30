"use client"

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
                    {/* Vertical Line for Mobile */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-surface-light md:hidden" />

                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-24 relative">
                        {/* Center Line for Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-light -translate-x-1/2" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex gap-6 md:block ${index % 2 === 0 ? 'md:text-right md:pr-24' : 'md:text-left md:pl-24 md:mt-24'}`}
                            >
                                {/* Icon Circle */}
                                <div className={`
                    absolute top-0 md:top-0 h-16 w-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10
                    ${index % 2 === 0 ? 'md:-right-[3.5rem]' : 'md:-left-[3.5rem]'}
                    left-0 md:left-auto
                `}>
                                    <step.icon className="h-8 w-8 text-primary" />
                                </div>

                                <div className="pl-20 md:pl-0">
                                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
