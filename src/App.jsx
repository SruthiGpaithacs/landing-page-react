import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Workspace from "./components/Workspace";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";


import "./App.css";

function App() {
  return 
  (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Workspace/>
      <Features/>
      <Stats/>
      <Pricing/>
      
    </>
  );
}

export default App;