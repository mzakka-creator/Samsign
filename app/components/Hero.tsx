"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Pattern/Overlay */}
      <div className={styles.backgroundOverlay}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.radialOverlay}></div>
      </div>
      
      {/* Points Grid */}
      <div className={styles.pointsGrid}></div>
      
      <div className={styles.content}>
        <div className={styles.contentGrid}>
          <div className={`${styles.textContainer} ${isVisible ? styles.textContainerVisible : styles.textContainerHidden}`}>
            {/* Brand Name */}
            <div className={styles.brandName}>SamSign</div>
          
            {/* Main Headline - Brand Slogan */}
            <h1 className={styles.headline}>
              Art & Experience..
            <br />
              <span className={styles.highlight}>Driven by Performance.</span>
            </h1>
          
          {/* Subheadline */}
            <p className={styles.subheadline}>
              Professional advertising solutions
            <br />
              <span className={styles.subheadlineSecondary}>Since 2018</span>
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToContact}
              className={styles.ctaButton}
          >
              <span className={styles.ctaButtonContent}>
              Get Started
                <span className={styles.ctaButtonArrow}>→</span>
            </span>
          </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorContainer}>
          <div className={styles.scrollIndicatorDot}></div>
        </div>
      </div>
    </section>
  );
}

