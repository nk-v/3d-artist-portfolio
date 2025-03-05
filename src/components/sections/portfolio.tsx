import { PROJECTS } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Portfolio() {
  return (
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
                  <p className="text-xs text-zinc-400">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
