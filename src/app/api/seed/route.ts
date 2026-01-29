import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        await dbConnect();

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: 'admin@chhandajewellers.com' });
        if (existingAdmin) {
            return NextResponse.json({ message: 'Admin user already exists.' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);

        const adminUser = await User.create({
            name: 'Admin',
            email: 'admin@chhandajewellers.com',
            password: hashedPassword,
            role: 'admin',
        });

        return NextResponse.json({ message: 'Admin user created successfully', user: { email: adminUser.email } });
    } catch (error: any) {
        return NextResponse.json({ message: 'Error creating admin', error: error.message }, { status: 500 });
    }
}
