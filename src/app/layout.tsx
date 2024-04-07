import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Caret from "./components/caret";

export const metadata: Metadata = {
  title: "Daniel's Blog",
  description: "A blog for everything computer related!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-b0">
        <Navbar></Navbar>
        <Caret></Caret>
        {children}
      </body>
    </html>
  );
}
