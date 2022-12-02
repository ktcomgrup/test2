import { Box, Heading, Image, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import StatsCard from "../../components/statistics/StatsCard";
import { motion } from "framer-motion";
import { useFadeIn } from "../../animations";

const statistics = [
  {
    order: 0,
    fromValue: 0,
    toValue: 20.6,
    description: "milioane lei investiti in formare profesionala",
  },
  {
    order: 1,
    fromValue: 0,
    toValue: 1400,
    description: "persoane informate si consiliate",
  },
  {
    order: 2,
    fromValue: 0,
    toValue: 1200,
    description: "persoane certificate in diverse meserii",
  },
  {
    order: 3,
    fromValue: 0,
    toValue: 1000,
    description: "persoane mediate pe piata muncii",
  },
  {
    order: 4,
    fromValue: 0,
    toValue: 140,
    description: "persoane angajate cu succes",
  }
]

export default function StatisticsSection() {
  const fadeIn = useFadeIn();

  return (
    <Box>
      {
        !!fadeIn ? (
          <Box
            mb={10}
            position={"relative"}
            as={motion.div}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.animate}
          >
            <Heading
              textAlign={"center"}
              mb={6}
              color={useColorModeValue('primary.800', 'primary.800')}>
              Rezultate proiectelor noastre
            </Heading>

            <SimpleGrid
              columns={{ base: 2, sm: 2, md: 5, lg: 5 }}
              position={"absolute"}
              left={0}
              right={0}
              flexWrap={"wrap"} h={"100%"}
            >
              <Image
                src={'/images/squircle_2.svg'} h={'100%'} display={{ base: "none", md: "inline-block" }}
                position={"relative"} top={'-100px'}
              />
              <Image
                src={'/images/squircle_3.svg'} h={'100%'} display={{ base: "none", md: "inline-block" }}
                position={"relative"} top={'-80px'}
              />
              <Image
                src={'/images/squircle_1.svg'} h={'100%'} display={{ base: "none", md: "inline-block" }}
                position={"relative"} top={'-90px'}
              />
              <Image
                src={'/images/squircle_0.svg'} h={'100%'} display={{ base: "none", md: "inline-block" }}
                position={"relative"} top={'-100px'}
              />
              <Image
                src={'/images/squircle_1.svg'} h={'100%'} display={{ base: "none", md: "inline-block" }}
                position={"relative"} top={'-95px'}
              />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={{ base: 5, lg: 6 }} zIndex={5}>
              {
                statistics ? (statistics.map((st, idx) => {
                  return (
                    <Box key={`stats-box-${idx}`}>
                      <StatsCard
                        size={'lg'}
                        description={st.description}
                        from={0}
                        to={st.toValue}
                        duration={st.duration}
                      />
                    </Box>
                  )
                })) : null
              }
            </SimpleGrid>
          </Box>
        ) : null
      }
    </Box>
  );
}