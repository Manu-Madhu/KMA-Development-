import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import HomePage from "@/components/user/Home/HomePage";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Nav  part */}
      <nav className="w-full">
        <Nav />
      </nav>
      
      {/* main page */}
      <section>
        <HomePage />
      </section>

      {/* Footer Part */}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
