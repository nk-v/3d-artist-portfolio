"use client";

import { useState } from "react";

function Letter({ letter }: { letter: string }) {
  const [char, setChar] = useState(letter);

  const onMouseEnter = () => {
    setChar((prev) => prev.toUpperCase());
  };

  const onMouseLeave = () => {
    setChar((prev) => prev.toLowerCase());
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {char}
    </div>
  );
}

export default function Title() {
  const name = "NUKUVV";

  return (
    <h1 className="select-none text-4xl sm:text-6xl flex items-center flex-row">
      {name
        .toLowerCase()
        .split("")
        .map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
    </h1>
  );
}
