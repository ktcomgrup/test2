import { Box, Heading, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import StatsCard from "../../components/statistics/StatsCard";

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
    description: "persoane angajate",
  }
]

export default function StatisticsSection(props) {
  return (
    <Box mb={10}>
      <Heading
        size='lg'
        as='h2'
        noOfLines={1}
        textAlign={"center"}
        mb={6}
        color={useColorModeValue('primary.800', 'primary.800')}>
        Rezultate proiectelor noastre
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 6 }}>
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
  );
}