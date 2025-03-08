import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white placeholder:text-gray-700 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
