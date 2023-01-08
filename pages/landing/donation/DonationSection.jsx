import {
  Box,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Highlight,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import ScaleInContainer from "../../../components/common/container";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlinePercentage, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import NextLink from "next/link";

export default function DonationSection() {
  return (
    <ScaleInContainer id={"help"}>
      <Flex
        w={'full'}
        h={{ base: '100%', md: '100%' }}
        minH={"100vh"}
        backgroundImage={'url(https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <Flex
          px={{ base: "4px", md: "120px" }}
          py={{ base: 8, md: 10 }}
          w={"full"}
          bgGradient={'linear(to-b, blackAlpha.700, blackAlpha.700)'}
          flexDirection={"column"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight={"bold"}
            textAlign={"center"}
            mb={{ base: 6, md: 10 }}
            color={useColorModeValue("white", "white")}
          >
            Cum poți ajuta și tu
          </Text>
          <UnorderedList
            w={"full"}
            listStyleType={"none"}
            p={0}
            m={0}
            spacing={{ base: 10, md: 10 }}
            justifySelf={"center"}
          >
            <ListItem>
              <Link as={NextLink} href={"/donate"} _hover={{
                textDecoration: "none"
              }}>
                <Flex
                  flexDirection={"row"}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Icon as={BsCreditCard2Back} boxSize={{ base: 16, md: 20 }}
                        color={useColorModeValue("white", "white")} />
                  <Box ml={{ base: 4, md: 10 }}>
                    <Text
                      fontSize={{ base: "lg", md: "4xl" }}
                      lineHeight={8}
                      mb={2}
                      cursor={"pointer"}
                      color={useColorModeValue("white", "white")}
                      _hover={{
                        color: useColorModeValue("primary.100", "gold.100")
                      }}
                    >
                      <Highlight
                        query='cardul'
                        styles={{
                          px: '4',
                          py: '1',
                          rounded: 'full',
                          bg: useColorModeValue("primary.700", "gold.200"),
                          color: useColorModeValue("white", "black")
                        }}
                      >
                        Donează direct cu cardul
                      </Highlight>
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "2xl" }}
                      color={useColorModeValue("white", "white")}
                    >
                      Poți contribui cu o sumă recurentă sau ori de câte ori dorești, suma fiind aleasă de tine.
                    </Text>
                  </Box>
                </Flex>
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href={"/redirect35"} _hover={{
                textDecoration: "none"
              }}>
                <Flex
                  flexDirection={"row"}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Icon as={MdOutlineVolunteerActivism} boxSize={{ base: 16, md: 20 }}
                        color={useColorModeValue("white", "white")} />
                  <Box ml={{ base: 4, md: 10 }}>
                    <Text
                      fontSize={{ base: "lg", md: "4xl" }}
                      lineHeight={8}
                      mb={2}
                      cursor={"pointer"}
                      color={useColorModeValue("white", "white")}
                      _hover={{
                        color: useColorModeValue("primary.100", "gold.100")
                      }}
                    >
                      <Highlight
                        query='3.5%'
                        styles={{
                          px: '4',
                          py: '1',
                          rounded: 'full',
                          bg: useColorModeValue("primary.700", "gold.200"),
                          color: useColorModeValue("white", "black")
                        }}
                      >
                        Redirecționează 3.5%
                      </Highlight>
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "2xl" }}
                      color={useColorModeValue("white", "white")}
                    >
                      Persoanele fizice, respectiv PFA-urile pot dona 3,5% din impozitul pe venit.
                    </Text>
                  </Box>
                </Flex>
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href={"/redirect20"} _hover={{
                textDecoration: "none"
              }}>
                <Flex
                  flexDirection={"row"}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Icon as={AiOutlinePercentage} boxSize={{ base: 16, md: 20 }}
                        color={useColorModeValue("white", "white")} />
                  <Box ml={{ base: 4, md: 10 }}>
                    <Text
                      fontSize={{ base: "lg", md: "4xl" }}
                      lineHeight={8}
                      mb={2}
                      cursor={"pointer"}
                      color={useColorModeValue("white", "white")}
                      _hover={{
                        color: useColorModeValue("primary.100", "gold.100")
                      }}
                    >
                      <Highlight
                        query='20%'
                        styles={{
                          px: '4',
                          py: '1',
                          rounded: 'full',
                          bg: useColorModeValue("primary.700", "gold.200"),
                          color: useColorModeValue("white", "black")
                        }}
                      >
                        Redirecționează 20% din impozitul pe venit sau profit al companiei
                      </Highlight>
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "2xl" }}
                      color={useColorModeValue("white", "white")}
                    >
                      Companiile pot dona 20% din impozitul pe venit sau pe profit anual.
                    </Text>
                  </Box>
                </Flex>
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NextLink} href={"/join"} _hover={{
                textDecoration: "none"
              }}>
                <Flex
                  flexDirection={"row"}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Icon as={AiOutlineTeam} boxSize={{ base: 16, md: 20 }} color={useColorModeValue("white", "white")} />
                  <Box ml={{ base: 4, md: 10 }}>
                    <Text
                      fontSize={{ base: "lg", md: "4xl" }}
                      lineHeight={8}
                      mb={2}
                      cursor={"pointer"}
                      color={useColorModeValue("white", "white")}
                      _hover={{
                        color: useColorModeValue("primary.100", "gold.100")
                      }}
                    >
                      <Highlight
                        query='echipa'
                        styles={{
                          px: '4',
                          py: '1',
                          rounded: 'full',
                          bg: useColorModeValue("primary.700", "gold.200"),
                          color: useColorModeValue("white", "black")
                        }}
                      >
                        Vino în echipa noastră
                      </Highlight>
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "2xl" }}
                      color={useColorModeValue("white", "white")}
                    >
                      Cu ajutorul tău și al bunăvoinței de care dispui, putem face mai mult bine împreuna, așa că te
                      așteptăm în echipă cu mult entuziasm.
                    </Text>
                  </Box>
                </Flex>
              </Link>
            </ListItem>
            {/*<ListItem>*/}
            {/*  <Flex*/}
            {/*    flexDirection={"row"}*/}
            {/*    justifyItems={"center"}*/}
            {/*    alignItems={"center"}*/}
            {/*  >*/}
            {/*    <Icon as={TbReportMoney} boxSize={{ base: 16, md: 20 }} color={useColorModeValue("white", "white")} />*/}
            {/*    <Box ml={{ base: 4, md: 10 }}>*/}
            {/*      <Text*/}
            {/*        fontSize={{ base: "lg", md: "4xl" }}*/}
            {/*        lineHeight={8}*/}
            {/*        mb={2}*/}
            {/*        cursor={"pointer"}*/}
            {/*        color={useColorModeValue("white", "white")}*/}
            {/*        _hover={{*/}
            {/*          color: useColorModeValue("primary.100", "gold.100")*/}
            {/*        }}*/}
            {/*      >*/}
            {/*        <Highlight*/}
            {/*          query='contract de sponsorizare'*/}
            {/*          styles={{*/}
            {/*            px: '4',*/}
            {/*            py: '1',*/}
            {/*            rounded: 'full',*/}
            {/*            bg: useColorModeValue("primary.700", "gold.200"),*/}
            {/*            color: useColorModeValue("white", "black")*/}
            {/*          }}*/}
            {/*        >*/}
            {/*          Redirecționează prin contract de sponsorizare*/}
            {/*        </Highlight>*/}
            {/*      </Text>*/}
            {/*      <Text*/}
            {/*        fontSize={{ base: "md", md: "2xl" }}*/}
            {/*        color={useColorModeValue("white", "white")}*/}
            {/*      >*/}
            {/*        Prin intermediul acestui contract de sponsorizare (depunerea formularului 177), compania ta poate*/}
            {/*        redirecționa diferența dintre potențialul de sponsorizare real și cât a sponsorizat efectiv.*/}
            {/*      </Text>*/}
            {/*    </Box>*/}
            {/*  </Flex>*/}
            {/*</ListItem>*/}
          </UnorderedList>
        </Flex>
      </Flex>
    </ScaleInContainer>
  )
}