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

export default function Welcome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen pt-16">
        <Canvas className="inset-0 z-50">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Background />
          <Environment preset="night" />
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-4 p-4">
            <Title />
            <p className="text-xl sm:text-2xl text-zinc-400">
              {"3D Artist & Motion Designer".toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-zinc-400">
                I'm a passionate 3D artist and motion designer with over 5 years
                of experience creating immersive digital experiences. My work
                combines technical precision with artistic vision to bring ideas
                to life.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary">
                  <Mail className="mr-2 size-4" />
                  Contact Me
                </Button>
                <Button variant="secondary">Download CV</Button>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              {/* <Image src={""} alt="Profile" fill className="object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Selected Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    {/* <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                      alt={`Project ${item}`}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold">Project Title {item}</h3>
                    <p className="text-sm text-zinc-400">
                      3D Animation / Motion Design
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
          <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Cinema 4D",
              "Blender",
              "After Effects",
              "Octane Render",
              "Houdini",
              "Substance Painter",
              "ZBrush",
              "Unreal Engine",
              "Adobe Creative Suite",
              "Motion Design",
              "3D Modeling",
              "Animation",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
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
                placeholder="Name"
                className="bg-zinc-800 border-zinc-700"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-zinc-800 border-zinc-700"
              />
              <Textarea
                placeholder="Message"
                className="bg-zinc-800 border-zinc-700"
                rows={4}
              />
              <Button className="w-full">Send Message</Button>
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
