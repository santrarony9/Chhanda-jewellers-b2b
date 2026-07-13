import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"
import dbConnect from "@/lib/db"
import SiteSettings from "@/models/SiteSettings"

async function getSettings() {
    try {
        await dbConnect()
        const settings = await SiteSettings.findOne().lean()
        if (!settings) return {}
        return JSON.parse(JSON.stringify(settings))
    } catch (error) {
        console.error("Failed to fetch footer settings:", error);
        return {}
    }
}

export async function Footer() {
    const settings = await getSettings()

    return (
        <footer className="bg-[#050505] border-t border-surface-light/20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-10 w-10">
                                <img
                                    src={settings.logo || "/icon.png"}
                                    alt="Chhanda Jewellers Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-wide text-primary">
                                CHHANDA <span className="text-foreground font-light text-sm block tracking-[0.2em]">JEWELLERS</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Legacy of excellence in Diamond Jewellery manufacturing.
                            Partnering with retailers across India for premium bulk supply and custom craftsmanship.
                        </p>
                        <div className="flex gap-4">
                            {settings.facebook && <SocialLink href={settings.facebook} icon={<Facebook className="h-5 w-5" />} />}
                            {settings.instagram && <SocialLink href={settings.instagram} icon={<Instagram className="h-5 w-5" />} />}
                            <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
                        </div>

                        <div className="pt-4">
                            <a
                                href={settings.companyProfileUrl || "#"}
                                target={settings.companyProfileUrl ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-3 transition-colors duration-300 uppercase tracking-widest text-xs font-bold"
                            >
                                <Download className="h-4 w-4" />
                                Download Profile
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-primary font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/manufacturing">Manufacturing Process</FooterLink>
                            <FooterLink href="/b2b">B2B Services</FooterLink>
                            <FooterLink href="/gallery">Factory Gallery</FooterLink>
                            <FooterLink href="/partner">Become a Partner</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-primary font-serif text-lg mb-6">Products</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/products?cat=Diamond Jewellery">Diamond Jewellery (18K, 14K, 9K)</FooterLink>
                            <FooterLink href="/products?cat=Bridal">Gift Collection</FooterLink>
                            <FooterLink href="/products?cat=Lightweight">Lightweight Daily Wear</FooterLink>
                            <FooterLink href="/products?cat=Custom">Custom Orders</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-primary font-serif text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>18, HariramGoenka Street, Burabuzar, Kolkata, India. Pin code - 700007</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+918981420463" className="hover:text-primary transition-colors">+91 8981420463</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:chhandajewellers@gmail.com" className="hover:text-primary transition-colors">chhandajewellers@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Factory: Singur, Hoogly, West Bengal, India 722409</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-surface-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Chhanda Jewellers. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-surface-light flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300"
        >
            {icon}
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                {children}
            </Link>
        </li>
    )
}
