import { useState } from "react";

export function useFadeIn() {
  const [fadeIn, setFadeIn] = useState({
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  });
  return fadeIn;
}