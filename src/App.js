import React from "react";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal"; // Import ScrollReveal

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="mt-20">
        {/* Wrap sections in ScrollReveal */}
        <ScrollReveal>
          <Home />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Works />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </HashRouter>
  );
}

export default App;
