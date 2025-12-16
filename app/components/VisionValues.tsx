"use client";

import { useEffect, useState } from "react";
import styles from "./VisionValues.module.css";

export default function VisionValues() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("vision");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const values = [
    {
      icon: "✓",
      title: "Quality",
      description: "Premium materials and craftsmanship in every project",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Results-driven approach ensuring maximum impact",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Modern solutions with artistic vision",
    },
    {
      icon: "🤝",
      title: "Reliability",
      description: "Established, trustworthy partner since 2018",
    },
  ];

  return (
    <section id="vision" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Vision Section */}
          <div className={`${styles.visionSection} ${isVisible ? styles.visionSectionVisible : ''}`}>
            <h2 className={styles.title}>
              Our Vision
            </h2>
            <p className={styles.visionText}>
              To be the leading provider of professional signage solutions,
              where art meets engineering and performance drives every decision.
            </p>
            <p className={styles.visionTextSecondary}>
              We envision a future where signage doesn't just inform—it inspires,
              engages, and transforms spaces into powerful brand experiences.
            </p>
          </div>

          {/* Values Section */}
          <div className={`${styles.valuesSection} ${isVisible ? styles.valuesSectionVisible : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3 className={styles.valuesTitle}>
              Core Values
            </h3>
            <div className={styles.valuesList}>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={styles.valueItem}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className={styles.valueIcon}>
                    {value.icon}
                  </div>
                  <div className={styles.valueContent}>
                    <h4 className={styles.valueTitle}>
                      {value.title}
                    </h4>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

