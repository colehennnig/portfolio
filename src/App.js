import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  HashRouter
} from "react-router-dom";
import { useState } from "react";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import './assets/fonts/SFMono-Regular.otf';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="bg-green-100">
        <Navbar/>
        {/* <ScrollToTop /> */}
        <div className="bg-green-100 overflow-x-hidden drop-shadow-lg scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
