import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-splide-ts/css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Derrick Young",
  description: "What do you think about this one",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full lg:bg-gradient-to-r lg:from-[#F15C22] lg:via-[#F7931D] lg:to-[#FFC840] bg-gradient-to-b from-[#F15C22] via-[#F7931D] to-[#FFC840]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
