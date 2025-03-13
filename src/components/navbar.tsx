"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  React.useEffect(() => {
    const handleScroll = () => {};
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${"bg-black/80 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-end h-16">
          {/* Logo */}
          {/* <Link href="/" className="text-xl font-bold">
            nkv
          </Link> */}

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
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
            {/* <li>
              <Button variant="secondary" size="sm">
                <FaDownload className="mr-2 size-4" />
                {"Download CV".toLowerCase()}
              </Button>
            </li> */}
          </ul>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTitle>{"Menu"}</SheetTitle>
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
                    className="text-lg text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <Button variant="secondary" className="text-black">
                  <FaDownload className="mr-2 size-4" />
                  {"Download CV".toLowerCase()}
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
