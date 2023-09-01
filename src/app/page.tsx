'use client'
import { useState, useEffect } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/Icons/ScrollToTop/ScrollToTop";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroSectionHeight = heroSection.getBoundingClientRect().height;
        setShowScrollButton(window.scrollY > heroSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects" className="bg-[#171619]">
        <Projects />
      </div>
      <div id="about" className="mb-28">
        <About />
      </div>
      <div id="contact">
        <Footer />
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 z-50 pointer animate-bounce"
          onClick={scrollToTop}
        >
          <ScrollToTop />
        </button>
      )}
    </>
  );
}
