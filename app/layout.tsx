import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import CustomCursor from "@/components/custom-cursor";
import GsapAnimations from "@/components/gsap-animations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LevelFive",
  description: "Content die beweegt & verkoopt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-dvh bg-white text-black antialiased">
        <LenisProvider>
          {children}
          <GsapAnimations />
          <CustomCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
