import React, { useEffect, useRef } from "react";
import sx from "./scrollFadeIn.module.css";

export default function ScrollFadeIn({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(sx.show); // pakai sx.show, bukan "show"
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.9 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={sx["fade-up"]}>
      {children}
    </div>
  );
}