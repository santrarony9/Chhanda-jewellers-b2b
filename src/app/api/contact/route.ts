import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/models/Enquiry';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            businessName,
            contactPerson,
            email,
            phone,
            gstNumber,
            moq,
            interests,
            message
        } = body;

        // Basic Validation
        if (!businessName || !contactPerson || !email || !phone || !moq) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        await dbConnect();

        await Enquiry.create({
            businessName,
            contactPerson,
            email,
            phone,
            gstNumber,
            moq,
            interests,
            message,
            status: 'new'
        });

        return NextResponse.json(
            { message: 'Enquiry submitted successfully!' },
            { status: 201 }
        );

    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error', error: error.message },
            { status: 500 }
        );
    }
}
