"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
    value?: string
    onChange: (value: string) => void
    disabled?: boolean
}

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState(value)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 2 * 1024 * 1024) { // 2MB Limit
            alert("File is too large. Max size is 2MB.")
            return
        }

        setLoading(true)
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64String = reader.result as string
            setPreview(base64String)
            onChange(base64String)
            setLoading(false)
        }
        reader.readAsDataURL(file)
    }

    const onClear = () => {
        setPreview("")
        onChange("")
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                disabled={disabled || loading}
            />

            {!preview ? (
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={disabled || loading}
                    className="w-full h-32 border-dashed border-2 flex flex-col items-center justify-center gap-2 hover:bg-white/5"
                >
                    <Upload className="h-6 w-6 text-gray-400" />
                    <span className="text-sm text-gray-400">
                        {loading ? "Processing..." : "Click to upload image"}
                    </span>
                    <span className="text-xs text-gray-500">(Max 2MB)</span>
                </Button>
            ) : (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10 group">
                    <img
                        src={preview}
                        alt="Upload preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Change
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={onClear}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
