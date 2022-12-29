import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Box,
  Highlight,
  Text,
  useColorModeValue, Divider
} from "@chakra-ui/react";
import CustomAccordion from "../../components/common/accordion";
import ScaleInContainer from "../../components/common/container";
import { MdOutlineFileDownload } from "react-icons/md";
import CustomAlert from "../../components/common/alert";

export default function ProcedureInfo35() {
  const accordionItems = [
    {
      title: "Cum se procedează?",
      description: "Persoanele fizice care au realizat în anul precedent venituri din salarii pot dispune de redirecționarea a 3.5% din impozitul anual către fundația noastră completând Declarația Unică 230."
    },
    {
      title: "Se pot alege mai multe organizații?",
      description: "Nu, dvs. puteți direcționa 3.5% din impozitul pe venitul anual către o singură entitate nonprofit."
    },
    {
      title: "Această acțiune implică vreun cost?",
      description: "Nu, dvs. nu cheltuiți nimic. Această sumă reprezintă o parte din bugetul de stat, iar dvs. puteți să vă implicați fără nici un fel de costuri suplimentare, în susținerea unor cauze sociale importante."
    },
    {
      title: "Pentru cât timp?",
      description: "Alegerea dvs. este valabilă pentru anul fiscal precedent (1 Ianuarie - 31 Decembrie)."
    },
  ]

  return (
    <Box id={"procedure-info35"} pt={6}>
      <Box color={useColorModeValue('primary.700', 'secondary.800')} px={{ base: 8, md: 14 }}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Redirecționează 3.5% din impozitul datorat statului către noi.
        </Text>

        <Box>
          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "3xl" }}
            mt={4}
            mb={2}
          >
            <Highlight
              query='3,5%'
              styles={{
                px: '4',
                py: '1',
                rounded: 'full',
                bg: useColorModeValue("primary.700", "secondary.800"),
                color: useColorModeValue("white", "gold.200")
              }}
            >
              Ce reprezinta 3,5%?
            </Highlight>
          </Text>

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "md", md: "xl" }}
          >
            Contribuabilii persoane fizice pot dispune asupra destinației unei sume reprezentând până la 3,5% din
            impozitul pe venitul anual datorat Statului, conform Art. 57 alin. (4) și Art. 84 alin. (2) din Ordonanța de
            Urgență a Guvernului nr.138/2004 pentru modificarea și completarea Legii privind Codul Fiscal nr. 571/2003
            și aplicată prin Legea nr. 163/2005.
          </Text>


          <Alert
            variant='left-accent'
            my={4}
            bg={useColorModeValue("blackAlpha.50", "whiteAlpha.500")}
          >
            <AlertIcon />
            <AlertTitle display={{ base: "none", md: "inline-block" }}>Atentie!</AlertTitle>
            <AlertDescription>
              aceasta sumă nu este o sponsorizare sau donație, ci reprezintă o parte a impozitului pe venit deja
              achitat, care poate fi direcționată de către fiecare cetățean către orice organizație.
            </AlertDescription>
          </Alert>

          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "xl", md: "2xl" }}
            mt={4}
            mb={2}
          >
            Mai multe informații despre procedură
          </Text>

          <CustomAccordion accordionItems={accordionItems} />
        </Box>

      </Box>

      <Box bg={useColorModeValue('primary.700', 'secondary.800')} px={{ base: 8, md: 14 }} py={2} my={10}>
        <ScaleInContainer>

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "3xl" }}
            color={useColorModeValue("white", "gold.200")}
            mt={10}
            mb={2}
          >
            <Highlight
              query='Pașii'
              styles={{
                px: 4,
                py: 1,
                rounded: 'full',
                bg: useColorModeValue("white", "gold.200"),
                color: useColorModeValue("primary.700", "secondary.800")
              }}
            >
              Pașii pe care trebuie să îi urmați
            </Highlight>
          </Text>

          <CustomAlert
            title={"Descarcă FORMULARUL 230"}
            description={"dacă ai avut venituri din salarii/pensii, din activități independente/agricole, drepturi de proprietate intelectuală și cedarea folosinței bunurilor, dacă pentru acestea din urmă nu ai obligația să depui Declarația Unică."}
            icon={"download"}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Descarcă DECLARAȚIA UNICĂ"}
            description={"dacă anul precedent ai avut venituri din activități independente, drepturi de proprietate intelectuală și cedarea folosinței bunurilor, atunci ai obligația depunerii Declarației Unice."}
            icon={"download"}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Completează FORMULARUL"}
            description={"completează de mână, cu majuscule. Nu este necesară specificarea sumei (instituția fiscală o va calcula și o va vira conform legii) și nici atașarea Fișei Fiscale. Datele Fundației E-LEARNING sunt precompletate."}
            icon={"form"}
            disableHover={true}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Trimite-ne FORMULARUL COMPLETAT"}
            description={"după ce ai completat și semnat formularul, trimite-l pe email la adresa "}
            highlight={"pascuadrianmihai@gmail.com"}
            icon={"send"}
            disableHover={true}
          />
        </ScaleInContainer>
      </Box>
    </Box>
  )
}