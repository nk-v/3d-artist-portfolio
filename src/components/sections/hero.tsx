import Background from "@/components/background";
import Title from "@/components/title";

import ShowreelButton from "./components/showreelButton";

export default function Hero() {
  return (
    <section className="relative h-screen pt-16">
      <Background />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="p-16">
          <Title />
          <p className="text-xl sm:text-2xl text-start text-zinc-400 tracking-tighter">
            {"3D Artist & Motion Designer".toLowerCase()}
          </p>
          <ShowreelButton />
        </div>
      </div>
    </section>
  );
}
