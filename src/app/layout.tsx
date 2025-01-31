import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handy hub",
  description: "간단한 계산은 여기서 해결하세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 구글 사이트 인증 메타 태그 */}
        <meta
          name="google-site-verification"
          content="vrjbXL35t1HQ8QP2B1PCdGiQRzKIiiU4Dx07LZYdhaA"
        />

        <title>{metadata.title as ReactNode}</title>
        <meta name="description" content={metadata.description!} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z1QR2SDFJV"
          strategy="afterInteractive"
        ></Script>
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z1QR2SDFJV');
          `}
        </Script>
      </body>
    </html>
  );
}
