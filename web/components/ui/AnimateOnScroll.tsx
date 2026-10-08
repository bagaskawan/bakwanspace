"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = ref.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const getTransformInitial = () => {
    switch (direction) {
      case "up":
        return "translateY(24px)";
      case "down":
        return "translateY(-16px)";
      case "left":
        return "translateX(-24px)";
      case "right":
        return "translateX(24px)";
      case "none":
      default:
        return "none";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : getTransformInitial(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
