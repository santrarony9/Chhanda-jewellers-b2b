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
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const SiteSettings = models.SiteSettings || model('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
