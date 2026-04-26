
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router";
import { motion } from "motion/react"

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
