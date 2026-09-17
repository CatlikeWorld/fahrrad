import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radsport als Leistungssport",
  description: "Radsport als Leistungssport",
  icons: {
    icon: "/fahrrad/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
