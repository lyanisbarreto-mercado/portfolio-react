import React from 'react'
import Logo from "../images/Logo.png"
import { Link } from 'react-router'


const Nav = () => {
  return (
    <div>
        <nav id="nav">
        <li className="nav-left"><Link to="/" >
                <h1 id="header_name">Lyanis Barreto Mercado</h1>
            </Link>
        </li>
            

           <li className="nav-right"> <Link to="/about">About</Link></li>
            <li className="nav-right"><Link to="/projects" >Projects</Link></li>
           <li className="nav-right"><Link to="/contact">Contact</Link></li> 
        
        </nav>
        <hr />
    </div>
  )
}

export default Nav