import ContactSection from "../landing/contact/ContactSection";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import DonateContent from "./DonateContent";

export default function Donate() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <DonateContent />
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}