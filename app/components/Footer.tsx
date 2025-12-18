"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import ministryLogo from "../assets/وزارة التجارة.svg";
import intellectualPropertyLogo from "../assets/الهيئة السعودية للملكية الفكرية.svg";
import mediaRegulationLogo from "../assets/الهيئة العامة لتنظيم الإعلام.svg";
import zakatTaxLogo from "../assets/هيئة الزكاة والضريبة والجمارك.svg";

const translations = {
  en: {
    brandDescription: "Sam Advertising Company",
    brandInfo: "Professional Advertising Solutions & Signage",
    established: "Established since 2018",
    quickLinks: "Quick Links",
    philosophy: "Philosophy",
    partners: "Partners",
    visionValues: "Vision & Values",
    contact: "Contact",
    phone: "Phone:",
    email: "Email:",
    address: "Address:",
    followUs: "Follow Us",
    copyright: "All rights reserved.",
  },
  ar: {
    brandDescription: "شركة سام للإعلان",
    brandInfo: "حلول إعلانية احترافية ولافتات",
    established: "تأسست منذ 2018",
    quickLinks: "روابط سريعة",
    philosophy: "الفلسفة",
    partners: "الشركاء",
    visionValues: "الرؤية والقيم",
    contact: "اتصل بنا",
    phone: "الهاتف:",
    email: "البريد الإلكتروني:",
    address: "العنوان:",
    followUs: "تابعنا",
    copyright: "جميع الحقوق محفوظة.",
  },
};

export default function Footer() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

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
  return (
    <footer id="contact" className={`${styles.footer} ${language === "ar" ? styles.footerRtl : ""}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <p className={styles.brandDescription}>
              {t.brandDescription}
            </p>
            <p className={styles.brandInfo}>
              {t.brandInfo}
              <br />
              {t.established}
            </p>
          </div>
        </div>

        {/* Authority Logos Section */}
        <div className={styles.ministrySection}>
          {/* Ministry of Commerce Logo */}
          <div className={styles.ministryItem}>
            <Image 
              src={ministryLogo}
              alt="وزارة التجارة"
              width={120}
              height={120}
              className={styles.ministryLogo}
            />
            <p className={styles.ministryNumber}>7037099914</p>
          </div>

          {/* Intellectual Property Authority Logo */}
          <div className={styles.ministryItem}>
            <Image 
              src={intellectualPropertyLogo}
              alt="الهيئة العامة للملكية الفكرية"
              width={120}
              height={120}
              className={styles.ministryLogo}
            />
            <p className={styles.ministryNumber}>TM-01-00-14126-24</p>
          </div>

          {/* Media Regulation Authority Logo */}
          <div className={styles.ministryItem}>
            <Image 
              src={mediaRegulationLogo}
              alt="الهيئة العامة لتنظيم الاعلام"
              width={120}
              height={120}
              className={styles.ministryLogo}
            />
            <p className={styles.ministryNumber}>151813</p>
          </div>

          {/* Zakat and Tax Authority Logo */}
          <div className={styles.ministryItem}>
            <Image 
              src={zakatTaxLogo}
              alt="هيئة الزكاة والضريبة"
              width={120}
              height={120}
              className={styles.ministryLogo}
            />
            <p className={styles.ministryNumber}>311874026800003</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>{t.phone}</span>
              <a href="tel:+966536211111" className={styles.contactValue} dir="ltr">+966 5 362 11111</a>
            </li>
            <li>
              <span className={styles.contactLabel}>{t.email}</span>
              <a href="mailto:info@samsign.sa" className={styles.contactValue} dir="ltr">info@samsign.sa</a>
            </li>
            <li>
              <span className={styles.contactLabel}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className={styles.instagramIcon}
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
              <a href="https://instagram.com/SamSign.sa" target="_blank" rel="noopener noreferrer" className={styles.contactValue} dir="ltr">SamSign.sa</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} SamSign. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

