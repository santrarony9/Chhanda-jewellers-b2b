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

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-black/70 backdrop-blur-md border-white/5 py-3"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Chhanda Jewellers</span>
                        {/* Company Logo */}
                        <div className="relative h-12 w-12">
                            <Image
                                src="/logo.png"
                                alt="Chhanda Jewellers Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 48px, 48px"
                                priority
                            />
                        </div>
                        <span className="font-serif text-xl font-bold tracking-wide text-primary">
                            CHHANDA <span className="text-foreground font-light">JEWELLERS</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        variant="ghost"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium leading-6 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="default" className="rounded-full px-6" asChild>
                        <Link href="/login">Partner Login</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn(
                "lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out",
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex items-center justify-between px-4 h-20 border-b border-surface-light">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <div className="relative h-10 w-10">
                            <Image
                                src="/logo.png"
                                alt="Chhanda Jewellers Logo"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>
                        <span className="font-serif text-lg font-bold tracking-wide text-primary">
                            CHHANDA
                        </span>
                    </Link>
                    <Button
                        variant="ghost"
                        className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </Button>
                </div>
                <div className="mt-6 flow-root px-4">
                    <div className="-my-6 divide-y divide-surface-light">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-surface-light hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            <Button className="w-full justify-center" asChild>
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Partner Login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
