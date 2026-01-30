"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

// Placeholders for now - normally these would be real shots from the factory
const defaultItems = [
    { title: "Wax Injection", span: "col-span-1 md:col-span-2 row-span-2", color: "bg-blue-900/20" },
    { title: "Casting Tree", span: "col-span-1 row-span-1", color: "bg-red-900/20" },
    { title: "Laser Soldering", span: "col-span-1 row-span-1", color: "bg-green-900/20" },
    { title: "Diamond Sorting", span: "col-span-1 row-span-1", color: "bg-yellow-900/20" },
    { title: "Manual Filing", span: "col-span-1 md:col-span-2 row-span-1", color: "bg-purple-900/20" },
]

interface ManufacturingGalleryProps {
    items?: any[]
}

export function ManufacturingGallery({ items = defaultItems }: ManufacturingGalleryProps) {
    const displayItems = items && items.length > 0 ? items : defaultItems;

    return (
        <section className="py-24 bg-surface-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">Factory Floor</h3>
                    <p className="text-gray-400">A glimpse inside our Singur manufacturing unit</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-[800px] md:h-[600px]">
                    {displayItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`${item.span || 'col-span-1'} relative rounded-xl overflow-hidden group border border-surface-light`}
                        >
                            {/* Support for both image and legacy color */}
                            {item.image ? (
                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            ) : (
                                <div className={`absolute inset-0 ${item.color || 'bg-primary/10'} transition-opacity opacity-50 group-hover:opacity-70`} />
                            )}

                            {!item.image && <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />}

                            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
                                <span className="text-white font-serif text-lg tracking-wide group-hover:text-primary transition-colors">
                                    {item.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
