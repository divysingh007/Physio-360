import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { StructuredData } from "@/components/ui/StructuredData";
import { clinicData } from "@/data/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Samriddhi Hospital - Multispeciality Care & 24/7 Emergency | Call 9305257103",
    template: "%s | Samriddhi Hospital",
  },
  description:
    "Samriddhi Hospital in Prayagraj provides 24/7 emergency care, cardiology, orthopedics, maternity, pediatrics, general surgery, modern ICU, and diagnostics. Call 9305257103.",
  keywords: [
    "Samriddhi Hospital",
    "Samriddhi Hospital Prayagraj",
    "Hospital in Prayagraj",
    "Hospital in Allahabad",
    "Emergency hospital Prayagraj",
    "Cardiologist in Allahabad",
    "Orthopedic hospital Prayagraj",
    "Maternity hospital Allahabad",
    "ICU hospital Prayagraj",
    "9305257103",
  ],
  authors: [{ name: "Samriddhi Hospital Medical Board" }],
  creator: clinicData.clinicName,
  publisher: clinicData.clinicName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://samriddhihospital.com",
    title: "Samriddhi Hospital - Multispeciality Care & 24/7 Emergency",
    description:
      "Your health is our priority. World-class medical excellence with compassionate doctors and 24/7 emergency response at Samriddhi Hospital. Call 9305257103.",
    siteName: "Samriddhi Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samriddhi Hospital - Multispeciality Care & 24/7 Emergency",
    description:
      "Compassionate healthcare, expert medical specialists, and 24/7 emergency hospital services in Prayagraj. Call 9305257103.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://samriddhihospital.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
