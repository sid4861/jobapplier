import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save time on job applications",
  description:
    "Save time on job applications—let our experts handle the process for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
