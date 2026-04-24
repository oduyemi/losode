import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../lib/providers";
// import Header from "/components/layout/Header";
// import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Losode Product Listing",
  description: "Buy Fashion | Sell Fashion | African Fashion",
};

export default function RootLayout({ children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}





