import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import WorkPhilosophy from "./components/WorkPhilosophy";
import Partners from "./components/Partners";
import VisionValues from "./components/VisionValues";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      <Partners />
      <WorkPhilosophy />
      <VisionValues />
      <Footer />
    </main>
  );
}
