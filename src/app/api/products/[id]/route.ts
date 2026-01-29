import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const product = await Product.findById(params.id);

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: product });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();

        const product = await Product.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: product });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const product = await Product.findByIdAndDelete(params.id);

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}
