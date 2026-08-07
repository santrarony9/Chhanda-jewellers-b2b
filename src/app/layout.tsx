import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://chhandajewellers.com'),
  title: "Chhanda Jewellers | Diamond Jewellery Manufacturer",
  description: "Premier B2B Jewellery Manufacturer in Singur, West Bengal. Bulk supply, OEM, and custom designs.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Chhanda Jewellers | Diamond Jewellery Manufacturer",
    description: "Premier B2B Jewellery Manufacturer in Singur, West Bengal. Bulk supply, OEM, and custom designs.",
    url: 'https://chhandajewellers.com',
    siteName: 'Chhanda Jewellers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chhanda Jewellers | Diamond Jewellery Manufacturer",
    description: "Premier B2B Jewellery Manufacturer in Singur, West Bengal. Bulk supply, OEM, and custom designs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, playfair.variable, "bg-background text-foreground antialiased font-sans")}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
