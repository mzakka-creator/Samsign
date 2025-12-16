"use client";

import { useEffect, useState } from "react";
import styles from "./Partners.module.css";

export default function Partners() {
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

    const element = document.getElementById("partners");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Placeholder partner logos - replace with actual client logos
  const partners = [
    { name: "Partner 1", logo: "P1" },
    { name: "Partner 2", logo: "P2" },
    { name: "Partner 3", logo: "P3" },
    { name: "Partner 4", logo: "P4" },
    { name: "Partner 5", logo: "P5" },
    { name: "Partner 6", logo: "P6" },
    { name: "Partner 7", logo: "P7" },
    { name: "Partner 8", logo: "P8" },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
          <h2 className={styles.title}>
            Trusted Partners
          </h2>
          <p className={styles.subtitle}>
            Working with leading brands and businesses
          </p>
        </div>

        {/* Auto-scrolling Partners Bar */}
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContainer}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={styles.partnerCard}
              >
                <div className={styles.partnerLogo}>
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

