import ContactSection from "../landing/contact/ContactSection";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "../../components/common/scrollToTop";
import FloatingButton from "../../components/common/floatingButton";
import ProcedureInfo20 from "./ProcedureInfo20";

export default function InvolvementPage20() {
  return (
    <Box bg={useColorModeValue('secondary.100', 'gold.100')}>
      <ProcedureInfo20 />
      <ContactSection />
      <ScrollToTop />
      <FloatingButton />
    </Box>
  )
}