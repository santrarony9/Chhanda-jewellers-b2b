import mongoose, { Schema, model, models } from 'mongoose';

const EnquirySchema = new Schema({
    businessName: {
        type: String,
        required: [true, 'Please provide a business name'],
    },
    contactPerson: {
        type: String,
        required: [true, 'Please provide a contact person name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'resolved'],
        default: 'new',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Enquiry = models.Enquiry || model('Enquiry', EnquirySchema);

export default Enquiry;
