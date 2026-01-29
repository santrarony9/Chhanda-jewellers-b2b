import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import Enquiry from "@/models/Enquiry";

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

async function getData() {
    await dbConnect();

    const productCount = await Product.countDocuments({});
    const enquiryCount = await Enquiry.countDocuments({});
    const pendingEnquiries = await Enquiry.countDocuments({ status: 'new' });

    // perform a simple recent enquiry fetch
    const recentEnquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(5).lean();

    return {
        productCount,
        enquiryCount,
        pendingEnquiries,
        recentEnquiries: JSON.parse(JSON.stringify(recentEnquiries)), // Serialize MongoDB objects
    };
}

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        // redirect("/api/auth/signin"); // Use built-in signin for now if /login doesn't exist
        // Check if we have a login page, if not, redirect to API signin
        redirect("/api/auth/signin?callbackUrl=/admin");
    }

    const data = await getData();

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif text-white font-bold">Admin Dashboard</h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400">Welcome, {session.user?.name}</span>
                    {/* Logout handling would typically comprise a client component or a form action */}
                    <Button className="font-bold bg-primary text-black" asChild>
                        <a href="/admin/products/new">Add Product</a>
                    </Button>
                    <Button variant="outline" className="border-primary text-primary" asChild>
                        <a href="/admin/users">Manage Users</a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="/api/auth/signout">Logout</a>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-surface-dark border-surface-light">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-sm">Total Enquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-white">{data.enquiryCount}</div>
                        <p className="text-green-500 text-sm mt-2">{data.pendingEnquiries} pending review</p>
                    </CardContent>
                </Card>

                <Card className="bg-surface-dark border-surface-light">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-sm">Active Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-white">{data.productCount}</div>
                        <p className="text-gray-400 text-sm mt-2">In Catalog</p>
                    </CardContent>
                </Card>

                <Card className="bg-surface-dark border-surface-light">
                    <CardHeader>
                        <CardTitle className="text-gray-400 text-sm">System Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-green-500">Online</div>
                        <p className="text-gray-400 text-sm mt-2">MongoDB Connected</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-surface-dark border border-surface-light rounded-xl p-6">
                    <h3 className="text-xl font-serif text-white mb-4">Recent Enquiries</h3>
                    <div className="space-y-4">
                        {data.recentEnquiries.length === 0 ? (
                            <p className="text-gray-500">No enquiries yet.</p>
                        ) : (
                            data.recentEnquiries.map((enquiry: any) => (
                                <div key={enquiry._id} className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                                    <div>
                                        <div className="font-bold text-white">{enquiry.businessName}</div>
                                        <div className="text-sm text-gray-400">{enquiry.contactPerson} • {enquiry.status}</div>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {new Date(enquiry.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
