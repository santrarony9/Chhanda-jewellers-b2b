"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-0" />

            {/* Ambient Spotlights */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-primary/50"></span>
                            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Est. 2000 • West Bengal</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8">
                            Legacy of <br />
                            <span className="text-gold-gradient relative inline-block">
                                Pure Gold
                                {/* Decorative underline */}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                            Chhanda Jewellers defines the standard of B2B jewellery manufacturing.
                            We blend traditional artistry with modern precision to deliver exquisitely finished Hallmark jewellery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button className="h-14 px-8 rounded-none border border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 uppercase tracking-wider text-sm font-semibold group">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Start Partnership
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-14 px-8 rounded-none border-zinc-800 text-gray-400 hover:text-white hover:border-white transition-all duration-300 uppercase tracking-wider text-sm" asChild>
                                <Link href="/products">View Collections</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
                            <div>
                                <h3 className="text-3xl font-serif text-white mb-1">25+</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-white mb-1">10k+</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Designs Created</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-white mb-1">100%</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Hallmark Purity</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block h-[700px] w-full"
                    >
                        {/* Main Hero Visual */}
                        <div className="absolute top-10 right-0 w-full h-full">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                <Image
                                    src="/hero-jewellery-v2.png"
                                    alt="Exquisite Gold Jewellery"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    sizes="(max-width: 1200px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating 'Premium' Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -left-12 top-1/3 bg-black/80 backdrop-blur-md border border-primary/30 p-6 max-w-[200px]"
                        >
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
                            </div>
                            <p className="text-gray-300 text-sm font-light">Trusted by leading retailers across India.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
