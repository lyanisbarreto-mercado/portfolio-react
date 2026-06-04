
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router";
import { motion } from "motion/react"

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route path="portfolio-react/" element={<Home />} />
        <Route path="portfolio-react/projects" element={<Projects />} />
        <Route path="portfolio-react/contact" element={<Contact />} />

      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
