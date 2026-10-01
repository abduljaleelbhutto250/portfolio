import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Journey from "./components/Journey";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Education />

      <Journey />

      <WhyWorkWithMe />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;