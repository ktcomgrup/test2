import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { Heading, useColorModeValue } from "@chakra-ui/react";

export default function Counter(props) {
  const { from, to, duration } = props;
  const counterRef = useRef();
  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration || 1,
      onUpdate(updatedNumber) {
        counterRef.current.textContent = `+ ${Number(updatedNumber).toFixed(0)}`;
      }
    });
    return () => controls.stop();
  }, [from, to]);

  return <Heading ref={counterRef} size='2xl' color={useColorModeValue('primary.800', 'primary.100')} />;
}