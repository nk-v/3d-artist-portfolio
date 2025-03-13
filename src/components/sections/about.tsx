import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import DownloadCvButton from "../base/downloadCvButton";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl md:text-7xl xl:text-9xl font-bold tracking-widest">
              About Me
            </h2>
            <p className="text-zinc-400">
              i&apos;m a passionate 3d artist and motion designer with over 3
              years of experience creating immersive digital projects. My work
              combines technical precision with artistic vision to bring ideas
              to life.
            </p>
            <div className="gap-2 grid md:grid-cols-2">
              <Link href={"#contact"}>
                <Button variant="secondary" className="w-full">
                  <FaLocationArrow className="mr-2 size-4" />
                  {"Contact Me".toLowerCase()}
                </Button>
              </Link>
              <DownloadCvButton />
            </div>
          </div>
          <div className="relative min-h-96 overflow-hidden">
            <Image
              src={"./overworker-thumb.jpg"}
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
