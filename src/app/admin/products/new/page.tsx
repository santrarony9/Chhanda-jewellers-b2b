"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2, Plus, X } from "lucide-react"

export default function AddProductPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imageInput, setImageInput] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "" as number | string,
        category: "Gold Jewellery",
        material: "22K Gold",
        weight: "",
        images: [] as string[],
        isFeatured: false
    });

    const categories = ["Gold Jewellery", "Diamond Jewellery", "Platinum", "Gemstones", "Coins", "Custom"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const addImage = () => {
        if (imageInput.trim()) {
            setFormData(prev => ({
                ...prev,
                images: [...prev.images, imageInput.trim()]
            }));
            setImageInput("");
        }
    };

    const removeImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create product");

            router.push('/admin');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Error creating product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" onClick={() => router.back()} className="text-gray-400 hover:text-white">
                        <ArrowLeft className="h-5 w-5 mr-2" /> Back
                    </Button>
                    <h1 className="text-3xl font-serif text-primary">Add New Product</h1>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Product Title *</Label>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-black border-zinc-700 focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Category *</Label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full h-10 rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Description *</Label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                className="w-full min-h-[100px] rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-white"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label>Material</Label>
                                <Input
                                    name="material"
                                    value={formData.material}
                                    onChange={handleInputChange}
                                    className="bg-black border-zinc-700 focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Weight</Label>
                                <Input
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 15.5g"
                                    required
                                    className="bg-black border-zinc-700 focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Price (Optional)</Label>
                                <Input
                                    name="price"
                                    type="number"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="bg-black border-zinc-700 focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Image URLs</Label>
                            <div className="flex gap-2">
                                <Input
                                    value={imageInput}
                                    onChange={(e) => setImageInput(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                    className="bg-black border-zinc-700 focus:border-primary"
                                />
                                <Button type="button" onClick={addImage} variant="secondary">
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>

                            {formData.images.length > 0 && (
                                <div className="flex flex-wrap gap-4 mt-4">
                                    {formData.images.map((url, i) => (
                                        <div key={i} className="relative group w-24 h-24 bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                                            <img src={url} alt="Preview" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(i)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <input
                                type="checkbox"
                                name="isFeatured"
                                id="isFeatured"
                                checked={formData.isFeatured}
                                onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="isFeatured">Feature on Homepage?</Label>
                        </div>

                        <div className="pt-6 flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                            <Button type="submit" disabled={loading} className="bg-primary text-black font-bold">
                                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                Create Product
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
