import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Order Tracking",
  description: "Track your order delivery status",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-gray-50 text-gray-900 flex justify-center min-h-screen">
        <div className="w-full max-w-[430px] min-h-screen bg-white shadow-xl relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
