import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clevenwright.com"),
  title: "Cleven Wright — Founder and CEO, Pyrigen",
  description:
    "Founder and CEO of Pyrigen. 25+ years turning emerging technology into results people can measure, from the front line to the founder's seat.",
  openGraph: {
    title: "Cleven Wright — Founder and CEO, Pyrigen",
    description:
      "Founder and CEO of Pyrigen. 25+ years turning emerging technology into results people can measure, from the front line to the founder's seat.",
    url: "https://www.clevenwright.com",
    siteName: "Cleven Wright",
    images: [{ url: "/clevenwright_og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleven Wright — Founder and CEO, Pyrigen",
    description:
      "Founder and CEO of Pyrigen. 25+ years turning emerging technology into results people can measure, from the front line to the founder's seat.",
    images: ["/clevenwright_og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
