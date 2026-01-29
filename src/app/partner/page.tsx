"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PartnerPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            <Navbar />

            <section className="py-20 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Become a Certified Retail Partner</h1>
                        <p className="text-gray-300 text-lg">
                            Join our network of 150+ retailers and get access to exclusive designs, priority manufacturing, and marketing support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Benefits */}
                        <div className="bg-surface-dark border border-surface-light rounded-xl p-8">
                            <h3 className="text-2xl font-serif text-white mb-6">Partner Benefits</h3>
                            <ul className="space-y-4">
                                {[
                                    "Direct Manufacturer Pricing",
                                    "Priority Order Fulfillment",
                                    "Custom Design Support (CAD)",
                                    "Digital Marketing Assets",
                                    "Area Exclusivity Options",
                                    "Flexible MOQ Terms"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <Check className="h-5 w-5 text-primary" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Form */}
                        <div className="bg-white/5 border border-surface-light rounded-xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-serif text-white mb-6">Partnership Application</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Full Name</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Business Name</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600" placeholder="Jewellers Name" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Phone</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600" placeholder="+91 98765 43210" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">GST Number</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600" placeholder="GSTIN" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Message</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none min-h-[100px] transition-all placeholder:text-gray-600" placeholder="Tell us about your business..." />
                                </div>

                                <Button className="w-full bg-primary text-black font-bold hover:bg-primary/90">Submit Application</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
