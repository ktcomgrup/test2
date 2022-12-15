import { Box, Button, Container, Divider, Heading, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function VisionSection() {
  return (
    <Container
      id={"vision-section"}
      maxW='100%'
      minW={"100%"}
      p={0}
      m={0}
    >
      <SimpleGrid columns={[1, null, 2]} spacing={0} minH={{ base: "300px", md: "600px" }} w={"100%"}>
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
            src={"https://images.unsplash.com/photo-1517956050595-8932d6d6b740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        </Box>
        <Box
          py={5}
          px={{ base: 8, md: 20 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            color={useColorModeValue("primary.800", "secondary.800")}
            textAlign={"center"}
          >
            VIZIUNEA NOASTRĂ
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mt={4}
            color={useColorModeValue("primary.800", "secondary.800")}
            textAlign={"center"}
          >
            Suntem convinși că o societate depinde de membrii și de valorile acestora, iar pentru noi, o societate
            sănătoasă și prosperă este una inclusivă, care permite tuturor categoriilor de indivizi să se integreze și
            să contribuie pentru binele comun al acesteia.
          </Text>
          <Button
            mt={2}
            variant={"ghost"}
            size={{ base: "xs", md: "md" }}
            rightIcon={<MdOutlineArrowRightAlt />}
            color={useColorModeValue("primary.800", "secondary.800")}
            _hover={{
              bg: "transparent",
              transform: 'translateX(8px)',
            }}
          >
            AFLĂ MAI MULTE
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  )
}