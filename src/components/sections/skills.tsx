import { SKILLS } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl sm:text-8xl text-end font-bold mb-8 tracking-widest">
          skills & tools
        </h2>
        <div className="flex flex-wrap justify-end gap-2">
          {SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-base sm:text-xl px-4 py-2 bg-black text-zinc-300 border-zinc-500 hover:bg-zinc-500"
            >
              {skill.toLowerCase()}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
