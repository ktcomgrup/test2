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
      title: "Cine poate direcționa 3,5% din impozitul pe venit?",
      description: "Direcționarea sumei aferente celor 3,5% din impozitul pe venit se poate face prin intermediul formularului 230, formular care poate fi completat de:",
      children: [
        {
          description: "persoanele care au venituri din salarii și asimilate salariilor;"
        },
        {
          description: "persoanele care au venituri din pensii;"
        },
        {
          description: "persoanele care au venituri din activități independente impuse pe bază de normă de venit;"
        },
        {
          description: "persoanele ce desfășoară activități agricole impuse pe bază de normă de venit;"
        },
        {
          description: "persoanele care au venituri din activități independente realizate în baza contractelor de activitate sportivă, pentru care impozitul se reține la sursă;"
        },
        {
          description: "persoanele care au venituri din drepturi de proprietate intelectuală, altele decât cele pentru care venitul net se determină în sistem real;"
        },
        {
          description: "persoanele care au venituri din cedarea folosinței bunurilor pentru care venitul net se determină pe baza normelor de venit și venituri din cedarea folosinței bunurilor pentru care venitul net se determină pe baza cotelor forfetare de cheltuieli."
        }
      ]
    },
    // {
    //   title: "Cum se procedează?",
    //   description: "Persoanele fizice care au realizat în anul precedent venituri din salarii pot dispune de redirecționarea a 3.5% din impozitul anual către fundația noastră completând Declarația Unică 230."
    // },
    {
      title: "Se pot alege mai multe organizații?",
      description: "Nu, dvs. puteți direcționa 3.5% din impozitul pe venitul anual către o singură entitate nonprofit."
    },
    {
      title: "Această acțiune implică vreun cost?",
      description: "Nu, dvs. nu cheltuiți nimic. Această sumă reprezintă o parte din bugetul de stat, iar dvs. puteți să vă implicați fără nici un fel de costuri suplimentare, în susținerea unor cauze sociale importante."
    },
    // {
    //   title: "Pentru cât timp?",
    //   description: "Alegerea dvs. este valabilă pentru anul fiscal precedent (1 Ianuarie - 31 Decembrie)."
    // },
  ]

  return (
    <Box id={"procedure-info35"} pt={6}>
      <Box color={useColorModeValue('primary.700', 'secondary.800')} px={{ base: 8, md: 14 }}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          {/*Redirecționează 3.5% din impozitul datorat statului către noi.*/}
          Implică-te și tu ! Direcționează 3,5% din impozitul pe venit din anul 2025 către Fundația E-LEARNING !
        </Text>

        <Box>

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "xl" }}
            mt={4}
            mb={2}
          >
            În fiecare an, <b>ai puterea</b> de a decide ce se întâmplă cu 3,5% din impozitul pe venit pe care oricum
            trebuie să îl plătești la stat!
          </Text>
          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "xl" }}
            mt={4}
            mb={2}
          >
            <b>Nu ezita</b>, contribuie la susținerea proiectelor Fundației E-LEARNING cu un puternic impact asupra
            educației
            din România!
          </Text>
          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "xl" }}
            mt={4}
            mb={2}
          >
            În cazul în care alegi să nu direcționezi cei 3,5% din impozitul pe venit, banii aferenți vor fi automat
            gestionați de stat. De ce să lași pe altcineva să decidă ce se întâmplă cu banii tăi?! <b>Ia atitudine și
            arată
            că îți pasă!</b>
          </Text>


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
              Ce înseamnă direcționarea a 3,5% din impozitul pe venit?
            </Highlight>
          </Text>

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "md", md: "xl" }}
          >
            Contribuabilii au posibilitatea de a opta asupra destinației unei sume
            reprezentând până la 3,5% din impozitul pe venit.
            <br />
            Persoanele care își doresc să susțină proiectele Fundației E-LEARNING și,
            odată cu acestea, să susțină educația o pot face simplu și ușor!
            {/*Contribuabilii persoane fizice pot dispune asupra destinației unei sume reprezentând până la 3,5% din*/}
            {/*impozitul pe venitul anual datorat Statului, conform Art. 57 alin. (4) și Art. 84 alin. (2) din Ordonanța de*/}
            {/*Urgență a Guvernului nr.138/2004 pentru modificarea și completarea Legii privind Codul Fiscal nr. 571/2003*/}
            {/*și aplicată prin Legea nr. 163/2005.*/}
          </Text>


          <Alert
            variant='left-accent'
            my={4}
            bg={useColorModeValue("blackAlpha.50", "whiteAlpha.500")}
            borderInlineStartColor={useColorModeValue("primary.600", "secondary.800")}
          >
            <AlertIcon color={useColorModeValue("primary.600", "secondary.800")} />
            <AlertTitle display={{ base: "none", md: "inline-block" }}>Atentie!</AlertTitle>
            <AlertDescription>
              Aceasta sumă nu este o sponsorizare sau donație, ci reprezintă o parte a impozitului pe venit deja
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

          <Text
            textAlign={{ base: "start", md: "start" }}
            fontSize={{ base: "lg", md: "xl" }}
            mt={4}
            mb={2}
          >
            <b>Ajută-ne să te ajutăm!</b> Direcționează 3,5% din impozitul pe venit până
            pe 25 mai și astfel vei sprijini proiecte esențiale pentru oamenii care au
            convingerea că numai investind în educație putem progresa ca națiune.
          </Text>
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
              query='3 pași'
              styles={{
                px: 4,
                py: 1,
                rounded: 'full',
                bg: useColorModeValue("white", "gold.200"),
                color: useColorModeValue("primary.700", "secondary.800")
              }}
            >
              Cum te poți implica în 3 pași simpli?
            </Highlight>
          </Text>

          <CustomAlert
            title={"Pasul 1: Descarcă FORMULARUL 230"}
            // description={"dacă ai avut venituri din salarii/pensii, din activități independente/agricole, drepturi de proprietate intelectuală și cedarea folosinței bunurilor, dacă pentru acestea din urmă nu ai obligația să depui Declarația Unică."}
            description={"Descarcă Formularul 230 privind destinația sumei reprezentând până la 3,5% din impozitul anual pe care îl plătești la stat"}
            icon={"download"}
          />
          {/*<Divider orientation='horizontal' />*/}
          {/*<CustomAlert*/}
          {/*  title={"Descarcă DECLARAȚIA UNICĂ"}*/}
          {/*  description={"dacă anul precedent ai avut venituri din activități independente, drepturi de proprietate intelectuală și cedarea folosinței bunurilor, atunci ai obligația depunerii Declarației Unice."}*/}
          {/*  icon={"download"}*/}
          {/*/>*/}
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Pasul 2: Completează FORMULARUL"}
            description={"Completează datele tale la rubrica DATE DE IDENTIFICARE A CONTRIBUABILULUI și semnează în chenarul aferent semnăturii. Restul rubricilor se completează doar dacă este cazul (nu sunt obligatorii)."}
            icon={"form"}
            disableHover={true}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Pasul 3: Alege una dintre cele 3 variante"}
            list={[
              {
                title: "După ce ai completat și semnat formularul, trimite-l pe email la adresa info@elearningfoundation.ro și noi vom depune formularele la organul fiscal competent;",
                highlight: "info@elearningfoundation.ro"
              },
              {
                title: "Depuneți formularul (personal) în dublu exemplar direct la registratura organului fiscal competent (la Administrația Finanțelor Publice a localității de domiciliu. Potrivit legii este acceptată și adresa unde locuiește efectiv deponentul, în cazul în care aceasta este diferită de domiciliu, pentru persoanele fizice care au domiciliul fiscal în România);",
                highlight: "la registratura organului fiscal competent",
                redirectLink: "https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm?utm_source=newsletter&utm_medium=email&utm_content=Newsletter-1036653-20230126&utm_campaign=Implic%C4%83-te+%C8%99i+tu+%21+Direc%C8%9Bioneaz%C4%83+cei+3%2C5%25+din+impozitul+pe+venit+din+anul+2022+pentru+InfoCons+%21+Fii+un+SuperConsumator+%21",
              },
              {
                title: "Trimiteți formularul prin poștă, cu scrisoare recomandată, la organul fiscal competent (la Administrația Finanțelor Publice a localității de domiciliu - potrivit legii este acceptată și adresa unde locuiește efectiv deponentul, în cazul în care aceasta este diferită de domiciliu, pentru persoanele fizice care au domiciliul fiscal în România);",
                highlight: "la organul fiscal competent",
                redirectLink: "https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm?utm_source=newsletter&utm_medium=email&utm_content=Newsletter-1036653-20230126&utm_campaign=Implic%C4%83-te+%C8%99i+tu+%21+Direc%C8%9Bioneaz%C4%83+cei+3%2C5%25+din+impozitul+pe+venit+din+anul+2022+pentru+InfoCons+%21+Fii+un+SuperConsumator+%21",
              }
            ]}
            icon={"send"}
            disableHover={true}
          />
        </ScaleInContainer>
      </Box>

      <Box>
        <Box color={useColorModeValue('red.500', 'red.500')} px={{ base: 8, md: 14 }}>
          <Alert
            variant='left-accent'
            my={4}
            bg={useColorModeValue("blackAlpha.50", "whiteAlpha.500")}
            borderInlineStartColor={useColorModeValue("red", "red")}
          >
            <AlertIcon
              color={"red"}
            />
            <AlertDescription><b>Direcționează și tu 3,5% din impozitul pe venit</b></AlertDescription>
          </Alert>
        </Box>
      </Box>
    </Box>
  )
}