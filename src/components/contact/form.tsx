"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        businessName: "",
        contactPerson: "",
        phone: "",
        email: "",
        gstNumber: "",
        moq: "50g - 100g",
        interests: [] as string[],
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (item: string) => {
        setFormData(prev => {
            const interests = prev.interests.includes(item)
                ? prev.interests.filter(i => i !== item)
                : [...prev.interests, item];
            return { ...prev, interests };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSuccess(true);
            setFormData({
                businessName: "",
                contactPerson: "",
                phone: "",
                email: "",
                gstNumber: "",
                moq: "50g - 100g",
                interests: [],
                message: ""
            });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface-dark border border-primary/20 rounded-xl p-12 text-center backdrop-blur-md shadow-2xl h-full flex flex-col items-center justify-center space-y-6"
            >
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-serif text-white font-bold">Enquiry Received</h3>
                <p className="text-gray-400 max-w-md mx-auto text-lg">
                    Thank you for your interest in Chhanda Jewellers. Our B2B sales team will review your requirements and contact you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    onClick={() => setSuccess(false)}
                    className="mt-8 border-primary/50 text-primary hover:bg-primary hover:text-black transition-all"
                >
                    Send Another Enquiry
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="bg-surface-dark border border-surface-light rounded-xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
            {/* Decorative glow effect */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-serif text-white mb-2 relative z-10">Request Bulk Quote</h3>
            <p className="text-gray-400 mb-8 text-sm relative z-10">Fill out the form below and our sales team will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">Company Name *</label>
                        <input
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder="Your Jewellery Brand"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">Contact Person *</label>
                        <input
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder="Full Name"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">Phone Number *</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            type="tel"
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">Email Address *</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            type="email"
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder="name@company.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">GST Number (Optional)</label>
                        <input
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleInputChange}
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-600"
                            placeholder="GSTIN"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-medium">Est. MOQ Requirement *</label>
                        <select
                            name="moq"
                            value={formData.moq}
                            onChange={handleInputChange}
                            className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all text-sm"
                        >
                            <option value="50g - 100g">50g - 100g</option>
                            <option value="100g - 500g">100g - 500g</option>
                            <option value="500g - 1kg">500g - 1kg</option>
                            <option value="1kg+">1kg+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Product Interest *</label>
                    <div className="flex gap-4 flex-wrap bg-background/30 p-4 rounded-lg border border-gray-800">
                        {["Gold Jewellery", "Diamond Jewellery", "Loose Diamonds", "Custom Manufacturing"].map((item, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer group select-none">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        className="peer sr-only"
                                        checked={formData.interests.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                    <div className="h-4 w-4 rounded border border-gray-600 bg-surface-dark transition-all peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary/50"></div>
                                    <CheckCircle2 className="absolute h-3 w-3 text-black opacity-0 transition-opacity peer-checked:opacity-100 left-0.5 top-0.5" />
                                </div>
                                <span className={`text-sm transition-colors ${formData.interests.includes(item) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Message / Specific Requirements</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 border border-gray-700 rounded-md p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none min-h-[120px] transition-all placeholder:text-gray-600"
                        placeholder="Tell us about your designs or requirements..."
                    />
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md text-sm flex items-center gap-2"
                        >
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-[#D4AF37] text-black font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 py-6 text-lg relative overflow-hidden"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                        </span>
                    ) : (
                        "Send Enquiry"
                    )}
                </Button>
            </form>
        </div>
    )
}
