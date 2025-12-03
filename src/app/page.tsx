import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="m-auto max-w-360">
      <header>
        <Navbar />
        <Hero />
        <About />
      </header>
    </div>
  );
}
