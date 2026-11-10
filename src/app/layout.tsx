import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfeus Artha — Web Developer & Data Enthusiast",
  description:
    "Portofolio pribadi Alfeus Artha Javaneo Harjono, mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun yang berfokus pada web development, data analysis, dan mobile development.",
  keywords: [
    "Alfeus Artha",
    "Alfeus Artha Javaneo Harjono",
    "Web Developer",
    "Data Analyst",
    "Mobile Programmer",
    "Portfolio",
    "Teknologi Informasi",
    "Politeknik Negeri Madiun",
    "peoz06",
  ],
  authors: [{ name: "Alfeus Artha Javaneo Harjono" }],
  creator: "Alfeus Artha Javaneo Harjono",
  applicationName: "Portofolio Alfeus Artha",
  openGraph: {
    title: "Alfeus Artha — Web Developer & Data Enthusiast",
    description:
      "Mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun yang membangun pengalaman digital di persimpangan web, data, dan mobile.",
    type: "website",
    locale: "id_ID",
    siteName: "Alfeus Artha",
  },
  twitter: {
    card: "summary",
    title: "Alfeus Artha — Web Developer & Data Enthusiast",
    description:
      "Mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun yang membangun pengalaman digital di persimpangan web, data, dan mobile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050509",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
