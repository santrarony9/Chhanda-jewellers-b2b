"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-serif text-white mb-6">Head Office & Factory</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    Our state-of-the-art manufacturing unit is located in the heart of Singur, seamlessly connected to Kolkata via NH-19. We welcome our partners to visit our facility by appointment.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Factory Address</h4>
                            <p className="text-gray-400 text-sm">Vill & P.O - Singur, Dist - Hooghly,<br />West Bengal, India - 712409</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Phone Support</h4>
                            <p className="text-gray-400 text-sm">+91 98765 43210 (Sales)</p>
                            <p className="text-gray-400 text-sm">+91 98765 43211 (Office)</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Email Inquiries</h4>
                            <p className="text-gray-400 text-sm">sales@chhandajewellers.com</p>
                            <p className="text-gray-400 text-sm">support@chhandajewellers.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Clock className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium">Business Hours</h4>
                            <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                            <p className="text-gray-400 text-sm">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full rounded-xl bg-surface-light overflow-hidden relative border border-surface-light">
                <div className="absolute inset-0 flex items-center justify-center bg-surface-dark/50">
                    <span className="text-gray-500 font-medium flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> Google Maps Embed
                    </span>
                </div>
            </div>
        </div>
    )
}
