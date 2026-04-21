import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtwebsite-cc4d9.firebaseapp.com"),
  title: "Maynard Toong | Web Portfolio",
  description:
    "Modern portfolio website for Maynard Toong, featuring projects, skills, experience, and contact details.",
  icons: {
    icon: "/images/mrt-logo.svg",
    shortcut: "/images/mrt-logo.svg",
    apple: "/images/mrt-logo.svg",
  },
  openGraph: {
    title: "Maynard Toong | Web Portfolio",
    description:
      "Modern portfolio website for Maynard Toong, featuring projects, skills, experience, and contact details.",
    images: [
      {
        url: "/images/mrt-social-square.svg",
        width: 1200,
        height: 1200,
        alt: "MRT portfolio social preview",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Maynard Toong | Web Portfolio",
    description:
      "Modern portfolio website for Maynard Toong, featuring projects, skills, experience, and contact details.",
    images: ["/images/mrt-social-square.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
