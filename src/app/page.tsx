import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

export default function Page() {
  return (
    <div className="m-auto max-w-360">
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}
