"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "B2B Services", href: "/b2b" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
]

import { TimeDisplay } from "@/components/layout/time-display"
import { Download } from "lucide-react"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [profileUrl, setProfileUrl] = React.useState("")

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)

        // Fetch settings for profile URL
        fetch("/api/settings")
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data.companyProfileUrl) {
                    setProfileUrl(data.data.companyProfileUrl)
                }
            })
            .catch(err => console.error("Failed to fetch settings", err))

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-primary/10 py-2 shadow-lg"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex justify-end py-1">
                <TimeDisplay />
            </div>
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <span className="sr-only">Chhanda Jewellers</span>
                        {/* Company Logo */}
                        <div className="relative h-12 w-12 transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/icon.png"
                                alt="Chhanda Jewellers Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 48px, 56px"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-xl tracking-[0.15em] text-primary-400 font-medium">
                                CHHANDA
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-primary-200 transition-colors">
                                Jewellers
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        variant="ghost"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-7 w-7" aria-hidden="true" />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-medium leading-6 text-gray-300 hover:text-primary-300 transition-all duration-300 uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    <Button variant="outline" className="rounded-none border-primary/30 text-primary-200 hover:text-black hover:bg-primary-400 hover:border-primary-400 transition-all duration-300 uppercase text-xs tracking-widest px-4 py-2 backdrop-blur-sm" asChild>
                        <a href={profileUrl || "#"} target={profileUrl ? "_blank" : "_self"} rel="noopener noreferrer">
                            <Download className="h-3 w-3 mr-2" />
                            Profile
                        </a>
                    </Button>
                    <Button variant="outline" className="rounded-none border-primary/30 text-primary-200 hover:text-black hover:bg-primary-400 hover:border-primary-400 transition-all duration-300 uppercase text-xs tracking-widest px-6 py-2 backdrop-blur-sm" asChild>
                        <Link href="/login">Partner Login</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn(
                "lg:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-xl transition-transform duration-500 ease-spring",
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex items-center justify-between px-4 h-24 border-b border-primary/10">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <div className="relative h-12 w-12">
                            <Image
                                src="/icon.png"
                                alt="Chhanda Jewellers Logo"
                                fill
                                className="object-contain"
                                sizes="48px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-xl tracking-[0.15em] text-primary-400 font-medium">
                                CHHANDA
                            </span>
                        </div>
                    </Link>
                    <Button
                        variant="ghost"
                        className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-primary-300"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <X className="h-7 w-7" aria-hidden="true" />
                    </Button>
                </div>
                <div className="mt-6 flow-root px-6">
                    <div className="-my-6 divide-y divide-primary/5">
                        <div className="space-y-2 py-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-3 text-lg font-serif tracking-wide text-gray-200 hover:bg-white/5 hover:text-primary-300 transition-all duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-8 space-y-4">
                            <Button className="w-full justify-center bg-zinc-800 hover:bg-zinc-700 text-white font-medium tracking-widest uppercase py-6 rounded-none border border-zinc-700" asChild>
                                <a href={profileUrl || "#"} target={profileUrl ? "_blank" : "_self"} rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Profile
                                </a>
                            </Button>
                            <Button className="w-full justify-center bg-primary-600 hover:bg-primary-500 text-black font-medium tracking-widest uppercase py-6 rounded-none" asChild>
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Partner Login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
