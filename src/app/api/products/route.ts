import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
        const isFeatured = searchParams.get('isFeatured');

        const query: any = {};
        if (category) query.category = category;
        if (isFeatured === 'true') query.isFeatured = true;

        const products = await Product.find(query).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, count: products.length, data: products });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        // Protect this route
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();

        const product = await Product.create(body);

        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}
