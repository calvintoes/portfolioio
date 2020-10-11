import React from 'react';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import Social from './Footer/Social';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  navData,
  heroData,
  aboutData,
  workData,
  projectsData,
  contactData,
  footerData,
} from '../data/data';

const data = {
  navData,
  heroData,
  aboutData,
  workData,
  projectsData,
  contactData,
  footerData,
};

function App() {
  return (
    <PortfolioProvider value={data}>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Social />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
