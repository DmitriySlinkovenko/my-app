import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swift Car Keys",
  description:
    "Your trusty local automotive locksmith. Proudly serving Brooklyn, Queens, and Nassau County in New York. Best prices on all car keys.",
  verification: {
    google: "SUpvYzDTouBHtIFnFB3_JOi6PI89DStkfOHTWLKhtNI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
