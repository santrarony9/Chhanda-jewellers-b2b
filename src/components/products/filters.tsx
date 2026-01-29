"use client"

import { Button } from "@/components/ui/button"

const categories = ["All Products", "Gold Jewellery", "Diamond Jewellery", "Bridal Set", "Lightweight Daily", "Kids Collection", "Men's Collection"]
const purity = ["22K (916)", "18K (750)", "14K (585)"]
const weight = ["Under 5g", "5g - 10g", "10g - 20g", "20g - 50g", "50g+"]

export function ProductFilters() {
    return (
        <div className="w-full lg:w-64 space-y-8">
            <div>
                <h3 className="text-white font-serif font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex items-center">
                            <input type="checkbox" id={`cat-${i}`} className="rounded border-gray-600 bg-surface-dark text-primary focus:ring-primary h-4 w-4" />
                            <label htmlFor={`cat-${i}`} className="ml-2 text-gray-400 hover:text-white cursor-pointer text-sm">{cat}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-white font-serif font-bold mb-4">Purity</h3>
                <div className="space-y-2">
                    {purity.map((item, i) => (
                        <div key={i} className="flex items-center">
                            <input type="checkbox" id={`pure-${i}`} className="rounded border-gray-600 bg-surface-dark text-primary focus:ring-primary h-4 w-4" />
                            <label htmlFor={`pure-${i}`} className="ml-2 text-gray-400 hover:text-white cursor-pointer text-sm">{item}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-white font-serif font-bold mb-4">Weight Range</h3>
                <div className="space-y-2">
                    {weight.map((item, i) => (
                        <div key={i} className="flex items-center">
                            <input type="checkbox" id={`wt-${i}`} className="rounded border-gray-600 bg-surface-dark text-primary focus:ring-primary h-4 w-4" />
                            <label htmlFor={`wt-${i}`} className="ml-2 text-gray-400 hover:text-white cursor-pointer text-sm">{item}</label>
                        </div>
                    ))}
                </div>
            </div>

            <Button className="w-full" variant="outline">Reset Filters</Button>
        </div>
    )
}
