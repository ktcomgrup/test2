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

export default function ProcedureInfo20() {
  const accordionItems = [
    {
      title: "Cum se procedează pentru sponsorizări efectuate de către platitorii de impozit pe venit?",
      description: "Microîntreprinderile care efectuează sponsorizări, potrivit legii, pentru susținerea organizațiilor non-profit și a unităților de cult înscrise în Registrul ANAF al entităților/unităților de cult pentru care se acordă deduceri fiscale pot beneficia de credit fiscal în cuantum de 20% din impozitul pe veniturile microîntreprinderilor datorat pentru trimestrul în care au efectuat sponsorizarea."
    },
    {
      title: "Cum se procedează pentru sponsorizări efectuate de către platitorii de impozit pe profit?",
      description: "Modalitatea de a beneficia de facilitatea fiscală la plata impozitului pe profit este foarte simplă: semnați un contract de sponsorizare cu un ONG înscris în Registrul entităților pentru care se acordă deduceri fiscale și virați către acesta suma dorită, calculând suma reprezentând 20% din impozitul pe profit și suma reprezentând 0,75% din cifra de afaceri, iar sponsorizarea acordată, limitată la valoarea cea mai mică dintre cele două sume calculate mai sus, se va deduce din impozitul pe profit datorat."
    },
    {
      title: "Se pot alege mai multe organizații?",
      description: "Da, opțiunea de redirecționare poate fi exercitată pentru una sau mai multe entități, în limita sumei stabilite"
    },
  ]

  return (
    <Box id={"procedure-info20"} pt={6}>
      <Box color={useColorModeValue('primary.700', 'secondary.800')} px={{ base: 8, md: 14 }}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Redirecționează 20% din impozitul pe profit sau venit al companiei.
        </Text>

        <Box>
          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "3xl" }}
            mt={4}
            mb={2}
          >
            <Highlight
              query='20%'
              styles={{
                px: '4',
                py: '1',
                rounded: 'full',
                bg: useColorModeValue("primary.700", "secondary.800"),
                color: useColorModeValue("white", "gold.200")
              }}
            >
              Ce reprezinta 20%?
            </Highlight>
          </Text>

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "md", md: "xl" }}
          >
            Sponsorizarea a 20% din impozitul pe profit sau venit este o facilitate fiscală existentă în Codul fiscal
            din anul 2004. Fondurile acordate NU reprezintă o cheltuială suplimentară pentru companie, fiind scăzute
            ulterior şi direct sumele ce trebuie achitate statului în contul impozitului pe profit/venit.
          </Text>


          <Alert
            variant='left-accent'
            my={4}
            bg={useColorModeValue("blackAlpha.50", "whiteAlpha.500")}
          >
            <AlertIcon />
            <AlertTitle display={{ base: "none", md: "inline-block" }}>Atentie!</AlertTitle>
            <AlertDescription>
              Plătitorii de impozit pe profit sau de impozit pe veniturile microîntreprinderilor, după caz, pot dispune
              redirecționarea unor sume din impozitul datorat, potrivit legii, în termen de 6 luni de la termenul legal
              de depunere a declarației anuale de impozit pe profit, respectiv a declarației de impozit pe veniturile
              microîntreprinderilor aferente trimestrului IV.
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
            title={"Descarcă FORMULARUL 177"}
            description={"„Cerere privind redirecționarea impozitului pe profit/impozitului pe veniturile microîntreprinderilor“"}
            icon={"download"}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Completează FORMULARUL"}
            description={"completează de mână, cu majuscule. Datele Fundației E-LEARNING sunt precompletate în formular."}
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