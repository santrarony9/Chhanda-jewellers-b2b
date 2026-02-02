import { Schema, model, models } from 'mongoose';

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
    gstNumber: {
        type: String,
        required: false, // Optional
    },
    moq: {
        type: String,
        required: [true, 'Please specify MOQ requirement'],
    },
    interests: {
        type: [String], // Array of strings for checkboxes
        default: [],
    },
    message: {
        type: String,
        required: false, // Make message optional or keeping it required is fine, but form said "Message / Specific Requirements" usually implies optional if not marked *, but let's keep it required if useful, or optional. Let's make it optional for flexibility.
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
