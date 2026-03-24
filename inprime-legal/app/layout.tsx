import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InPrime Legal — Outsourced General Counsel for Growing Businesses",
  description:
    "InPrime Legal delivers predictable, flat-fee outsourced general counsel services to small and mid-sized businesses in metro Atlanta. Prevention over reaction. Partnership over billable hours.",
  openGraph: {
    type: "website",
    title: "InPrime Legal — Outsourced General Counsel for Growing Businesses",
    description:
      "Predictable flat-fee legal services for small and mid-sized businesses. Your dedicated legal team as an extension of your business.",
    siteName: "InPrime Legal",
  },
  twitter: {
    card: "summary_large_image",
    title: "InPrime Legal — Outsourced General Counsel",
    description:
      "Flat-fee outsourced general counsel for growing businesses in metro Atlanta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
