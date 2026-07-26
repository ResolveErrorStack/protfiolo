import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ResolveErrorStack | Md Ajmal",
  description:
    "Futuristic developer portfolio with AI assistant, projects, and technology showcase.",
  keywords: [
    "Developer",
    "Portfolio",
    "AI",
    "Full Stack",
    "React",
    "Next.js",
    "ResolveErrorStack",
  ],
  authors: [
    {
      name: "Md Ajmal",
    },
  ],
  openGraph: {
    title: "ResolveErrorStack Portfolio",
    description:
      "Build, Learn, Connect and Innovate with modern technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
  }
