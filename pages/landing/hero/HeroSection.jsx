import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useMediaQuery, SimpleGrid, Spacer,
} from "@chakra-ui/react";
import Counter from "../../../components/statistics/Counter";
import StatsCard from "../../../components/statistics/StatsCard";

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
  // {
  //   order: 4,
  //   fromValue: 0,
  //   toValue: 140,
  //   description: "persoane angajate cu succes",
  // }
]

export default function HeroSection() {
  const [isLargerThan850] = useMediaQuery('(min-width: 850px)');
  return (
    <Box>
      <Flex
        id={"hero-image-wrapper"}
        w={'full'}
        h={{ base: 'calc(100vh - 175px)', md: 'calc(100vh - 98px)' }}
        backgroundImage={'url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          id={"hero-vertical-stack"}
          w={'full'}
          px={{ base: 6, md: 10 }}
          bgGradient={'linear(to-b, blackAlpha.700, blackAlpha.700)'}
        >
          <Stack
            maxW={'6xl'}
            spacing={10}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Spacer />
            {isLargerThan850 ? (<Spacer />) : null}
            <Heading textAlign={"center"}>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: '2xl', md: '5xl' }}
                py={2}
              >
                Schimbarea începe cu noi.
              </Text>
              <Text
                color={'whiteAlpha.700'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: 'xl', md: '4xl' }}>
                O faptă bună este întotdeauna extraordinară și este cu atât mai împlinitoare când lucrăm împreună pentru
                o lume mai bună
              </Text>
            </Heading>
            <Stack direction={'row'} alignItems={"center"}>
              <Button
                bg={useColorModeValue('primary.800', 'gold.200')}
                rounded={'full'}
                color={useColorModeValue('white', 'primary.800')}
                fontSize={{base: 14, md: 18}}
                minW={36}
                _hover={{ bg: useColorModeValue('primary.900', 'gold.300') }}>
                Alătură-te
              </Button>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: 'md', md: 'md' }}
              > sau </Text>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                fontSize={{base: "14", md: 18}}
                minW={36}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Contactează-ne
              </Button>
            </Stack>
            <Spacer />
            {
              isLargerThan850 ? (
                  <Stack
                    direction={'row'}
                    spacing={6}
                    w={"100vw"}
                    py={6}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    bgGradient={'linear(to-b, blackAlpha.700, blackAlpha.700)'}
                  >
                    {
                      statistics ? (statistics.map((st, idx) => {
                        return (
                          <Box key={`stats-box-${idx}`}>
                            <Flex justify={"center"} align={"center"} flexWrap={"wrap"}>
                              <Counter from={0} to={st.toValue} duration={st.duration} />
                            </Flex>
                            <Heading
                              size='md'
                              color={useColorModeValue('whiteAlpha.700', 'whiteAlpha.700')}
                              textAlign={"center"}>
                              {st.description}
                            </Heading>
                          </Box>
                        )
                      })) : null
                    }
                  </Stack>
                ) :
                null
            }
          </Stack>
        </VStack>
      </Flex>
      {
        !isLargerThan850 ? (
          <SimpleGrid
            columns={{ base: 4 }}
            spacing={{ base: 2 }}
            py={3}
            px={1}
            bgGradient={'linear(to-b, secondary.800, blackAlpha.800)'}>
            {
              statistics ? (statistics.map((st, idx) => {
                // if (idx === 0) return;
                return (
                  <Box key={`stats-box-${idx}`}>
                    <Flex justify={"center"} align={"center"} flexWrap={"wrap"}>
                      <Counter from={0} to={st.toValue} duration={st.duration} size={'md'} />
                      <Heading
                        size='xs'
                        color={useColorModeValue('whiteAlpha.700', 'whiteAlpha.700')}
                        textAlign={"center"}>
                        {st.description}
                      </Heading>
                    </Flex>
                  </Box>
                )
              })) : null
            }
          </SimpleGrid>
        ) : null
      }
    </Box>
  )
}