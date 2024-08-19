import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import AOSInitializer from "@/components/AOSInitializer";
import { AuthProvider } from "./Providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KMA",
  description: "Kerala Management Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <section>
            <AOSInitializer/>
            <ToastContainer />
            {children}
          </section>

        </AuthProvider>


      </body>
    </html>
  );
}
