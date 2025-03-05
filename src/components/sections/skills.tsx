import { SKILLS } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
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
  );
}
