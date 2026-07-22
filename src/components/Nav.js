import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router";
import { List, X } from "react-bootstrap-icons";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div
      id="nav"
      className={`
        sticky top-0 z-[900] w-full
        transition-colors duration-500
        ${
          scrolled
            ? "bg-[#B5DFD1] rounded-b-[15px] text-white"
            : "bg-transparent text-[#3C493F]"
        }
      `}
    >
      <nav
        className="
          flex items-center
          px-5 py-1
          md:px-5 md:py-[5px]
          min-h-[40px]
          font-bold
        "
      >
        {/* Left */}
        <Link
          to="portfolio-react/"
          className="mr-auto flex items-center gap-3 px-3 py-1.5 hover:opacity-75 transition"
          onClick={() => onUpdateActiveLink("home")}
        >
          <img
            src={Logo}
            alt="Logo with the initials LB"
            className="max-h-[40px] md:max-h-[70px]"
          />

          <h1
            className="hidden md:text-[20px] md:block"
          >
            Lyanis Barreto Mercado
          </h1>
          <h1
            className="block text-[20px] md:hidden"
          >
            Lyanis
          </h1>
        </Link>

        {/* Right Links */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto z-50 md:hidden"
        >
          {menuOpen ? <X size={32} /> : <List size={32} />}
        </button>
        <div className="hidden md:flex md:items-center">
          <Link
            to="portfolio-react/projects"
            onClick={() => onUpdateActiveLink("projects")}
            className={`
              ml-5 px-3 py-1.5
              text-lg md:text-xl
              inline-block
              transition-transform duration-500
              hover:scale-110
              ${activeLink === "projects" ? "text-white" : ""}
            `}
          >
            Projects
          </Link>

          <Link
            to="portfolio-react/contact"
            onClick={() => onUpdateActiveLink("contact")}
            className={`
              ml-5 px-3 py-1.5
              text-lg md:text-xl
              inline-block
              transition-transform duration-500
              hover:scale-110
              ${activeLink === "contact" ? "text-white" : ""}
            `}
          >
            Want to Connect?
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#B5DFD1] rounded-b-2xl shadow-lg">
          <Link
            to="portfolio-react/projects"
            onClick={() => {
              onUpdateActiveLink("projects");
              setMenuOpen(false);
            }}
            className="block px-6 py-4 text-[18px] font-semibold hover:bg-white/20"
          >
            Projects
          </Link>

          <Link
            to="portfolio-react/contact"
            onClick={() => {
              onUpdateActiveLink("contact");
              setMenuOpen(false);
            }}
            className="block px-6 py-4 text-[18px] font-semibold hover:bg-white/20"
          >
            Want to Connect?
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;