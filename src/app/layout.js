import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KMA",
  description: "Kerala Management Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Nav  part */}
        <nav className="w-full">
          <Nav />
        </nav>

        {/* Content part */}
        <section>
          {children}
        </section>

        {/* Footer Part */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
