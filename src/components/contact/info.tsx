import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react"
import dbConnect from "@/lib/db"
import SiteSettings from "@/models/SiteSettings"

async function getSettings() {
    await dbConnect()
    const settings = await SiteSettings.findOne()
    return settings || {}
}

export async function ContactInfo() {
    const settings = await getSettings()

    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-3xl font-serif text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                    <InfoCard
                        icon={<MapPin className="h-6 w-6" />}
                        title="Factory & Office"
                        content={settings.address || 'Singur, Hooghly, West Bengal, India - 712409'}
                        action="Get Directions"
                        href="#"
                    />
                    <InfoCard
                        icon={<Phone className="h-6 w-6" />}
                        title="Phone"
                        content={settings.phone || '+91 98765 43210'}
                        action="Call Now"
                        href={`tel:${settings.phone}`}
                    />
                    <InfoCard
                        icon={<Mail className="h-6 w-6" />}
                        title="Email"
                        content={settings.email || 'contact@chhandajewellers.com'}
                        action="Send Email"
                        href={`mailto:${settings.email}`}
                    />
                </div>
            </div>

            <div className="bg-surface-dark border border-surface-light p-8 rounded-xl">
                <h3 className="text-xl font-serif text-white mb-4">Why Partner With Us?</h3>
                <ul className="space-y-3">
                    <FeatureItem text="Direct Manufacturer Pricing" />
                    <FeatureItem text="100% Hallmarked Inventory" />
                    <FeatureItem text="Custom Design Support" />
                    <FeatureItem text="Pan-India Secure Shipping" />
                </ul>
            </div>
        </div>
    )
}

function InfoCard({ icon, title, content, action, href }: any) {
    return (
        <div className="flex gap-4">
            <div className="h-12 w-12 rounded-lg bg-surface-dark border border-surface-light flex items-center justify-center text-primary shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-medium mb-1">{title}</h3>
                <p className="text-gray-400 mb-2 max-w-[250px]">{content}</p>
                <a href={href} className="text-primary text-sm font-bold hover:text-accent transition-colors flex items-center gap-1">
                    {action}
                </a>
            </div>
        </div>
    )
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-gray-400">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
            <span>{text}</span>
        </li>
    )
}
