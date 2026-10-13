import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
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

// Public container ID (not a secret). Tags/triggers are managed in the GTM UI, not in this repo.
const GTM_ID = "GTM-W8C7W6MW";

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
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-full flex flex-col">
        {/* GoogleTagManager above doesn't render GTM's <noscript> fallback, so it's added here */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
