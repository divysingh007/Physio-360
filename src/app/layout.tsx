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
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "PHYSIO 360 CARE - Dr. Sonali Baghel PT | Physiotherapy in Allahabad",
    template: "%s | PHYSIO 360 CARE",
  },
  description:
    "PHYSIO 360 CARE by Dr. Sonali Baghel, PT, provides personalized physiotherapy and rehabilitation care in Allahabad, Uttar Pradesh.",
  keywords: [
    "Physiotherapy Allahabad",
    "Physiotherapist Prayagraj",
    "Dr Sonali Baghel PT",
    "PHYSIO 360 CARE",
    "Back pain treatment Allahabad",
    "Sports injury rehabilitation Allahabad",
    "Orthopedic physical therapy Prayagraj",
    "Neck pain physiotherapy",
  ],
  authors: [{ name: clinicData.doctorName }],
  creator: clinicData.clinicName,
  publisher: clinicData.clinicName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://physio360care.com",
    title: "PHYSIO 360 CARE - Dr. Sonali Baghel PT | Physiotherapy in Allahabad",
    description:
      "Personalized physiotherapy and rehabilitation care by Dr. Sonali Baghel, PT in Allahabad, Uttar Pradesh. Move Better. Feel Stronger. Live Pain-Free.",
    siteName: "PHYSIO 360 CARE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHYSIO 360 CARE - Dr. Sonali Baghel PT | Physiotherapy in Allahabad",
    description:
      "Personalized physiotherapy and rehabilitation care by Dr. Sonali Baghel, PT in Allahabad, Uttar Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://physio360care.com",
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
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-teal-100 selection:text-teal-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
