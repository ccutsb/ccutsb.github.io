import { useEffect, useRef, useState } from "react";

// Efecto de tipeo cíclico. Respeta prefers-reduced-motion mostrando
// la primera frase completa sin animar.
export default function Typewriter({ phrases, typeSpeed = 55, pause = 2200 }) {
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [text, setText] = useState(reduced.current ? phrases[0] : "");

  useEffect(() => {
    if (reduced.current) return;
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        setText(phrase.slice(0, charIdx));
        if (charIdx === phrase.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIdx--;
        setText(phrase.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
        timer = setTimeout(tick, typeSpeed / 2);
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [phrases, typeSpeed, pause]);

  return (
    <span className="blink-cursor" aria-live="polite">
      {text}
    </span>
  );
}
