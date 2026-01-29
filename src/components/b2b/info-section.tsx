"use client"

import { Check } from "lucide-react"

export function B2BInfo() {
    return (
        <section className="py-20 bg-surface-dark border-y border-surface-light">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-serif text-white mb-6">Why Choose Chhanda Jewellers?</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">MOQ Friendly</h4>
                                    <p className="text-gray-400">Flexible Minimum Order Quantities (MOQ) to support both emerging retailers and established chains.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Rapid Turnaround</h4>
                                    <p className="text-gray-400">Streamlined production allowing for 2-3 week delivery on standard bulk orders.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Transparent Pricing</h4>
                                    <p className="text-gray-400">Wholesale pricing linked to real-time gold rates plus fixed making charges.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-light/5 p-8 rounded-xl border border-surface-light">
                        <h4 className="text-primary font-serif text-xl mb-4">Start a Partnership</h4>
                        <p className="text-gray-300 mb-6">
                            Looking to source premium Bengali craftsmanship for your showroom? Let's discuss your requirements.
                        </p>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p><strong className="text-white">Gold Rate:</strong> Real-time MCX based booking</p>
                            <p><strong className="text-white">Payment:</strong> Advance + Delivery (RTGS/NEFT)</p>
                            <p><strong className="text-white">Delivery:</strong> Insured Logistics Pan-India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
