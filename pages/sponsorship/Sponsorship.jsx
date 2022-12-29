import ContactSection from "../landing/contact/ContactSection";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";

export default function Sponsorship() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      todo sponsorship
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}