import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <h2>Центр Авто</h2>
          </div>

          <nav
            className={`header__nav ${
              isMobileMenuOpen ? "header__nav--open" : ""
            }`}
          >
            <ul className="header__nav-list">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="header__nav-link"
                >
                  ГЛАВНАЯ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="header__nav-link"
                >
                  УСЛУГИ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quick-booking")}
                  className="header__nav-link"
                >
                  ЗАПИСЬ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="header__nav-link"
                >
                  ГАЛЕРЕЯ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("map")}
                  className="header__nav-link"
                >
                  КОНТАКТЫ
                </button>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <a href="tel:+79276676985" className="header__phone">
              +7 (8352) 37-10-21
            </a>
            <button
              className="header__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
