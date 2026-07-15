import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Workspace from "./components/Workspace";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Clarity from "./components/Clarity";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Workspace/>
      <Clarity/>
      <Features/>
      <Stats/>
      <Pricing/>
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      
      
    </>
  );
}

export default App;