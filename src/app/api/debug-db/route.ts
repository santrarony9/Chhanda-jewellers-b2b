import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user || session.user.role !== 'admin') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        }

        const uri = process.env.MONGODB_URI;
        if (!uri) {
            return NextResponse.json({
                status: 'error',
                message: 'MONGODB_URI is not set.'
            }, { status: 500 });
        }

        await dbConnect();

        return NextResponse.json({
            status: 'success',
            message: 'Connected to MongoDB',
            readyState: mongoose.connection.readyState
        });
    } catch (error: any) {
        return NextResponse.json({
            status: 'error',
            message: error?.message || 'Database connection check failed.'
        }, { status: 500 });
    }
}
