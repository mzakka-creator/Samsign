"use client";

import { useEffect, useState } from "react";
import styles from "./VisionValues.module.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export default function VisionValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<Stat[]>([
    { value: 0, suffix: "+", label: "Successful Projects" },
    { value: 0, suffix: "+", label: "Trusted Partners" },
    { value: 0, suffix: "%", label: "Custom Solutions" },
    { value: 5, suffix: "-Year", label: "Quality Guarantee" },
  ]);

  const animateStats = () => {
    const targetStats: Stat[] = [
      { value: 500, suffix: "+", label: "Successful Projects" },
      { value: 50, suffix: "+", label: "Trusted Partners" },
      { value: 100, suffix: "%", label: "Custom Solutions" },
      { value: 5, suffix: "-Year", label: "Quality Guarantee" },
    ];

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats(
        targetStats.map((target, index) => {
          // For the 5-Year guarantee, show it immediately
          if (index === 3) {
            return target;
          }
          return {
            ...target,
            value: Math.floor(target.value * progress),
          };
        })
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepDuration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start counting up stats
            animateStats();
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
      icon: "🏆",
      title: "Quality",
      description: "Premium materials, expert craftsmanship",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge techniques and solutions",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Building relationships that last",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Engineered for maximum impact",
    },
  ];

  return (
    <section id="vision" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          WHO WE ARE & WHERE WE'RE GOING
        </h2>
        <div className={styles.grid}>
          {/* Left Column - About */}
          <div className={`${styles.leftColumn} ${isVisible ? styles.leftColumnVisible : ''}`}>
            <h3 className={styles.columnTitle}>ABOUT SAMSIGN</h3>
            <p className={styles.aboutText}>
              Since 2018, SamSign has been at the forefront of professional advertising solutions. We're not just sign makers—we're brand storytellers who combine artistic excellence with engineering precision.
            </p>
            <p className={styles.aboutTextSecondary}>
              What started as a commitment to quality has evolved into a reputation for setting industry standards. Every indoor sign, outdoor display, and custom installation carries our signature: uncompromising craftsmanship driven by performance.
            </p>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={`${styles.statValue} ${isVisible ? styles.statValueAnimated : ''}`}>
                    {stat.value}
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className={`${styles.divider} ${isVisible ? styles.dividerVisible : ''}`}></div>

          {/* Right Column - Vision */}
          <div className={`${styles.rightColumn} ${isVisible ? styles.rightColumnVisible : ''}`}>
            <h3 className={styles.columnTitle}>OUR VISION</h3>
            <p className={styles.visionText}>
              To set the benchmark for signage excellence—where innovation, craftsmanship, and performance converge to create lasting impact.
            </p>
            
            <h4 className={styles.pillarsTitle}>Our Four Pillars</h4>
            <div className={styles.valuesList}>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`${styles.valueItem} ${isVisible ? styles.valueItemVisible : ''}`}
                  style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                >
                  <div className={styles.valueIcon}>
                    {value.icon}
                  </div>
                  <div className={styles.valueContent}>
                    <h5 className={styles.valueTitle}>
                      {value.title}
                    </h5>
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

  