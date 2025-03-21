"use client";

import Background from "@/components/background";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";

export default function Welcome() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
