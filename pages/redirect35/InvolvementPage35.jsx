import ContactSection from "../landing/contact/ContactSection";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import ProcedureInfo35 from "./ProcedureInfo35";

export default function InvolvementPage35() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <ProcedureInfo35 />
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}