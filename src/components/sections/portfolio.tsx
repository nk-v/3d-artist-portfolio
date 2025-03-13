import { PROJECTS } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BiPlay } from "react-icons/bi";
import { SHOWREEL_URL } from "@/common/constants";

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-8xl font-bold mb-8 max-w-4xl tracking-widest">
          selected Works
        </h2>
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ webUrl, picUrl, title, description }, index) => (
            <Card key={webUrl + index} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-0">
                <Link href={webUrl} rel="noopener noreferrer" target="_blank">
                  <div className="relative h-[500px]">
                    <Image
                      src={picUrl}
                      alt={`Project ${title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-white text-4xl">{title}</h3>
                    <p className="text-xs text-zinc-400">{description}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
          <Card className="text-5xl hover:bg-zinc-400 transition">
            <Link
              href={SHOWREEL_URL}
              rel="noopener noreferrer"
              className="flex flex-col p-6 h-full"
              target="_blank"
            >
              <div className="break-words">
                <div>watch 2025 showreel</div>
              </div>
              <div className="select-none text-white">
                <p>go to vimeo</p>
              </div>
            </Link>
          </Card>
          <Card className="text-5xl hover:bg-zinc-400 transition">
            <Link
              href={"https://instagram.com/nukuvv"}
              rel="noopener noreferrer"
              className="flex flex-col p-6 h-full"
              target="_blank"
            >
              <div className="flex flex-row">
                <div>
                  <p>check</p>
                  <p>more</p>
                  <p>works</p>
                </div>
                <BiPlay />
              </div>

              <div className="select-none text-white">
                <p>go to</p>
                <p className="break-words">instagram</p>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
