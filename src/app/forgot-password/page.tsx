'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-95 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]">
            <div className="absolute inset-0 bg-background/90" />

            <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 relative z-10 shadow-2xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center font-serif text-primary">Recovery Access</CardTitle>
                    <CardDescription className="text-center text-zinc-400">
                        Admin Account Recovery
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <p className="text-zinc-300">
                        To reset your admin password, please contact the system administrator directly or use the database seed reset method if you have server access.
                    </p>
                    <div className="bg-zinc-950 p-3 rounded border border-zinc-800 text-sm text-zinc-400 font-mono">
                        support@chhandajewellers.com
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="ghost" asChild className="text-zinc-400 hover:text-white hover:bg-white/5">
                        <Link href="/login" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
