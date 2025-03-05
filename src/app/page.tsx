"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";
import Footer from "@/components/sections/footer";
import Contact from "@/components/sections/contact";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-black text-white">
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
