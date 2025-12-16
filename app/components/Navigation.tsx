"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import logo from "../assets/logo.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : styles.navTransparent}`}>
      {/* Glass morphism overlay */}
      <div className={styles.blurOverlay}></div>
      
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo */}
          <div 
            className={styles.logoSection}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <Image 
              src={logo}
              alt="SAM SIGN"
              className={`${styles.logoImage} ${!isScrolled ? styles.logoImageTransparent : ''}`}
              priority
            />
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className={styles.navMenu}>
            <button
              onClick={() => scrollToSection("partners")}
              className={`${styles.navButton} ${isScrolled ? styles.navButtonScrolled : styles.navButtonTransparent}`}
            >
              Partners
            </button>
            
            <button
              onClick={() => scrollToSection("philosophy")}
              className={`${styles.navButton} ${isScrolled ? styles.navButtonScrolled : styles.navButtonTransparent}`}
            >
              Philosophy
            </button>
            
            <button
              onClick={() => scrollToSection("vision")}
              className={`${styles.navButton} ${isScrolled ? styles.navButtonScrolled : styles.navButtonTransparent}`}
            >
              Vision
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.contactButton}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayOpen : ''}`} onClick={toggleMobileMenu}>
        <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => scrollToSection("partners")}
            className={`${styles.mobileNavButton} ${isScrolled ? styles.mobileNavButtonScrolled : ''}`}
          >
            Partners
          </button>
          
          <button
            onClick={() => scrollToSection("philosophy")}
            className={`${styles.mobileNavButton} ${isScrolled ? styles.mobileNavButtonScrolled : ''}`}
          >
            Philosophy
          </button>
          
          <button
            onClick={() => scrollToSection("vision")}
            className={`${styles.mobileNavButton} ${isScrolled ? styles.mobileNavButtonScrolled : ''}`}
          >
            Vision
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className={styles.mobileContactButton}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
