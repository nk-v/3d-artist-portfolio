"use client";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import DownloadCvButton from "./base/downloadCvButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "skills" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center h-14">
          <div className="flex items-center w-full justify-between">
            {/* Logo */}
            <Link href="#" className="text-xl font-bold">
              {"vv"}
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-zinc-400 transition-colors"
                  >
                    {item.label.toLowerCase()}
                  </Link>
                </li>
              ))}
              <li>
                <DownloadCvButton />
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTitle className="hidden">{"Menu"}</SheetTitle>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-700">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-zinc-300 hover:text-zinc-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <DownloadCvButton />
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
