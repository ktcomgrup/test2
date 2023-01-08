import {
  Box,
  Highlight,
  Text,
  useColorModeValue, Divider
} from "@chakra-ui/react";
import ScaleInContainer from "../../components/common/container";
import CustomAlert from "../../components/common/alert";
import HeroWithImage from "../../components/common/hero";

export default function JoinContent() {
  return (
    <Box id={"join"}>
      <HeroWithImage
        // imageUrl={"https://images.unsplash.com/photo-1630569267529-633c7644ee7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"}
        imageUrl={"https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
        title={"Vino în echipa noastră"}
        subtitle={"Ne gândim că experiența ta poate face diferența și că scopurile noastre te pot motiva să îți intreci limitele, pentru că împreună suntem cu un pas mai aproape de ceea ce ne propunem. Așa că, dacă ești un om implicat și pozitiv, te așteptăm în echipa noastră. Tot ce trebuie să faci este să urmezi următorii pași."}
      />
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
            title={"Ia legatura cu noi"}
            description={"contactează-ne prin formularul pus la dispoziție și haide să ne cunoaștem puțin înainte."}
            icon={"number1"}
            disableHover={true}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Treci de procesul de selecție"}
            description={"vei fi invitat în cadrul unui interviu de aligniere și cunoaștere, unde vom discuta mai pe larg despre nevoile fundației și despre tine."}
            icon={"number2"}
            disableHover={true}
          />
          <Divider orientation='horizontal' />
          <CustomAlert
            title={"Parcurge un training împreună cu noi"}
            description={"vom vrea să te ajutăm și noi în schimb, ca totul să fie mult mai ușor pentru tine ca membru nou al echipei."}
            icon={"number3"}
            disableHover={true}
          />
        </ScaleInContainer>
      </Box>
    </Box>
  )
}