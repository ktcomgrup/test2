import { Box, Heading, Image, useColorModeValue, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../theme/Logo";
import { useState } from "react";

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
  const themeText = useColorModeValue('dark', 'light');
  const colorText = useColorModeValue('primary.800', 'gold.200');
  const bg = useColorModeValue('white', 'blackAlpha.800');
  const letters = Array.from(text);
  return (
    <>
      <VStack
        id={"loader"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={bg}
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
            <Logo maxW={{ base: "200", lg: "250" }} minWidth={{ md: "90px" }}
                  logoUrl={themeText === "dark" ? "./logo.svg" : "./logo_gold.svg"} />
          </Box>
          <Box
            as={motion.div}
            display={"flex"}
            flexWrap={"wrap"}
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
                    size={{ base: "md", md: "xl" }}
                    color={colorText}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </Heading>
                )
              }) : null
            }
          </Box>
        </Box>
      </VStack>
    </>
  )
}