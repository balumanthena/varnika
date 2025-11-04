import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
});

export const metadata = {
  title: "Varnika Boutique — Soft Luxury Couture",
  description: "A premium boutique blending heritage craftsmanship with modern elegance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
