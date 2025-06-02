import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Contact } from "./components/sections/Contact";

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

      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
        // Add initial styles
        section.style.opacity = "0.8";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      });

      // For animation completion
      // setTimeout(() => {
      // document.querySelectorAll(".animate-in").forEach((element) => {
      // element.style.opacity = "1";
      // element.style.transform = "translateY(0)";
      //   });
      // }, 100);
    };

    // Initialize animations
    animateOnScroll();

    // Add font links
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&display=swap";
    document.head.appendChild(fontLink);

    return () => {
      // Clean up
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
