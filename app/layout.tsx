import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../lib/providers";
import AppShell from "./AppShell";


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
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}





