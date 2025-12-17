"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./VisionValues.module.css";
import sectionImage from "../assets/Section.png";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

type TabType = "about" | "vision" | "values";

const translations = {
  en: {
    sectionTitle: "Who We Are & Where We're Going",
    about: {
      title: "ABOUT SAMSIGN",
      text1: "Since 2018, SamSign has been at the forefront of professional advertising solutions. We're not just sign makers - we're brand storytellers who combine artistic excellence with engineering precision.",
      text2: "What started as a commitment to quality has evolved into a reputation for setting industry standards. Every indoor sign, outdoor display, and custom installation carries our signature: uncompromising craftsmanship driven by performance.",
      stats: {
        successfulProjects: "Successful Projects",
        trustedPartners: "Trusted Partners",
        customSolutions: "Custom Solutions",
        qualityGuarantee: "Quality Guarantee",
      },
    },
    vision: {
      title: "OUR VISION",
      text1: "To become the leading force in professional signage solutions, where art meets engineering and performance drives every project. We envision a future where brands communicate with clarity, impact, and lasting presence.",
      text2: "Our vision extends beyond creating signs - we're building a legacy of excellence that transforms how businesses connect with their audiences. Through innovation, craftsmanship, and unwavering commitment to quality, we're setting new standards in the industry.",
      points: {
        innovation: {
          title: "Innovation First",
          text: "Pioneering new techniques and technologies in signage design and manufacturing.",
        },
        leadership: {
          title: "Industry Leadership",
          text: "Setting benchmarks that others follow, establishing ourselves as the go-to experts.",
        },
        growth: {
          title: "Sustainable Growth",
          text: "Building lasting relationships and creating solutions that stand the test of time.",
        },
        excellence: {
          title: "Global Excellence",
          text: "Expanding our reach while maintaining the highest standards of quality and service worldwide.",
        },
      },
    },
    values: {
      title: "OUR VALUES",
      text: "Our values are the foundation of everything we do. They guide our decisions, shape our relationships, and define our commitment to excellence.",
      items: {
        quality: {
          title: "Quality",
          text: "Uncompromising standards in materials, craftsmanship, and execution. Every project reflects our commitment to excellence.",
        },
        performance: {
          title: "Performance",
          text: "Results-driven approach that delivers measurable impact. We don't just create signs - we create solutions that work.",
        },
        innovation: {
          title: "Innovation",
          text: "Embracing new technologies and creative approaches to stay ahead of industry trends and client expectations.",
        },
        integrity: {
          title: "Integrity",
          text: "Honest communication, transparent processes, and ethical business practices in every interaction.",
        },
        craftsmanship: {
          title: "Craftsmanship",
          text: "Artistic excellence combined with engineering precision. Where creativity meets technical mastery.",
        },
        partnership: {
          title: "Partnership",
          text: "Building long-term relationships based on trust, collaboration, and mutual success.",
        },
      },
    },
  },
  ar: {
    sectionTitle: "من نحن وإلى أين نتجه",
    about: {
      title: "حول سام ساين",
      text1: "منذ عام 2018، كانت SamSign في طليعة حلول الإعلان الاحترافية. نحن لسنا مجرد صانعي لافتات - نحن رواة قصص العلامات التجارية الذين يجمعون بين التميز الفني والدقة الهندسية.",
      text2: "ما بدأ كالتزام بالجودة تطور ليصبح سمعة لوضع معايير الصناعة. كل لافتة داخلية وعرض خارجي وتركيب مخصص يحمل توقيعنا: الحرفية التي لا هوادة فيها مدفوعة بالأداء.",
      stats: {
        successfulProjects: "مشاريع ناجحة",
        trustedPartners: "شركاء موثوقون",
        customSolutions: "حلول مخصصة",
        qualityGuarantee: "ضمان الجودة",
      },
    },
    vision: {
      title: "رؤيتنا",
      text1: "أن نصبح القوة الرائدة في حلول اللافتات الاحترافية، حيث يلتقي الفن بالهندسة ويقود الأداء كل مشروع. نتطلع إلى مستقبل تتواصل فيه العلامات التجارية بوضوح وتأثير ووجود دائم.",
      text2: "تمتد رؤيتنا إلى ما هو أبعد من إنشاء اللافتات - نحن نبني إرثًا من التميز يحول طريقة اتصال الشركات بجماهيرها. من خلال الابتكار والحرفية والالتزام الثابت بالجودة، نحن نضع معايير جديدة في الصناعة.",
      points: {
        innovation: {
          title: "الابتكار أولاً",
          text: "ريادة تقنيات وتقنيات جديدة في تصميم وتصنيع اللافتات.",
        },
        leadership: {
          title: "الريادة في الصناعة",
          text: "وضع معايير يتبعها الآخرون، وإنشاء أنفسنا كخبراء موثوقين.",
        },
        growth: {
          title: "النمو المستدام",
          text: "بناء علاقات دائمة وإنشاء حلول تصمد أمام اختبار الزمن.",
        },
        excellence: {
          title: "التميز العالمي",
          text: "توسيع نطاق وصولنا مع الحفاظ على أعلى معايير الجودة والخدمة في جميع أنحاء العالم.",
        },
      },
    },
    values: {
      title: "قيمنا",
      text: "قيمنا هي أساس كل ما نقوم به. إنها توجه قراراتنا وتشكل علاقاتنا وتحدد التزامنا بالتميز.",
      items: {
        quality: {
          title: "الجودة",
          text: "معايير لا هوادة فيها في المواد والحرفية والتنفيذ. كل مشروع يعكس التزامنا بالتميز.",
        },
        performance: {
          title: "الأداء",
          text: "نهج مدفوع بالنتائج يحقق تأثيرًا قابلاً للقياس. نحن لا نصنع لافتات فقط - نحن نصنع حلولاً تعمل.",
        },
        innovation: {
          title: "الابتكار",
          text: "اعتماد تقنيات ونهج إبداعية جديدة للبقاء في المقدمة من اتجاهات الصناعة وتوقعات العملاء.",
        },
        integrity: {
          title: "النزاهة",
          text: "التواصل الصادق والعمليات الشفافة وممارسات الأعمال الأخلاقية في كل تفاعل.",
        },
        craftsmanship: {
          title: "الحرفية",
          text: "التميز الفني مقترنًا بالدقة الهندسية. حيث يلتقي الإبداع بالإتقان التقني.",
        },
        partnership: {
          title: "الشراكة",
          text: "بناء علاقات طويلة الأمد مبنية على الثقة والتعاون والنجاح المتبادل.",
        },
      },
    },
  },
};

const getInitialStats = (lang: "en" | "ar"): Stat[] => {
  const t = translations[lang].about.stats;
  return [
    { value: 0, suffix: "+", label: t.successfulProjects },
    { value: 0, suffix: "+", label: t.trustedPartners },
    { value: 0, suffix: "%", label: t.customSolutions },
    { value: 5, suffix: "+Year", label: t.qualityGuarantee },
  ];
};

const getTargetStats = (lang: "en" | "ar"): Stat[] => {
  const t = translations[lang].about.stats;
  return [
    { value: 500, suffix: "+", label: t.successfulProjects },
    { value: 50, suffix: "+", label: t.trustedPartners },
    { value: 100, suffix: "%", label: t.customSolutions },
    { value: 5, suffix: "+Year", label: t.qualityGuarantee },
  ];
};

export default function VisionValues() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [stats, setStats] = useState<Stat[]>(getInitialStats("en"));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Read language from document element (set by Navigation component)
    const currentLang = document.documentElement.lang as "en" | "ar" | undefined;
    if (currentLang === "ar" || currentLang === "en") {
      setLanguage(currentLang);
      // Update stats labels when language changes
      setStats(getInitialStats(currentLang));
    }
    
    // Listen for language changes
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang as "en" | "ar" | undefined;
      if (lang === "ar" || lang === "en") {
        setLanguage(lang);
        setStats(getInitialStats(lang));
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    
    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    // Clear any existing animation
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }

    // Reset stats to initial values
    const initial = getInitialStats(language);
    const target = getTargetStats(language);
    setStats(initial);

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    animationIntervalRef.current = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats(
        target.map((targetStat, index) => {
          // For the 5-Year guarantee, show it immediately
          if (index === 3) {
            return targetStat;
          }
          return {
            ...targetStat,
            value: Math.floor(targetStat.value * progress),
          };
        })
      );

      if (currentStep >= steps) {
        if (animationIntervalRef.current) {
          clearInterval(animationIntervalRef.current);
          animationIntervalRef.current = null;
        }
        setStats(target);
        hasAnimatedRef.current = true;
      }
    }, stepDuration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate stats when section becomes visible and about tab is active
            if (activeTab === "about") {
              hasAnimatedRef.current = false;
              animateStats();
            }
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
  }, [activeTab]);

  useEffect(() => {
    // Animate stats when switching to about tab if section is visible
    if (activeTab === "about" && isVisible) {
      // Reset animation flag and animate
      hasAnimatedRef.current = false;
      animateStats();
    }

    // Reset stats when switching away from about tab
    if (activeTab !== "about") {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
      setStats(getInitialStats(language));
      hasAnimatedRef.current = false;
    }

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
    };
  }, [activeTab, isVisible, language]);

  const tabs: TabType[] = ["about", "vision", "values"];

  const getCurrentTabIndex = () => {
    return tabs.indexOf(activeTab);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    const currentIndex = getCurrentTabIndex();
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    const previousTab = tabs[previousIndex];
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveTab(previousTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    const currentIndex = getCurrentTabIndex();
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    const nextTab = tabs[nextIndex];
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveTab(nextTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleDotClick = (tab: TabType) => {
    if (isTransitioning || activeTab === tab) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const renderContent = () => {
    const t = translations[language];
    
    switch (activeTab) {
      case "about":
        return (
          <div className={styles.contentSection}>
            <h3 className={styles.columnTitle}>{t.about.title}</h3>
            <p className={styles.aboutText}>
              {t.about.text1}
            </p>
            <p className={styles.aboutTextSecondary}>
              {t.about.text2}
            </p>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={`${styles.statValue} ${isVisible && activeTab === "about" ? styles.statValueAnimated : ''}`}>
                    {stat.value}
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "vision":
        return (
          <div className={styles.contentSection}>
            <h3 className={styles.columnTitle}>{t.vision.title}</h3>
            <p className={styles.aboutText}>
              {t.vision.text1}
            </p>
            <p className={styles.aboutTextSecondary}>
              {t.vision.text2}
            </p>
            <div className={styles.visionPoints}>
              <div className={styles.visionPoint}>
                <h4 className={styles.visionPointTitle}>{t.vision.points.innovation.title}</h4>
                <p className={styles.visionPointText}>{t.vision.points.innovation.text}</p>
              </div>
              <div className={styles.visionPoint}>
                <h4 className={styles.visionPointTitle}>{t.vision.points.leadership.title}</h4>
                <p className={styles.visionPointText}>{t.vision.points.leadership.text}</p>
              </div>
              <div className={styles.visionPoint}>
                <h4 className={styles.visionPointTitle}>{t.vision.points.growth.title}</h4>
                <p className={styles.visionPointText}>{t.vision.points.growth.text}</p>
              </div>
              <div className={styles.visionPoint}>
                <h4 className={styles.visionPointTitle}>{t.vision.points.excellence.title}</h4>
                <p className={styles.visionPointText}>{t.vision.points.excellence.text}</p>
              </div>
            </div>
          </div>
        );

      case "values":
        return (
          <div className={styles.contentSection}>
            <h3 className={styles.columnTitle}>{t.values.title}</h3>
            <p className={styles.aboutText}>
              {t.values.text}
            </p>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.quality.title}</h4>
                <p className={styles.valueText}>{t.values.items.quality.text}</p>
              </div>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.performance.title}</h4>
                <p className={styles.valueText}>{t.values.items.performance.text}</p>
              </div>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.innovation.title}</h4>
                <p className={styles.valueText}>{t.values.items.innovation.text}</p>
              </div>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.integrity.title}</h4>
                <p className={styles.valueText}>{t.values.items.integrity.text}</p>
              </div>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.craftsmanship.title}</h4>
                <p className={styles.valueText}>{t.values.items.craftsmanship.text}</p>
              </div>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>{t.values.items.partnership.title}</h4>
                <p className={styles.valueText}>{t.values.items.partnership.text}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const t = translations[language];

  return (
    <section id="vision" className={`${styles.section} ${language === "ar" ? styles.sectionRtl : ""}`}>
      {/* Background Image */}
      <div className={styles.backgroundImageContainer}>
        <Image
          src={sectionImage}
          alt="Section Background"
          fill
          className={styles.backgroundImage}
          priority
        />
      </div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t.sectionTitle}
        </h2>

        <div className={styles.grid}>
          {/* Content Section with Side Arrows */}
          <div className={styles.contentWrapperContainer}>
            {/* Left Arrow */}
            <button
              className={`${styles.arrowButton} ${styles.arrowButtonLeft}`}
              onClick={handlePrevious}
              disabled={isTransitioning}
              aria-label="Previous section"
            >
              <span className={styles.arrowIcon}>‹</span>
            </button>

            {/* Content Section */}
            <div className={`${styles.leftColumn} ${isVisible ? styles.leftColumnVisible : ''}`}>
              <div className={`${styles.aboutContainer} ${styles.contentContainer}`}>
                <div className={`${styles.contentWrapper} ${isTransitioning ? styles.contentFadeOut : styles.contentFadeIn}`}>
                  {renderContent()}
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className={`${styles.arrowButton} ${styles.arrowButtonRight}`}
              onClick={handleNext}
              disabled={isTransitioning}
              aria-label="Next section"
            >
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>
        </div>

        {/* Indicator Dots Below Content */}
        <div className={styles.tabIndicator}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => handleDotClick(tab)}
              className={`${styles.indicatorDot} ${activeTab === tab ? styles.indicatorDotActive : ''}`}
              disabled={isTransitioning}
              aria-label={`Go to ${tab} section`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

  