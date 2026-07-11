import { Schema, model, models } from 'mongoose';

const SiteSettingsSchema = new Schema({
    phone: {
        type: String,
        default: '+91 8981420463',
    },
    email: {
        type: String,
        default: 'chhandajewellers@gmail.com',
    },
    address: {
        type: String,
        default: '18, HariramGoenka Street, Burabuzar, Kolkata, India. pin code - 700007',
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
    logo: {
        type: String,
        default: '/icon.png',
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
                    title: "Diamond Jewellery (18K, 14K, 9K)",
                    subtitle: "Hallmarked Diamond Jewellery",
                    href: "/products?cat=diamond",
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
        },
        manufacturingHighlight: {
            founderImage: { type: String, default: '/founder.jpg' },
            founderName: { type: String, default: 'Mr. Hemanta Koley' },
            founderTitle: { type: String, default: 'Chairman' },
            yearsOfMastery: { type: String, default: '25+' },
            heading: { type: String, default: 'Precision Casting meets' },
            subheading: { type: String, default: 'Bengal\'s Artistry' },
            description: { type: String, default: 'Our Singur facility is equipped with advanced Vacuum Casting technology and Laser Soldering units. Yet, we believe the soul of jewellery lies in the hands of the artisan. We combine automation with unmatched hand-finishing.' },
            mdImage: { type: String, default: '/rabi-shankar.jpg' },
            mdName: { type: String, default: 'Rabi Shankar Koley' },
            mdTitle: { type: String, default: 'Managing Director' },
            mdDescription: { type: String, default: 'Now leading Chhanda Jewellers into the next era of excellence.' }
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
                    title: "Pearl & Diamond Nath",
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
