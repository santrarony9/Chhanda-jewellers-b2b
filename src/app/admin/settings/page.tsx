"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import { useRouter } from "next/navigation"
import { ImageUpload } from "@/components/ui/image-upload"

interface Category {
    title: string
    subtitle: string
    href: string
    image: string
    colSpan?: string
    delay?: number
    gradient?: string
}

interface GalleryItem {
    title: string
    span?: string
    image: string
}

interface ProductItem {
    id: string
    title: string
    category: string
    image: string
    price: string
}

interface SettingsData {
    phone: string
    email: string
    address: string
    facebook: string
    instagram: string
    whatsapp: string
    companyProfileUrl: string
    home: {
        heroImage: string
        categories: Category[]
    }
    manufacturing: {
        gallery: GalleryItem[]
    }
    products: {
        featured: ProductItem[]
    }
}

export default function SettingsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState<SettingsData>({
        phone: "",
        email: "",
        address: "",
        facebook: "",
        instagram: "",
        whatsapp: "",
        companyProfileUrl: "",
        home: {
            heroImage: "",
            categories: []
        },
        manufacturing: {
            gallery: []
        },
        products: {
            featured: []
        },
        // Using explicit any to avoid rewriting the whole type interface right now
        // @ts-ignore
        ...({} as any)
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
                    whatsapp: data.data.whatsapp || "",
                    companyProfileUrl: data.data.companyProfileUrl || "",
                    home: data.data.home || { heroImage: "", categories: [] },
                    manufacturing: data.data.manufacturing || { gallery: [] },
                    products: data.data.products || { featured: [] }
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
                    <form onSubmit={handleSubmit} className="space-y-12">

                        {/* Contact & Socials */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif text-primary border-b border-zinc-800 pb-4">General Settings</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-medium text-white">Contact Information</h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <Label>Phone Number</Label>
                                            <Input name="phone" value={formData.phone} onChange={handleChange} className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                        <div>
                                            <Label>Email Address</Label>
                                            <Input name="email" value={formData.email} onChange={handleChange} className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                        <div>
                                            <Label>Physical Address</Label>
                                            <Input name="address" value={formData.address} onChange={handleChange} className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-medium text-white">Social Media Links</h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <Label>Facebook URL</Label>
                                            <Input name="facebook" value={formData.facebook} onChange={handleChange} placeholder="https://facebook.com/..." className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                        <div>
                                            <Label>Instagram URL</Label>
                                            <Input name="instagram" value={formData.instagram} onChange={handleChange} placeholder="https://instagram.com/..." className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                        <div>
                                            <Label>WhatsApp Number</Label>
                                            <Input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+91..." className="bg-black border-zinc-700 text-white focus:border-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Resources</h3>
                                <div>
                                    <Label>Company Profile Download URL (PDF)</Label>
                                    <Input name="companyProfileUrl" value={formData.companyProfileUrl} onChange={handleChange} placeholder="https://example.com/profile.pdf" className="bg-black border-zinc-700 text-white focus:border-primary" />
                                    <p className="text-xs text-gray-500 mt-1">External link to PDF (Google Drive, S3, etc.)</p>
                                </div>
                            </div>
                        </div>

                        {/* Home Page Content */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif text-primary border-b border-zinc-800 pb-4">Home Page Content</h2>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Hero Section</h3>
                                <div>
                                    <Label className="mb-2 block">Hero Image</Label>
                                    <ImageUpload
                                        value={formData.home?.heroImage || ''}
                                        onChange={(val) => setFormData({ ...formData, home: { ...formData.home, heroImage: val } })}
                                    />
                                    <p className="text-xs text-gray-500 mt-2">Recommended: 1920x1080px, WebP or PNG</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Featured Categories (4 Items)</h3>
                                <div className="grid gap-6">
                                    {formData.home?.categories?.map((cat: any, index: number) => (
                                        <div key={index} className="p-4 border border-zinc-800 rounded-lg bg-black/50">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="col-span-2 md:col-span-1">
                                                    <Label className="mb-2 block">Card Image</Label>
                                                    <ImageUpload
                                                        value={cat.image}
                                                        onChange={(val) => {
                                                            const newCats = [...formData.home.categories];
                                                            newCats[index].image = val;
                                                            setFormData({ ...formData, home: { ...formData.home, categories: newCats } });
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-span-2 md:col-span-1 space-y-4">
                                                    <div>
                                                        <Label>Title</Label>
                                                        <Input
                                                            value={cat.title}
                                                            onChange={(e) => {
                                                                const newCats = [...formData.home.categories];
                                                                newCats[index].title = e.target.value;
                                                                setFormData({ ...formData, home: { ...formData.home, categories: newCats } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Subtitle</Label>
                                                        <Input
                                                            value={cat.subtitle}
                                                            onChange={(e) => {
                                                                const newCats = [...formData.home.categories];
                                                                newCats[index].subtitle = e.target.value;
                                                                setFormData({ ...formData, home: { ...formData.home, categories: newCats } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Link (href)</Label>
                                                        <Input
                                                            value={cat.href}
                                                            onChange={(e) => {
                                                                const newCats = [...formData.home.categories];
                                                                newCats[index].href = e.target.value;
                                                                setFormData({ ...formData, home: { ...formData.home, categories: newCats } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing Page Content */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif text-primary border-b border-zinc-800 pb-4">Manufacturing Page</h2>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Factory Gallery (5 Items)</h3>
                                <div className="grid gap-6">
                                    {formData.manufacturing?.gallery?.map((item: any, index: number) => (
                                        <div key={index} className="p-4 border border-zinc-800 rounded-lg bg-black/50">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="col-span-2 md:col-span-1">
                                                    <Label className="mb-2 block">Gallery Image</Label>
                                                    <ImageUpload
                                                        value={item.image}
                                                        onChange={(val) => {
                                                            const newGallery = [...formData.manufacturing.gallery];
                                                            newGallery[index].image = val;
                                                            setFormData({ ...formData, manufacturing: { ...formData.manufacturing, gallery: newGallery } });
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-span-2 md:col-span-1">
                                                    <div>
                                                        <Label>Title</Label>
                                                        <Input
                                                            value={item.title}
                                                            onChange={(e) => {
                                                                const newGallery = [...formData.manufacturing.gallery];
                                                                newGallery[index].title = e.target.value;
                                                                setFormData({ ...formData, manufacturing: { ...formData.manufacturing, gallery: newGallery } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Products Page Content */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-serif text-primary border-b border-zinc-800 pb-4">Products Page</h2>

                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-white">Featured Collection (3 Items)</h3>
                                <div className="grid gap-6">
                                    {formData.products?.featured?.map((prod: any, index: number) => (
                                        <div key={index} className="p-4 border border-zinc-800 rounded-lg bg-black/50">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="col-span-2 md:col-span-1">
                                                    <Label className="mb-2 block">Product Image</Label>
                                                    <ImageUpload
                                                        value={prod.image}
                                                        onChange={(val) => {
                                                            const newFeatured = [...formData.products.featured];
                                                            newFeatured[index].image = val;
                                                            setFormData({ ...formData, products: { ...formData.products, featured: newFeatured } });
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-span-2 md:col-span-1 space-y-4">
                                                    <div>
                                                        <Label>Title</Label>
                                                        <Input
                                                            value={prod.title}
                                                            onChange={(e) => {
                                                                const newFeatured = [...formData.products.featured];
                                                                newFeatured[index].title = e.target.value;
                                                                setFormData({ ...formData, products: { ...formData.products, featured: newFeatured } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Category</Label>
                                                        <Input
                                                            value={prod.category}
                                                            onChange={(e) => {
                                                                const newFeatured = [...formData.products.featured];
                                                                newFeatured[index].category = e.target.value;
                                                                setFormData({ ...formData, products: { ...formData.products, featured: newFeatured } });
                                                            }}
                                                            className="bg-black border-zinc-700 text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-zinc-800 flex justify-end container mx-auto z-50">
                            <Button type="submit" disabled={saving} className="bg-primary text-black font-bold h-12 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                                Save All Changes
                            </Button>
                        </div>
                        <div className="h-20" /> {/* Spacer for fixed footer */}

                    </form>
                </div>
            </div>
        </div>
    )
}
