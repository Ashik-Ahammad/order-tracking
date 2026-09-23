import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
