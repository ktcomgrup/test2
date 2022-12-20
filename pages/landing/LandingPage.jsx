import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import MissionSection from "./mission";
import HeroSection from "./hero";
import VisionSection from "./vision";
import SectionDivider from "../../components/common/divider";
import { motion } from "framer-motion";
import { TbHeartHandshake } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import DonationSection from "./donation";
import ContactSetion from "./contact";
import FutureSection from "./future";

export default function LandingPage() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <HeroSection />
      <MissionSection />
      <VisionSection />

      <SectionDivider
        w={{ base: "65%", md: "75%" }}
        parentDirection={"row"}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        borderTopEndRadius={"2xl"}
        borderBottomEndRadius={"2xl"}
        my={4}
        px={{ base: 4, md: 16 }}
        sectionId={"together"}
        imageSrc={"https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
      >
        <Text
          fontSize={{ base: 'xl', md: '4xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Împreună suntem mai puternici, indiferent de origini
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Incluzine, solidaritate și respect sunt unele din valorile după care ne ghidăm
        </Text>
      </SectionDivider>

      <SectionDivider
        w={{ base: "65%", md: "75%" }}
        parentDirection={"row-reverse"}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        borderTopStartRadius={"2xl"}
        borderBottomStartRadius={"2xl"}
        my={4}
        px={{ base: 4, md: 16 }}
        sectionId={"innovation"}
        imageSrc={"https://images.unsplash.com/photo-1602026489579-821de7cc8d4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
      >
        <Text
          fontSize={{ base: 'xl', md: '4xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Haide să creionăm împreună o societate mai bună
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Educația și inovația pot funcționa într-o lume deschisă
        </Text>
      </SectionDivider>

      <FutureSection />

      <SectionDivider
        w={{ base: "65%", md: "75%" }}
        parentDirection={"row"}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        borderTopEndRadius={"2xl"}
        borderBottomEndRadius={"2xl"}
        my={4}
        px={{ base: 4, md: 16 }}
        sectionId={"join-team"}
        imageSrc={"https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
      >
        <Text
          fontSize={{ base: 'xl', md: '4xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Alătură-te echipei noastre de voluntari</Text>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Dacă ești o personă implicată și dorești să ajuți, vino în echipa noastră
        </Text>
        <Button
          mt={6}
          bg={useColorModeValue('white', 'gold.200')}
          rounded={'full'}
          rightIcon={<AiOutlineTeam />}
          color={useColorModeValue('primary.700', 'secondary.800')}
          fontSize={{ base: 14, md: 18 }}
          minW={"180px"}
          cursor={"pointer"}
          _hover={{ bg: useColorModeValue('primary.50', 'gold.300') }}
        >
          Vino în echipă
        </Button>
      </SectionDivider>

      <SectionDivider
        w={{ base: "65%", md: "75%" }}
        parentDirection={"row-reverse"}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        borderTopStartRadius={"2xl"}
        borderBottomStartRadius={"2xl"}
        my={4}
        px={{ base: 4, md: 16 }}
        sectionId={"donate"}
        imageSrc={"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
      >
        <Text
          fontSize={{ base: 'xl', md: '4xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Donează și fii alături de noi în această provocare
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color={useColorModeValue('white', 'gold.200')}
        >
          Lucrurile bune se fac din inima
        </Text>
        <Button
          mt={6}
          bg={useColorModeValue('white', 'gold.200')}
          rounded={'full'}
          rightIcon={<TbHeartHandshake />}
          color={useColorModeValue('primary.700', 'secondary.800')}
          fontSize={{ base: 14, md: 18 }}
          minW={"180px"}
          cursor={"pointer"}
          _hover={{ bg: useColorModeValue('primary.50', 'gold.300') }}
        >
          Donează
        </Button>
      </SectionDivider>

      <DonationSection />
      <ContactSetion />

      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}