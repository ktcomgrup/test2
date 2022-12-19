import { motion, useAnimation } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0, }
};

export default function ScaleInContainer(props) {
  const { id, children, ...rest } = props;
  const control = useAnimation();
  const [containerRef, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      // control.start("hidden"); // enable this to repeat the animation when scrolling from down to up
      control.stop();
    }
  }, [control, isInView]);

  return (
    <Container
      id={id}
      maxW={"100%"}
      minW={"100%"}
      p={0}
      m={0}
      as={motion.div}
      ref={containerRef}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      {...rest}
    >
      {children}
    </Container>
  )
}