import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
};

export default function Counter({
  end,
  duration,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;

        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div
      ref={ref}
      style={{
        fontSize: "48px",
        fontWeight: "bold",
      }}
    >
      {prefix}{count}{suffix}
    </div>
  );
}