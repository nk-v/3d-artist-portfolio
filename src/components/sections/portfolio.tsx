import { PROJECTS } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BiPlay } from "react-icons/bi";

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold mb-8 max-w-4xl tracking-widest">
          selected Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
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
                    <h3 className="text-white text-3xl">{title}</h3>
                    <p className="text-xs text-zinc-400">{description}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
          <Card className="p-6 text-5xl hover:bg-zinc-400 transition">
            <Link
              href={"https://instagram.com/nukuvv"}
              rel="noopener noreferrer"
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
