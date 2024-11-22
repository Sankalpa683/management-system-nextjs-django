import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

// Import the VisueltPro font from the local fonts folder
const VisueltPro = localFont({
  src: "./fonts/VisueltPro-Regular.ttf", // Path to the font
  variable: "--font-visuelt-pro",              // CSS variable for the font
  weight: "100 900",                           // Define the weight range
  style: "normal",                             // Set style to normal
  display: "swap",                             // Ensures font is swapped during load for better performance
});

// Import another font (Geist Mono in this case)
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lekha - Simplify Your Business Operations | Efficient Store Management System ",
  description: `Boost your business productivity with Lekha, the ultimate store management system 
  designed for modern businesses. Manage inventory, track orders, streamline payments, and enhance customer
   experience all in one place. Lekha offers intuitive tools and analytics to help you make data-driven 
   decisions and optimize your store's performance. Whether you run a retail shop, an e-commerce platform, 
   or a local store, Lekha provides the flexibility and efficiency you need to grow. Explore advanced features,
    secure data management, and seamless integration options with Lekha. Start simplifying your store 
    management today with our all-in-one solution!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${VisueltPro.variable} antialiased`}
        style={{ fontFamily: "var(--font-visuelt-pro), sans-serif" }} // Apply VisueltPro as the default font
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
