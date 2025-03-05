"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Text } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Background from "@/components/background";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { PROJECTS } from "@/data/projects";
import { SKILLS } from "@/data/skills";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen pt-16">
        <Canvas className="inset-0">
          <PerspectiveCamera makeDefault position={[-1, 0, 5]} />
          <Background />
          <Environment preset="night" />
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-16">
            <Title />
            <p className="text-xl sm:text-2xl text-start text-zinc-400 tracking-tighter">
              {"3D Artist & Motion Designer".toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                    i'm a passionate 3d artist and motion designer with over 5
                    years of experience creating immersive digital experiences.
                    My work combines technical precision with artistic vision to
                    bring ideas to life.
                  </p>
                  <div className="gap-2 grid sm:grid-cols-2">
                    <Button variant="secondary">
                      <Mail className="mr-2 size-4 text-zinc-500" />
                      {"Contact Me".toLowerCase()}
                    </Button>
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

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl sm:text-8xl font-bold mb-8 max-w-4xl tracking-widest">
            selected Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PROJECTS.map((project, index) => (
              <Card
                key={project.webUrl + index}
                className="bg-zinc-800 border-zinc-700"
              >
                <CardContent className="p-0">
                  <div className="relative h-[500px]">
                    <Image
                      src={project.picUrl}
                      alt={`Project ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-white text-2xl">{project.title}</h3>
                    <p className="text-xs text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-8xl text-end font-bold mb-8 tracking-widest">
            skills & tools
          </h2>
          <div className="flex flex-wrap justify-end gap-2">
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base sm:text-xl"
              >
                {skill.toLowerCase()}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-zinc-400 mb-6">
                Have a project in mind? Let's create something amazing together.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-zinc-400">
                  <Github className="size-6" />
                </Link>
                <Link href="#" className="hover:text-zinc-400">
                  <Linkedin className="size-6" />
                </Link>
                <Link href="#" className="hover:text-zinc-400">
                  <Twitter className="size-6" />
                </Link>
              </div>
            </div>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="name"
                className="bg-zinc-800 border-zinc-700"
              />
              <Input
                type="email"
                placeholder="email"
                className="bg-zinc-800 border-zinc-700"
              />
              <Textarea
                placeholder="Message"
                className="bg-zinc-800 border-zinc-700"
                rows={4}
              />
              <Button className="w-full">send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center text-zinc-400 text-sm">
          © {new Date().getFullYear()} nukuvv. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
