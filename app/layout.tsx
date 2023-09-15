import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Settelment Store",
  description:
    "Chat Settelment is you one stop shop for all your random item needs! You can get whatever you want in a metter of seconds! Order now and get 50% off your first order!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
