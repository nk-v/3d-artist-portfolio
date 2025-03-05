import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl sm:text-9xl font-bold mb-8 tracking-widest">
              About Me
            </h2>
            <div className="grid gap-8 items-center">
              <div className="space-y-8">
                <p className="text-zinc-400">
                  i'm a passionate 3d artist and motion designer with over 3
                  years of experience creating immersive digital projects. My
                  work combines technical precision with artistic vision to
                  bring ideas to life.
                </p>
                <div className="gap-2 grid sm:grid-cols-2">
                  <Link href={"#contact"}>
                    <Button variant="secondary" className="w-full">
                      <Mail className="mr-2 size-4 text-zinc-500" />
                      {"Contact Me".toLowerCase()}
                    </Button>
                  </Link>

                  <Button variant="secondary">
                    {"Download CV".toLowerCase()}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-96 overflow-hidden">
            <Image
              src={"/overworker-thumb.jpg"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
