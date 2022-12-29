import ScaleInContainer from "../../components/common/container";
import {
  Box,
  Button, Container, Divider,
  Flex,
  FormControl,
  HStack,
  SimpleGrid, Text,
  useColorModeValue, useToast, VStack
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { useState, useRef } from "react";
import CustomInput from "../../components/common/input/CustomInput";

export default function Contributor() {
  const toast = useToast();
  const toastIdRef = useRef();
  const [lastname, setLastName] = useState("");
  const [fatherLetter, setFatherLetter] = useState("");
  const [firstname, setFirstName] = useState("");
  const [errors, setErrors] = useState({});
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleChange = (inputValue, inputName) => {
    switch (inputName) {
      case "lastname":
        setLastName(inputValue);
        break;
      case "father-letter":
        setFatherLetter(inputValue)
        break;
      case "firstname":
        setFirstName(inputValue)
        break;
      default:
        break;
    }
  }

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    if (lastname.length <= 2) {
      tempErrors["lastname"] = "Numele este necesar.";
      isValid = false;
    }
    if (fatherLetter.length <= 0) {
      tempErrors["fatherLetter"] = "Inițiala tatălui este necesară.";
      isValid = false;
    }
    if (fatherLetter.length > 1) {
      tempErrors["fatherLetter"] = "Este necesară o singură inițială.";
      isValid = false;
    }
    if (firstname.length <= 2) {
      tempErrors["firstname"] = "Prenumele este necesar.";
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (!isValidForm) return;
    setIsButtonLoading(true);
    addToast("Vă mulțumim!", "success");
    setIsButtonLoading(false);
    setLastName("");
    setFatherLetter("");
    setFirstName("");
  };

  function addToast(text, status) {
    toastIdRef.current = toast({
      description: text,
      status,
      position: "top-right",
      containerStyle: { textColor: "white" }
    });
  }

  return (
    <ScaleInContainer id={"contributor"} py={6}>
      <Flex bg={useColorModeValue('transparent', 'gold.100')}>
        <Box color="blackAlpha.800" w={"100%"}>
          <Container>
            <Divider />
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Date de identificare a contribuabilului
            </Text>
          </Container>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={6}
            p={{ base: 3, sm: 4, md: 6, lg: 10 }}
            w={"100%"}
          >
            <CustomInput
              id={"lastname"}
              name={"lastname"}
              label={"Nume"}
              icon={<BsPerson />}
              placeholder={"Ionescu"}
              type={"text"}
              size={"md"}
              value={lastname}
              isRequired={true}
              error={errors.lastname}
              onChange={handleChange}
            />
            <CustomInput
              id={"father-letter"}
              name={"father-letter"}
              label={"Inițiala tatălui"}
              icon={<BsPerson />}
              placeholder={"T."}
              type={"text"}
              size={"md"}
              value={fatherLetter}
              isRequired={true}
              error={errors.fatherLetter}
              onChange={handleChange}
            />
            <CustomInput
              id={"firstname"}
              name={"firstname"}
              label={"Prenume"}
              icon={<BsPerson />}
              placeholder={"Andrei"}
              type={"text"}
              size={"md"}
              value={firstname}
              isRequired={true}
              error={errors.firstname}
              onChange={handleChange}
            />
            <VStack>
              <FormControl id="submit" float="right">
                <Button
                  onClick={handleSubmit}
                  isLoading={isButtonLoading}
                  w={"100%"}
                  variant="solid"
                  bg={useColorModeValue("primary.700", "gold.200")}
                  color={useColorModeValue("white", "secondary.900")}
                  _hover={{
                    bg: useColorModeValue("primary.800", "gold.300"),
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  Trimite
                </Button>
              </FormControl>
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>
    </ScaleInContainer>
  )
}