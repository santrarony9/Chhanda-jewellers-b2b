import mongoose, { Schema, model, models } from 'mongoose';

const SiteSettingsSchema = new Schema({
    phone: {
        type: String,
        default: '+91 98765 43210',
    },
    email: {
        type: String,
        default: 'contact@chhandajewellers.com',
    },
    address: {
        type: String,
        default: 'Singur, Hooghly, West Bengal, India - 712409',
    },
    facebook: {
        type: String,
        default: '#',
    },
    instagram: {
        type: String,
        default: '#',
    },
    whatsapp: {
        type: String,
        default: '#',
    },
    companyProfileUrl: {
        type: String,
        default: '',
    },
    // Home Page Content
    home: {
        heroImage: { type: String, default: '/hero-jewellery-v3.png' },
        categories: {
            type: [{
                title: String,
                subtitle: String,
                href: String,
                image: String,
                colSpan: String,
                delay: Number,
                gradient: String
            }],
            default: [
                {
                    title: "100% Natural Jewellery",
                    subtitle: "22K & 18K Hallmarked",
                    href: "/products?cat=gold",
                    gradient: "from-[#D4AF37]/30 to-[#AA8C2C]/5",
                    image: "/cat-natural-gold-new.png",
                    colSpan: "md:col-span-2",
                    delay: 0
                },
                {
                    title: "Diamond Jewellery",
                    subtitle: "IGI and HRD , SGI Certified",
                    href: "/products?cat=diamond",
                    gradient: "from-blue-100/10 to-blue-300/5",
                    image: "/cat-diamond-ring.png",
                    colSpan: "md:col-span-1",
                    delay: 0.1
                },
                {
                    title: "Gift Collection",
                    subtitle: "Wedding Sets",
                    href: "/products?cat=bridal",
                    gradient: "from-rose-900/40 to-red-900/10",
                    image: "/cat-gift-new.png",
                    colSpan: "md:col-span-1",
                    delay: 0.2
                },
                {
                    title: "Lightweight Daily Wear",
                    subtitle: "Modern & Minimal",
                    href: "/products?cat=lightweight",
                    gradient: "from-zinc-800/60 to-zinc-900/30",
                    image: "/cat-lightweight.png",
                    colSpan: "md:col-span-2",
                    delay: 0.3
                }
            ]
        }
    },
    // Manufacturing Page Content
    manufacturing: {
        gallery: {
            type: [{
                title: String,
                span: String,
                image: String
            }],
            default: [
                { title: "Wax Injection", span: "col-span-1 md:col-span-2 row-span-2", image: "" },
                { title: "Casting Tree", span: "col-span-1 row-span-1", image: "" },
                { title: "Laser Soldering", span: "col-span-1 row-span-1", image: "" },
                { title: "Diamond Sorting", span: "col-span-1 row-span-1", image: "" },
                { title: "Manual Filing", span: "col-span-1 md:col-span-2 row-span-1", image: "" },
            ]
        }
    },
    // Products Page Content
    products: {
        featured: {
            type: [{
                id: String,
                title: String,
                category: String,
                image: String,
                price: String
            }],
            default: [
                {
                    id: "feat-1",
                    title: "Royal Antique Kundan Necklace",
                    category: "Heritage Collection",
                    image: "/prod-featured-1.png",
                    price: "Enquire for Price"
                },
                {
                    id: "feat-2",
                    title: "Solitaire Diamond Studs",
                    category: "Diamond Collection",
                    image: "/prod-featured-2.png",
                    price: "Enquire for Price"
                },
                {
                    id: "feat-3",
                    title: "Pearl & Gold Nath",
                    category: "Traditional Wear",
                    image: "/prod-featured-3.png",
                    price: "Enquire for Price"
                }
            ]
        }
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const SiteSettings = models.SiteSettings || model('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
