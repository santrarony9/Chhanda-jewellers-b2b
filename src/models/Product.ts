import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a product title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    category: {
        type: String,
        required: true,
        enum: ['Gold Jewellery', 'Diamond Jewellery', 'Platinum', 'Gemstones', 'Coins', 'Custom'],
    },
    variety: {
        type: String,
        required: false,
    },
    purity: {
        type: String,
        required: true,
        enum: ['14K', '18K', '22K', '24K', 'Platinum 950', 'Sterling Silver'],
        default: '22K'
    },
    material: {
        type: String,
        required: true,
    },
    weight: {
        type: String, // Stored as string to allow ranges like "10-12g" if needed, though exact is better
        required: true,
    },
    price: {
        type: Number, // Optional for B2B site, maybe just for internal reference
    },
    ringSize: {
        type: String,
        required: false,
    },
    images: {
        type: [String], // Array of image URLs
        default: [],
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    diamondClarity: {
        type: String, // e.g. 'VVS', 'SI1' - specific to Diamond Jewellery
        required: false,
    },
    diamondQuality: {
        type: String, // e.g. 'VVS-EF', 'VS-GH'
        required: false,
    },
    diamondWeight: {
        type: Number, // Stored in carat
        required: false,
    },
    otherStoneWeight: {
        type: Number, // Stored in carat
        required: false,
    },
    certification: {
        type: String, // e.g. 'IGI', 'GIA'
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;
