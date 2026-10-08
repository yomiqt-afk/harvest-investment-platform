import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarVest — Vehicle Investment Platform",
  description: "Car investment platform prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}