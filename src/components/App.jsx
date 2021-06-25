import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AnimatedCursor from 'react-animated-cursor';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    // https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react-fr
    // !! https://github.com/stephenscaff/react-animated-cursor
    // 1111 https://www.npmjs.com/package/react-animated-cursor

    // https://www.youtube.com/watch?v=1ECEdO7zHMY
    // https://www.reddit.com/r/learnjavascript/comments/i97jn2/problem_jsx_expressions_must_have_one_parent/
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
