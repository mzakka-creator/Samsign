"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import logo from "../assets/logo.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image 
              src={logo}
              alt="SAM SIGN"
              className={`${styles.logoImage} ${!isScrolled ? styles.logoImageTransparent : ''}`}
              priority
            />
          </div>
          
          {/* Navigation Menu */}
          <div className={styles.navMenu}>
            <button
              onClick={() => scrollToSection("philosophy")}
              className={`${styles.navButton} ${isScrolled ? styles.navButtonScrolled : styles.navButtonTransparent}`}
            >
              Philosophy
            </button>
            
            <button
              onClick={() => scrollToSection("partners")}
              className={`${styles.navButton} ${isScrolled ? styles.navButtonScrolled : styles.navButtonTransparent}`}
            >
              Partners
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
        </div>
      </div>
    </nav>
  );
}
