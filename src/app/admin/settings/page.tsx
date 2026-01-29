"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        address: "",
        facebook: "",
        instagram: "",
        whatsapp: ""
    })

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/settings")
            const data = await res.json()
            if (data.success) {
                setFormData({
                    phone: data.data.phone || "",
                    email: data.data.email || "",
                    address: data.data.address || "",
                    facebook: data.data.facebook || "",
                    instagram: data.data.instagram || "",
                    whatsapp: data.data.whatsapp || ""
                })
            }
        } catch (error) {
            console.error("Failed to fetch settings", error)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            const res = await fetch("/api/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                alert("Settings updated successfully!")
                router.refresh()
            } else {
                alert("Failed to update settings")
            }
        } catch (error) {
            alert("Error updating settings")
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-20">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" onClick={() => router.push('/admin')} className="text-gray-400 hover:text-white">
                        <ArrowLeft className="h-5 w-5 mr-2" /> Back to Dashboard
                    </Button>
                    <h1 className="text-3xl font-serif text-primary">Site Configuration</h1>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-white border-b border-zinc-800 pb-2">Contact Information</h3>
                            <div className="grid gap-4">
                                <div>
                                    <Label>Phone Number</Label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <Label>Email Address</Label>
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <Label>Physical Address</Label>
                                    <Input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-white border-b border-zinc-800 pb-2">Social Media Links</h3>
                            <div className="grid gap-4">
                                <div>
                                    <Label>Facebook URL</Label>
                                    <Input
                                        name="facebook"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                        placeholder="https://facebook.com/..."
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <Label>Instagram URL</Label>
                                    <Input
                                        name="instagram"
                                        value={formData.instagram}
                                        onChange={handleChange}
                                        placeholder="https://instagram.com/..."
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <Label>WhatsApp Number</Label>
                                    <Input
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="+91..."
                                        className="bg-black border-zinc-700 text-white focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button type="submit" disabled={saving} className="bg-primary text-black font-bold h-12 px-8">
                                {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                                Save Configuration
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
