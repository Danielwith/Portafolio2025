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
