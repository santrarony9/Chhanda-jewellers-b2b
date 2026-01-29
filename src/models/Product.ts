import mongoose, { Schema, model, models } from 'mongoose';

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
        required: [true, 'Please specify a category (e.g., Necklace, Bangle)'],
        index: true,
    },
    material: {
        type: String, // e.g., 'Gold 22K', 'Diamond', 'Platinum'
        required: true,
    },
    weight: {
        type: String, // e.g. "12.5g" - keeping as string for flexibility or number if strict
        required: true,
    },
    price: {
        type: Number, // Optional for B2B site, maybe just for internal reference
    },
    images: {
        type: [String], // Array of image URLs
        default: [],
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;
