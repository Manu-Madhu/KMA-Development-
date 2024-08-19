import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import AOSInitializer from "@/components/AOSInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KMA",
  description: "Kerala Management Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Content part */}
        <section>
          <AOSInitializer />
          {children}
        </section>

      </body>
    </html>
  );
}
