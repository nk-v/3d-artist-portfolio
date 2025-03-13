import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Background from "@/components/background";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { BiPlay } from "react-icons/bi";
import Link from "next/link";
import { SHOWREEL_URL } from "@/common/constants";

export default function Hero() {
  return (
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
          <Link href={SHOWREEL_URL} rel="noopener noreferrer" target="_blank">
            <Button variant={"secondary"} className="w-full mt-2">
              <BiPlay />
              {"watch 2025 showreel"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
