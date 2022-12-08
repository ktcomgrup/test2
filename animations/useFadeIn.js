import { useState } from "react";

export function useFadeIn() {
  const [fadeIn, setFadeIn] = useState({
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 0.5
    }
  });
  return fadeIn;
}