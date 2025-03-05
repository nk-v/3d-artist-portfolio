import { Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-8xl font-bold mb-4">Get in touch</h2>
            <p className="text-zinc-400 mb-6">feel free to expose your ideas</p>
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
  );
}
