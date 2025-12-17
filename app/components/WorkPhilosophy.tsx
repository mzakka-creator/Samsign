"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./WorkPhilosophy.module.css";

const translations = {
  en: {
    quote: "Quality isn't expensive.<br />It's priceless.",
    philosophyText: "Our philosophy is simple: Never compromise on craftsmanship. Every sign we create is built to last, designed to perform, and crafted to impress.",
    stats: [
      { label: "100% Custom", value: "100" },
      { label: "Premium Materials", value: "100" },
      { label: "5yr Warranty", value: "5" },
    ],
  },
  ar: {
    quote: "الجودة ليست باهظة الثمن.<br />إنها لا تقدر بثمن. ",
    philosophyText: "فلسفتنا بسيطة: لا تتنازل أبدًا عن الحرفية. كل لافتة نصنعها مصممة لتدوم، ومصممة للأداء، ومصقولة لإبهار.",
    stats: [
      { label: "100% مخصص", value: "100" },
      { label: "مواد عالية الجودة", value: "100" },
      { label: "ضمان 5 سنوات", value: "5" },
    ],
  },
};

export default function WorkPhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger stats animation after a delay
            setTimeout(() => {
              setStatsVisible(true);
            }, 800);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("philosophy");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
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

  const t = translations[language];
  const stats = t.stats;

  return (
    <section id="philosophy" ref={sectionRef} className={`${styles.section} ${language === "ar" ? styles.sectionRtl : ""}`}>
      {/* Background */}
      <div className={styles.parallaxBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Quote */}
        <div className={`${styles.quoteContainer} ${isVisible ? styles.quoteVisible : styles.quoteHidden}`}>
          <blockquote 
            className={styles.quote}
            dangerouslySetInnerHTML={{ __html: `"${t.quote}"` }}
          />
        </div>

        {/* Supporting Text */}
        <div className={`${styles.textContainer} ${isVisible ? styles.textVisible : styles.textHidden}`}>
          <p className={styles.philosophyText}>
            {t.philosophyText}
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statItem} ${statsVisible ? styles.statVisible : styles.statHidden}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

