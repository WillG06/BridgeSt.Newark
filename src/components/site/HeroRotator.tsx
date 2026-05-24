import { useEffect, useState } from "react";

/**
 * Crossfading hero with slow Ken Burns zoom.
 */
export function HeroRotator({ images, interval = 5200 }: { images: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-out"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`h-full w-full object-cover ${idx === i ? "slow-zoom" : ""}`}
            key={`${src}-${idx === i ? "active" : "idle"}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
    </div>
  );
}
