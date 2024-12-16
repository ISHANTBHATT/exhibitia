import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Outfit } from "next/font/google";
import { Footer } from "./components/Footer";
import { LazyMotion, domAnimation } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const clashDisplay = localFont({
//   src: "./fonts/ClashDisplay-Bold.woff2",
//   weight: "100 900",
//   variable: "--font-clash-display",
// });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <LazyMotion features={domAnimation}>
          <Navbar />
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
