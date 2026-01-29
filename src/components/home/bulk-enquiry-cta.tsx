"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BulkEnquiryCTA() {
    return (
        <section className="py-20 relative overflow-hidden bg-primary">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="container relative mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-black font-bold mb-6">
                    Ready to Scale Your Jewellery Business?
                </h2>
                <p className="text-black/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
                    Whether you need OEM manufacturing, private labeling, or bulk wholesale supply,
                    Chhanda Jewellers delivers excellence at competitive rates.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-black text-white hover:bg-black/80 rounded-full px-8 py-6 text-lg" asChild>
                        <Link href="/contact">Start Bulk Enquiry</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-lg bg-transparent" asChild>
                        <Link href="/partner">Become a Partner</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
