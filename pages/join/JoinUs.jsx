import ContactSection from "../landing/contact/ContactSection";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import JoinContent from "./JoinContent";

export default function JoinUs() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <JoinContent />
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}