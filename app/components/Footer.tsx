import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
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
              Art & Experience.. Driven by Performance.
            </p>
            <p className={styles.brandInfo}>
              Professional Advertising Solutions & Signage
              <br />
              Established since 2018
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <a
                  href="#philosophy"
                  className={styles.link}
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className={styles.link}
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className={styles.link}
                >
                  Vision & Values
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Phone:</span> +966 XX XXX XXXX
              </li>
              <li>
                <span className={styles.contactLabel}>Email:</span> info@samsign.com
              </li>
              <li>
                <span className={styles.contactLabel}>Address:</span> [Your Address]
              </li>
            </ul>
            
            {/* Social Media */}
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
            © {new Date().getFullYear()} SAM SIGN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

