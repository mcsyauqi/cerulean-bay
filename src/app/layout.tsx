import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cerulean Bay Resort & Residences | Luxury Beachfront Villas in Bali",
  description:
    "Experience tropical luxury at Cerulean Bay Resort & Residences. 45 private villas on 8 hectares of pristine beachfront in Nusa Dua, Bali. Book your escape today.",
  keywords:
    "luxury resort bali, beachfront villas nusa dua, cerulean bay resort, private pool villa bali, 5 star resort indonesia",
  openGraph: {
    title: "Cerulean Bay Resort & Residences",
    description:
      "Where the Ocean Meets Luxury. 45 private villas on pristine beachfront in Nusa Dua, Bali.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
