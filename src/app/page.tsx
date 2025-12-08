import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

export default function Page() {
  return (
    <div className="m-auto max-w-360">
      <Header />
      <Hero />
      <About />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}
