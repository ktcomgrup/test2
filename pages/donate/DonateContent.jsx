import {
  Box, Divider,
  Highlight,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ScaleInContainer from "../../components/common/container";
import CustomAlert from "../../components/common/alert";
import SectionDivider from "../../components/common/divider";

export default function DonateContent() {
  return (
    <Box id={"donate"}>
      <SectionDivider
        w={{ base: "65%", md: "75%" }}
        parentDirection={"row"}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        borderTopEndRadius={"2xl"}
        borderBottomEndRadius={"2xl"}
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
          Lucrurile bune se fac din inima.
        </Text>
      </SectionDivider>

      <ScaleInContainer>
        <SimpleGrid columns={[1, null, 2]} spacing={0} minH={{ base: "300px", md: "600px" }} w={"100%"}>
          <Box
            h={{ base: "300px", md: '100%' }}
            w={"100%"}
          >
            <Image
              alt={"card-image"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              minWidth={{ md: "90px" }}
              src={"https://images.unsplash.com/photo-1574607383363-5b5f1747b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
            />
          </Box>
          <Box
            py={{ base: 2, md: 20 }}
            px={{ base: 8, md: 20 }}
            bg={useColorModeValue('primary.700', 'secondary.800')}
          >
            <CustomAlert
              title={"CUI"}
              description={"12345678"}
              icon={""}
              disableHover={true}
            />
            <CustomAlert
              title={"Bancă"}
              description={"Banca Comercială Română"}
              icon={""}
              disableHover={true}
            />
            <CustomAlert
              title={"IBAN RON"}
              description={"RO15 PORL 8453 9149 2369 6435"}
              icon={""}
              disableHover={true}
            />
            <CustomAlert
              title={"IBAN EURO"}
              description={"GB08 BARC 2003 9594 2996 5966"}
              icon={""}
              disableHover={true}
            />
            <CustomAlert
              title={"Nr. Reg. Asociația Fundațiilor"}
              description={"27/01/2023"}
              icon={""}
              disableHover={true}
            />
          </Box>
        </SimpleGrid>
      </ScaleInContainer>
    </Box>
  )
}