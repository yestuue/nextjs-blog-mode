// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Next.js Blog with Draft Mode",
    template: "%s | Next.js Blog"
  },
  description: "A statically generated blog using Next.js and Contentful",
  icons: {
    icon: "/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
