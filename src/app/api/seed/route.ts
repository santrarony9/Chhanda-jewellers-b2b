import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        await dbConnect();

        // Check if any users already exist to prevent unauthorized password resets
        const userCount = await User.countDocuments();
        if (userCount > 0) {
            return NextResponse.json({ message: 'Database already initialized. Seed disabled.' }, { status: 403 });
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);

        const adminUser = await User.create({
            name: 'Admin',
            email: 'admin@chhandajewellers.com',
            password: hashedPassword,
            role: 'admin',
        });

        return NextResponse.json({ message: 'Initial admin user created successfully', user: { email: adminUser.email } });
    } catch (error: any) {
        return NextResponse.json({ message: 'Error creating admin', error: error.message }, { status: 500 });
    }
}
