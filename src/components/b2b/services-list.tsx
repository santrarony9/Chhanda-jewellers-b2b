"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Truck, Copy, Users, Globe2, Briefcase } from "lucide-react"

const services = [
    {
        icon: Truck,
        title: "Bulk Wholesale Supply",
        desc: "Direct supply to retailers with competitive wholesale pricing. Order in bulk across categories (Gold, Diamond)."
    },
    {
        icon: Copy,
        title: "OEM Manufacturing",
        desc: "Original Equipment Manufacturing based on your CAD designs or samples. We bring your vision to life."
    },
    {
        icon: Briefcase,
        title: "Private Label Service",
        desc: "Launch your own brand with our manufacturing backing. Complete white-label solutions including packaging."
    },
    {
        icon: Users,
        title: "Retailer Partnership",
        desc: "Join our network of partner retailers. Get exclusive access to new collections and marketing support."
    },
    {
        icon: Globe2,
        title: "Export Ready",
        desc: "Compliant with international standards for Hallmark and Purity. Ready for global export markets."
    }
]

export function ServicesList() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Services</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-white">Partner with Excellence</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors group">
                                <CardHeader>
                                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
