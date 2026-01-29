import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        await dbConnect();

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: 'admin@chhandajewellers.com' });

        const hashedPassword = await bcrypt.hash('admin123', 10);

        if (existingAdmin) {
            // Update existing admin password
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            return NextResponse.json({ message: 'Admin password reset successfully', user: { email: existingAdmin.email } });
        }

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
