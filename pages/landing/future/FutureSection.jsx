import ScaleInContainer from "../../../components/common/container";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function FutureSection() {
  return (
    <ScaleInContainer id={"future"}>
      <Flex
        w={'full'}
        h={{ base: '100%', md: '100%' }}
        minH={"80vh"}
        backgroundImage={'url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}
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
            Pe cine ajutăm
          </Text>

          <Box px={{ base: 6, md: 0 }}>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={8}
              fontWeight={"500"}
              mb={6}
              color={useColorModeValue("white", "white")}
            >
              Întotdeauna milităm pentru o lume mai bune, un viitor în care tinerii să conviețuiască într-o
              societate sănătoasă, în care copii să nu ducă lipsă de nimic și unde părinții să se bucure de rodul muncii
              lor, în care bătrânii să poată beneficia de pe urma ajutorului venit din partea celor tineri, bucurându-se
              de nepoți în liniște.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={8}
              fontWeight={"500"}
              mb={6}
              color={useColorModeValue("white", "white")}
            >
              Omul este și va fi întotdeauna o ființă socială, care are nevoie de sprijin, alinare și iubire. Astfel,
              noi venim în întâmpinarea tuturor persoanelor dornice de afirmare profesională și încercăm să ajutăm cât
              mai multe minți sclipitoare, care sunt defavorizate de mediul din care provin sau din alte considerente.
            </Text>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight={8}
              fontWeight={"500"}
              mb={6}
              color={useColorModeValue("white", "white")}
            >
              Credem în egalitatea de șansă și în puterea colectivă pe care o avem atunci când ne propunem să susținem o
              cauză. Iar pentru că lumea socială este interpretată greșit și pentru că unele companii se folosesc de
              profilele noastre, credem că tinerii de perspectivă, inteligenți și muncitori pot utiliza și înțelege
              diferit tehnologia sau posibilitățile de dezvoltare. Tot ce trebuie să facem este să le oferim o șansă
              acestora să ne surprindă cu inovațiile lor și să ne conducă spre o lume mai bună.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </ScaleInContainer>
  );
}