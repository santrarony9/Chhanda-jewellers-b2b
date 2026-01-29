"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactForm() {
    return (
        <div className="bg-surface-dark border border-surface-light rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-white mb-2">Request Bulk Quote</h3>
            <p className="text-gray-400 mb-8 text-sm">Fill out the form below and our sales team will get back to you within 24 hours.</p>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Company Name *</label>
                        <input required className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="Your Jewellery Brand" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Contact Person *</label>
                        <input required className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="Full Name" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Phone Number *</label>
                        <input required type="tel" className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email Address *</label>
                        <input required type="email" className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="name@company.com" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">GST Number (Optional)</label>
                        <input className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="GSTIN" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Est. MOQ Requirement *</label>
                        <select className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none">
                            <option>50g - 100g</option>
                            <option>100g - 500g</option>
                            <option>500g - 1kg</option>
                            <option>1kg+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Product Interest *</label>
                    <div className="flex gap-4 flex-wrap">
                        {["Gold Jewellery", "Diamond Jewellery", "Loose Diamonds", "Custom Manufacturing"].map((item, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-600 bg-surface-dark text-primary focus:ring-primary h-4 w-4" />
                                <span className="text-sm text-gray-300">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Message / Specific Requirements</label>
                    <textarea className="w-full bg-background border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:outline-none min-h-[120px]" placeholder="Tell us about your designs or requirements..." />
                </div>

                <Button className="w-full bg-primary text-black font-bold hover:bg-primary/90 py-6 text-lg">Send Enquiry</Button>
            </form>
        </div>
    )
}
