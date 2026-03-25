import type { Metadata } from "next";
import { Arimo, Epilogue, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WAYBIONIC",
  description: "Website for WAYBIONIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${epilogue.variable} ${dmSans.variable} antialiased bg-white text-gray-900`}>
        <NavBar />
        <main style={{ paddingTop: "var(--navbar-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
