import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import MissionSection from "./mission";
import HeroSection from "./hero";
import VisionSection from "./vision";

export default function LandingPage() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}