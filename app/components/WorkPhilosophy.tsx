"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./WorkPhilosophy.module.css";

export default function WorkPhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

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

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && parallaxRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          const offset = (rect.top - window.innerHeight / 2) * 0.1;
          parallaxRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "100% Custom", value: "100" },
    { label: "Premium Materials", value: "100" },
    { label: "5yr Warranty", value: "5" },
  ];

  return (
    <section id="philosophy" ref={sectionRef} className={styles.section}>
      {/* Parallax Background */}
      <div ref={parallaxRef} className={styles.parallaxBackground}>
        <div className={styles.patternOverlay}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Quote */}
        <div className={`${styles.quoteContainer} ${isVisible ? styles.quoteVisible : styles.quoteHidden}`}>
          <blockquote className={styles.quote}>
            "Quality isn't expensive.<br />
            It's priceless."
          </blockquote>
        </div>

        {/* Supporting Text */}
        <div className={`${styles.textContainer} ${isVisible ? styles.textVisible : styles.textHidden}`}>
          <p className={styles.philosophyText}>
            Our philosophy is simple: Never compromise on craftsmanship. Every sign we create is built to last, designed to perform, and crafted to impress.
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

