"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Partners.module.css";

// Import all partner logos
import Amaz from "../assets/partners/Amaz.svg";
import AOK from "../assets/partners/AOK.svg";
import ASSO from "../assets/partners/ASSO.svg";
import Balenc from "../assets/partners/Balenc.svg";
import Black from "../assets/partners/Black.svg";
import BOTT from "../assets/partners/BOTT.svg";
import Brunch from "../assets/partners/Brunch.svg";
import cicch from "../assets/partners/cicch.svg";
import cRAZY from "../assets/partners/cRAZY.svg";
import Fonte from "../assets/partners/Fonte.svg";
import Gucci from "../assets/partners/Gucci.svg";
import half from "../assets/partners/half.svg";
import ILBARR from "../assets/partners/IL BARR.svg";
import Jadwa from "../assets/partners/Jadwa.svg";
import JON from "../assets/partners/JON.svg";
import Koen from "../assets/partners/Koen.svg";
import KURU from "../assets/partners/KURU.svg";
import lisen from "../assets/partners/lisen.svg";
import Liza from "../assets/partners/Liza.svg";
import MRCHOW from "../assets/partners/MR CHOW.svg";
import namm from "../assets/partners/namm.svg";
import NATUZZI from "../assets/partners/NATUZZI.svg";
import ROBATA from "../assets/partners/ROBATA.svg";
import ROKA from "../assets/partners/ROKA.svg";
import Ruya from "../assets/partners/Ruya.svg";
import Seven from "../assets/partners/Seven.svg";
import Tash from "../assets/partners/Tash.svg";
import Urth from "../assets/partners/Urth.svg";
import ZUMA from "../assets/partners/ZUMA.svg";

const translations = {
  en: {
    title: "Trusted Partners",
    subtitle: "Working with leading brands and businesses",
  },
  ar: {
    title: "شركاء موثوقون",
    subtitle: "نعمل مع العلامات التجارية والشركات الرائدة",
  },
};

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

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

  // Partner logos array
  const partners = [
    { name: "Amaz", logo: Amaz },
    { name: "AOK", logo: AOK },
    { name: "ASSO", logo: ASSO },
    { name: "Balenc", logo: Balenc },
    { name: "Black", logo: Black },
    { name: "BOTT", logo: BOTT },
    { name: "Brunch", logo: Brunch },
    { name: "cicch", logo: cicch },
    { name: "cRAZY", logo: cRAZY },
    { name: "Fonte", logo: Fonte },
    { name: "Gucci", logo: Gucci },
    { name: "half", logo: half },
    { name: "IL BARR", logo: ILBARR },
    { name: "Jadwa", logo: Jadwa },
    { name: "JON", logo: JON },
    { name: "Koen", logo: Koen },
    { name: "KURU", logo: KURU },
    { name: "lisen", logo: lisen },
    { name: "Liza", logo: Liza },
    { name: "MR CHOW", logo: MRCHOW },
    { name: "namm", logo: namm },
    { name: "NATUZZI", logo: NATUZZI },
    { name: "ROBATA", logo: ROBATA },
    { name: "ROKA", logo: ROKA },
    { name: "Ruya", logo: Ruya },
    { name: "Seven", logo: Seven },
    { name: "Tash", logo: Tash },
    { name: "Urth", logo: Urth },
    { name: "ZUMA", logo: ZUMA },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className={`${styles.section} ${language === "ar" ? styles.sectionRtl : ""}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
          <h2 className={styles.title}>
            {t.title}
          </h2>
          <p className={styles.subtitle}>
            {t.subtitle}
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
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className={styles.logoImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

