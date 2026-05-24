import { useEffect, useRef, type ReactNode } from "react";

/**
 * Splits children string into words and staggers their entrance.
 * Each word is wrapped in an overflow-hidden mask + a translated inner span.
 */
export function SplitWords({
  children,
  className = "",
  delay = 0,
  stagger = 70,
  as: Tag = "span",
}: {
  children: string | ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const text = typeof children === "string" ? children : String(children ?? "");
  const words = text.split(/(\s+)/);

  return (
    <Tag ref={ref as never} className={`split-words ${className}`}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span
            key={i}
            className="split-word"
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            <span style={{ transitionDelay: `${i * stagger}ms` }}>{w}</span>
          </span>
        );
      })}
    </Tag>
  );
}
