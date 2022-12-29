import {
  Box,
  Stack, Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ContactSection from "../landing/contact";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import CustomCard from "../../components/common/card";

export default function GetInvolvedPageContent() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <Text
        pt={10}
        px={{ base: 8, md: 20 }}
        textAlign={"center"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
        color={useColorModeValue("primary.700", "secondary.800")}
      >
        Implică-te
      </Text>
      <Text
        px={{ base: 8, md: 20 }}
        textAlign={"center"}
        fontSize={{ base: "lg", md: "2xl" }}
        color={useColorModeValue("primary.700", "secondary.800")}
      >
        Ajută, redirecționează și construiește alături de noi un viitor strălucitor pentru cei care nu au șanse.
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ base: 6, md: 8 }}
        px={{ base: 8, md: 20 }}
      >
        <CustomCard
          redirectUrl={"/redirect35"}
          heading={"redirecționează 3.5%"}
          description={"persoanele fizice și PFA-urile au posibilitatea de a dona 3,5% din impozitul pe venit"}
          imageUrl={"https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        />
        <CustomCard
          redirectUrl={"/redirect20"}
          heading={"redirecționează 20%"}
          description={"companiile au posibilitatea de a dona 20% din impozitul pe profit sau pe venit"}
          imageUrl={"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        />
        <CustomCard
          // redirectUrl={"/volunteering"}
          heading={"devino voluntar"}
          description={"dacă ești un om care dorește să ajute în mod direct, vino în echipa noastră"}
          imageUrl={"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        />
      </Stack>
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}