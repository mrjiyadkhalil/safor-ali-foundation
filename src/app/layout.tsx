import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Safor Ali Foundation",
    template: "%s | Safor Ali Foundation",
  },
  description: "Empowering communities through education, healthcare, and sustainable development for a brighter tomorrow.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Safor Ali Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
