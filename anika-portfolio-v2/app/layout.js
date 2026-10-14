import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/site";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: `${profile.name}, ${profile.title}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name}, ${profile.title}`,
    description: profile.headline,
    images: ["/anika.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
