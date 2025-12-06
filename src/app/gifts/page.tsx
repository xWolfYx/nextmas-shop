import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className="m-auto max-w-360">
      <header>
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}
