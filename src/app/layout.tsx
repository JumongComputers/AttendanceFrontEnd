import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attendance App",
  description: "This App is used to create an Attendance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black '>
        
        {children}
        
        </body>
    </html>
  );
}
