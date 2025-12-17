"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroBanner from "../assets/Hero-Banner.png";

const translations = {
  en: {
    brandName: "SamSign",
    headline: "Art & Experience..",
    highlight: "Driven by Performance.",
    subheadline: "Professional advertising solutions",
    subheadlineSecondary: "Since 2018",
    ctaButton: "Get Started",
  },
  ar: {
    brandName: "سام ساين",
    headline: "الفن والخبرة..",
    highlight: "مدفوع بالأداء.",
    subheadline: "حلول إعلانية احترافية",
    subheadlineSecondary: "منذ 2018",
    ctaButton: "ابدأ الآن",
  },
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Read language from document element (set by Navigation component)
    const currentLang = document.documentElement.lang as "en" | "ar" | undefined;
    if (currentLang === "ar" || currentLang === "en") {
      setLanguage(currentLang);
    }
    
    // Listen for language changes
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang as "en" | "ar" | undefined;
      if (lang === "ar" || lang === "en") {
        setLanguage(lang);
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t = translations[language];

  return (
    <section className={`${styles.hero} ${language === "ar" ? styles.heroRtl : ""}`}>
      {/* Background Pattern/Overlay */}
      <div className={styles.backgroundOverlay}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.radialOverlay}></div>
      </div>
      
      {/* Hero Banner Image */}
      <div className={styles.heroBannerContainer}>
        <Image
          src={heroBanner}
          alt="Hero Banner"
          fill
          className={styles.heroBanner}
          priority
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.contentGrid}>
          <div className={`${styles.textContainer} ${isVisible ? styles.textContainerVisible : styles.textContainerHidden}`}>
            {/* Brand Name */}
            <div className={styles.brandName}>{t.brandName}</div>
          
            {/* Main Headline - Brand Slogan */}
            <h1 className={styles.headline}>
              {t.headline}
            <br />
              <span className={styles.highlight}>{t.highlight}</span>
            </h1>
          
          {/* Subheadline */}
            <p className={styles.subheadline}>
              {t.subheadline}
            <br />
              <span className={styles.subheadlineSecondary}>{t.subheadlineSecondary}</span>
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToContact}
              className={styles.ctaButton}
          >
              <span className={styles.ctaButtonContent}>
              {t.ctaButton}
                <span className={styles.ctaButtonArrow}>{language === "ar" ? "←" : "→"}</span>
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

