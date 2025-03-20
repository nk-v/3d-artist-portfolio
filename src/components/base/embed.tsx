import { SHOWREEL_EMBED_URL } from "@/common/constants";

export default function Embed() {
  const width = window.innerWidth * 0.8;

  return (
    <div className="bg-black">
      <iframe
        title="vimeo-player"
        src={SHOWREEL_EMBED_URL}
        width={width}
        height={(width / 16) * 9}
        allowFullScreen
      />
    </div>
  );
}
