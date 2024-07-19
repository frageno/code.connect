import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Discover upcoming developer meetups and events focused on WordPress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('px-5 min-h-screen font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
