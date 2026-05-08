import React, { useEffect, useState } from 'react';
import Logo from "../images/Logo.png";
import { Link } from 'react-router';


const Nav = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll);
  })

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <div id="nav" className={scrolled ? "scrolled" : ""}>
      <ul >
        <nav className='nav-list'>
        <li className="nav-left"><Link to="/" >
                <img src={Logo} height="60px" alt="Logo with the initials LB" />
                
                <h1 className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Lyanis Barreto Mercado</h1> 
            </Link>
        </li>
            
            <li className={`nav-right ${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('projects')}><Link to="/projects" >Projects</Link></li>
           <li className={`nav-right ${activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('contact')}><Link to="/contact">Want to Connect?</Link></li> 
        
        </nav>
      </ul>
    </div>
  )
}

export default Nav