import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
