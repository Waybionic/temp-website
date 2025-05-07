import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAYBIONIC 🦾",
  description: "Website for WAYBIONIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} antialiased bg-white text-gray-900`}>
        <NavBar />
        <main style={{ paddingTop: "var(--navbar-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
