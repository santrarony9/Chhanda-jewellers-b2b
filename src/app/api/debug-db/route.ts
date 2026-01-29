import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

export async function GET() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        return NextResponse.json({
            status: 'error',
            message: 'MONGODB_URI is undefined in environment variables.'
        }, { status: 500 });
    }

    try {
        // Check current state
        if (mongoose.connection.readyState === 1) {
            return NextResponse.json({ status: 'success', message: 'Already connected to MongoDB.' });
        }

        // Attempt connection
        await mongoose.connect(uri, {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000, // Fail fast after 5s
        });

        return NextResponse.json({ status: 'success', message: 'Successfully connected to MongoDB!' });

    } catch (error: any) {
        return NextResponse.json({
            status: 'error',
            name: error.name,
            message: error.message,
            code: error.code
        }, { status: 500 });
    }
}
