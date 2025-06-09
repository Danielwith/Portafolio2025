import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";

function App() {
  // Animation observer for elements
  useEffect(() => {
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      // document.querySelectorAll("section").forEach((section) => {
      //   observer.observe(section);
      //   // Add initial styles
      //   section.style.opacity = "0.8";
      //   section.style.transform = "translateY(20px)";
      //   section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      // });

      // // For animation completion
      // setTimeout(() => {
      //   document.querySelectorAll(".animate-in").forEach((element) => {
      //     element.style.opacity = "1";
      //     element.style.transform = "translateY(0)";
      //   });
      // }, 100);
    };

    // Initialize animations
    animateOnScroll();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
