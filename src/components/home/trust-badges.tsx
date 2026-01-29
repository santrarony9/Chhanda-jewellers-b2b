"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Factory, Truck, Stamp } from "lucide-react"

const badges = [
    {
        icon: Factory,
        title: "In-House Manufacturing",
        desc: "Singur Facility"
    },
    {
        icon: Stamp,
        title: "100% BIS Hallmarked",
        desc: "Purity Guaranteed"
    },
    {
        icon: Truck,
        title: "Bulk Supply Capable",
        desc: "Pan-India Logistics"
    },
    {
        icon: ShieldCheck,
        title: "Quality Controlled",
        desc: "3-Step Verification"
    }
]

export function TrustBadges() {
    return (
        <section className="bg-[#080808] border-y border-white/5 py-12 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center px-4 group"
                        >
                            <div className="mb-4 p-3 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
                                <badge.icon className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-serif font-bold text-white text-lg mb-1">{badge.title}</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">{badge.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
