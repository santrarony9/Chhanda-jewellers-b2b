"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Factory, Truck, Stamp } from "lucide-react"

const badges = [
    {
        icon: Factory,
        title: "In-House Manufacturing",
        desc: "State-of-the-art facility in Singur"
    },
    {
        icon: Truck,
        title: "Bulk Supply Capable",
        desc: "Seamless large-scale order fulfillment"
    },
    {
        icon: Stamp,
        title: "100% BIS Hallmark",
        desc: "Guaranteed purity and certification"
    },
    {
        icon: ShieldCheck,
        title: "Quality Controlled",
        desc: "Rigorous 3-step quality checks"
    }
]

export function TrustBadges() {
    return (
        <section className="py-12 border-b border-surface-light bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface-light/50 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <badge.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-white text-lg">{badge.title}</h3>
                                <p className="text-gray-400 text-sm">{badge.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
