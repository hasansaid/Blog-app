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

function App () {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer></Footer>
    </>
  );

}

export default App;
