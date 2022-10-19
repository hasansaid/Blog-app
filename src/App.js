import logo from './logo.svg';
import './App.css';
import Index from './pages/index';
import About from './pages/about';
import Articles from './pages/articles';
import Courses from './pages/courses';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Language from './languages'


function App () {
  return (
    <> 
    <MantineProvider  >
      <Header links={ [
         {
      "link": "/",
      "label": Language.navigation.links[0]
    },
    {
      "link": "/about",
      "label": Language.navigation.links[1]
    },
    {
      "link": "/articles",
      "label": Language.navigation.links[2]
    },
    {
      "link": "/courses",
      "label": Language.navigation.links[3]
    },
    {
      "link": "/portfolio",
      "label": Language.navigation.links[4]
    },
    {
      "link": "/contact",
      "label": Language.navigation.links[5]
    },
  ]}></Header>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </MantineProvider>

    </>
  );

}

export default App;
