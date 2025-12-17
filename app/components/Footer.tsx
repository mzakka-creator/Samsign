"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";

const translations = {
  en: {
    brandDescription: "Art & Experience.. Driven by Performance.",
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
    brandDescription: "الفن والخبرة.. مدفوع بالأداء.",
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
            <div className={styles.brandLogo}>
              <Image 
                src={logo}
                alt="SAM SIGN"
                className={styles.logoImage}
                priority
              />
            </div>
            <p className={styles.brandDescription}>
              {t.brandDescription}
            </p>
            <p className={styles.brandInfo}>
              {t.brandInfo}
              <br />
              {t.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.sectionTitle}>{t.quickLinks}</h4>
            <ul className={styles.linksList}>
              <li>
                <a
                  href="#philosophy"
                  className={styles.link}
                >
                  {t.philosophy}
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className={styles.link}
                >
                  {t.partners}
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className={styles.link}
                >
                  {t.visionValues}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={styles.sectionTitle}>{t.contact}</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{t.phone}</span> +966 XX XXX XXXX
              </li>
              <li>
                <span className={styles.contactLabel}>{t.email}</span> info@samsign.com
              </li>
              <li>
                <span className={styles.contactLabel}>{t.address}</span> [Your Address]
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className={styles.sectionTitle}>{t.followUs}</h4>
            <div className={styles.socialLinks}>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <span className={styles.socialLinkText}>in</span>
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <span className={styles.socialLinkText}>ig</span>
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <span className={styles.socialLinkText}>X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} SAM SIGN. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

