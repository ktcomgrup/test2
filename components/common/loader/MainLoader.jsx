import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// const imageVariants = {
//   // hidden: { rotate: 360 },
//   // hidden: { x: 0 },
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     // rotate: 0,
//     // x: [-100, 100],
//     transition: {
//       type: "tween",
//       duration: 1,
//       ease: "easeInOut",
//       yoyo: Infinity,
//       // repeatDelay: 0.7
//     }
//   }
// }
//
// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeInOut"
//     }
//   }
// }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04 * i
    }
  })
}
const textVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    }
  }
}

export default function MainLoader({ text }) {
  const letters = Array.from(text);

  return (
    <>
      <Container
        maxW={'full'}
        h={'100vh'}
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          as={motion.div}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          variants={containerVariants}
          initial={"hidden"}
          animate={"visible"}
          overflow={"hidden"}
        >
          <Box
            as={motion.div}
            variants={textVariants}
            m={4}
          >
            <Image src='logo.svg' alt='E-Learning Logo' maxW={{ base: "200", lg: "250" }} />
          </Box>
          <Box
            as={motion.div}
            display={"flex"}
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            overflow={"hidden"}
            m={4}
          >
            {
              letters.length > 0 ? letters.map((letter, idx) => {
                return (
                  <Heading
                    key={`letter-${idx}`}
                    as={motion.span}
                    variants={textVariants}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </Heading>
                )
              }) : null
            }
          </Box>
        </Box>
      </Container>
    </>
  )
}