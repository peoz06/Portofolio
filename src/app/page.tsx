import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollProgress from "@/components/scroll-progress";
import Skills from "@/components/skills";
import WhatsappFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <a href="#beranda" className="skip-link">
        Lewati ke konten utama
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
