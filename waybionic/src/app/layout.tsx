import type { Metadata } from "next";
import { Arimo, Epilogue, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/**
 * Some mobile browsers / extensions run scripts that assume `window.ethereum`
 * exists (EIP-1193). This app does not use Web3; without a wallet, that throws
 * and triggers the Next dev overlay. Stub only when missing so real wallets still win.
 */
const ETHEREUM_GUARD = `!function(){try{if(typeof window!=="undefined"&&!window.ethereum){window.ethereum={selectedAddress:void 0}}}catch(e){}}();`;

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
        <Script
          id="ethereum-missing-guard"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: ETHEREUM_GUARD }}
        />
        <NavBar />
        <main style={{ paddingTop: "var(--navbar-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
