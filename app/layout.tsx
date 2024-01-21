import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/DefaultLayout";
import Script from "next/script";

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
                          <Script
                        id="gtag-base"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TP2T3Q4B')
          `
                        }}
                    />
      <body className={inter.className} suppressHydrationWarning={true}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP2T3Q4B"
height="0" width="0"></iframe></noscript>

        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
