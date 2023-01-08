import { Box, Divider, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import ScaleInContainer from "../../../components/common/container";

export default function MissionSection() {
  return (
    <ScaleInContainer id={"mission-section"}>
      <SimpleGrid columns={[1, null, 2]} spacing={0} minH={{ base: "300px", md: "600px" }} w={"100%"}>
        <Box
          py={5}
          px={{ base: 8, md: 20 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontSize={'4xl'}
            fontWeight={'800'}
            color={useColorModeValue("primary.800", "secondary.800")}
            textAlign={"center"}
          >
            MISIUNEA NOASTRĂ
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mt={4}
            color={useColorModeValue("primary.800", "secondary.800")}
            textAlign={"center"}
          >
            Fundația E-Learning are ca scop principal creșterea calității și eficienței în educație și formare
            profesională, încurajarea ideilor inovatoare, susținerea competitivității și adaptarea educației la
            standardele tehnologice de ultimă generație.
          </Text>
          {/*<Button*/}
          {/*  mt={2}*/}
          {/*  variant={"ghost"}*/}
          {/*  size={{ base: "xs", md: "md" }}*/}
          {/*  rightIcon={<MdOutlineArrowRightAlt />}*/}
          {/*  color={useColorModeValue("primary.800", "secondary.800")}*/}
          {/*  _hover={{*/}
          {/*    bg: "transparent",*/}
          {/*    transform: 'translateX(-8px)',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Text>AFLĂ MAI MULTE</Text>*/}
          {/*</Button>*/}
        </Box>
        <Divider display={{ base: "inline-block", md: "none" }}
                 bg={useColorModeValue("secondary.800", "secondary.800")} />
        <Box
          h={"100%"}
          w={"100%"}
          display={{ base: "none", md: "inline-block" }}
        >
          <Image
            alt={"card-image"}
            objectFit={"cover"}
            w={"100%"}
            h={"100%"}
            minWidth={{ md: "90px" }}
            src={"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"} />
        </Box>
      </SimpleGrid>
    </ScaleInContainer>
  )
}