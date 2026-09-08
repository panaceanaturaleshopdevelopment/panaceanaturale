import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Panacea Naturale — Sok od pšenične trave hladnog ceđenja",
  description:
    "Sok od pšenične trave (organska spelta) hladnog ceđenja, porodična proizvodnja iz Čačka od 2013. godine. Poručite direktno ili pronađite nas kod prodavaca širom Srbije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingOrderButton />
        </Providers>
      </body>
    </html>
  );
}
