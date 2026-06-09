import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nuvoco Shabhash Card – Employee Reward & Recognition",
  description: "Internal employee reward and recognition portal for Nuvoco Vistas Corp Ltd, Sonadih Cement Plant. Submit Shabhash Cards to recognise outstanding safety and excellence.",
  verification: {
    google: 'ZwBjLdnB9FKvE7UdXgmOFTDmJqCFYOFzsOZLBxqGri0',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
