import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    if (dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [dark]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Intro/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
