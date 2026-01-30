"use client"

import { ShieldCheck, Award, CheckCircle } from "lucide-react"

export function QualityCertification() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif text-white mb-12">Certified Purity & Trust</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6">
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <Award className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">BIS Hallmark</h3>
                        <p className="text-gray-400 text-sm">
                            Every piece of gold jewellery is BIS Hallmarked (HUID), guaranteeing the purity of 22K (916) or 18K (750) gold as per government standards.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 border-x border-surface-light/50">
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Diamond Certification</h3>
                        <p className="text-gray-400 text-sm">
                            Our diamond jewellery comes with authenticity certificates (IGI, HRD, SGI), ensuring clarity, color, and cut quality.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6">
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <CheckCircle className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Quality Checks</h3>
                        <p className="text-gray-400 text-sm">
                            A rigorous 3-stage quality control process (Casting, Setting, Finishing) ensures zero defects in bulk supplies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
