import {
  Flex,
  Box,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  SimpleGrid,
  FormErrorMessage,
  useToast, Stack,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useState, useRef } from "react";
import isValidEmail from "../../../util/validators/validEmail";
import ScaleInContainer from "../../../components/common/container";

export default function ContactSection() {
  const toast = useToast();
  const toastIdRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  //   Form validation
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0 || !isValidEmail(email)) {
      tempErrors["email"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      setIsButtonLoading(true);
      const res = await fetch("/api/send-email", {
      // const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error, message: msj } = await res.json();
      if (error) {
        console.log("EMAIL ERROR", error)
        addToast("Avem o problema acum. Vă rugăm să încercați mai târziu. Mulțumim!", "error");
        setIsButtonLoading(false);
        return;
      }
      addToast(msj || "Vă mulțumim pentru cerere", "success");
      setIsButtonLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
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
    <ScaleInContainer id={"contact"} py={6}>
      <Flex bg={useColorModeValue('transparent', 'gold.100')}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={6}
          m={{ base: 2, sm: 4, md: 6, lg: 10 }}
          px={4}
          w={"100%"}
        >
          <Box
            bg={useColorModeValue('primary.700', 'secondary.800')}
            color="white"
            borderTopRightRadius={{ base: "12px", md: "60px" }}
            borderBottomRightRadius={{ base: "0px", md: "60px" }}
            borderTopLeftRadius={{ base: "12px", md: "0px" }}
            px={{ base: 4, sm: 5, md: 5, lg: 16 }}
            py={{ base: 4, sm: 5, md: 5, lg: 16 }}
          >
            <Text
              fontSize={{ base: "xl", md: "4xl" }}
              fontWeight={"bold"}
              textAlign={{ base: "center", md: "start" }}
              mb={{ base: 4, md: 0 }}
            >
              Hai să vorbim
            </Text>
            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.50" fontSize={"lg"}>
              Completează formularul alăturat și încercăm să te contactăm în cel mai scurt timp sau încearcă una din
              metode:
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <Stack
                direction={{ base: 'column', md: 'column' }}
                pl={0}
                spacing={3}
                alignItems={{ base: "flex-start", md: "flex-start" }}
              >
                <Button
                  size="md"
                  variant="ghost"
                  _hover={{
                    bg: "whiteAlpha.200"
                  }}
                  color="white"
                  leftIcon={<MdPhone color={"white"} size="20px" />}>
                  <a href="tel:0728889883">0728 889 883</a>
                </Button>
                <Button
                  size="md"
                  variant="ghost"
                  _hover={{
                    bg: "whiteAlpha.200"
                  }}
                  color="white"
                  leftIcon={<MdEmail color="white" size="20px" />}>
                  <a href="mailto:info@elearningfoundation.ro">info@elearningfoundation.ro</a>
                </Button>
                <Button
                  size="md"
                  variant="ghost"
                  _hover={{
                    bg: "whiteAlpha.200"
                  }}
                  color="white"
                  leftIcon={<MdLocationOn color="white" size="20px" />}>
                  București, România
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            bg="white"
            borderTopLeftRadius={{ base: "0px", md: "60px" }}
            borderBottomLeftRadius={{ base: "12px", md: "60px" }}
            borderBottomRightRadius={{ base: "12px", md: "0px" }}
          >
            <Box m={8} color="blackAlpha.800">
              <VStack spacing={5}>
                <FormControl id="name" isInvalid={errors.name} isRequired>
                  <FormLabel>Nume</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                    >
                      <BsPerson key="person-icon" color="gray.800" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      size="md"
                      placeholder='Ionescu Andrei'
                      focusBorderColor={useColorModeValue("primary.700", "secondary.700")}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      _hover={{
                        borderColor: useColorModeValue("primary.700", "secondary.700")
                      }}
                      _placeholder={{ color: "secondary.700" }}
                      name="name"
                    />
                  </InputGroup>
                  {errors.name && <FormErrorMessage>Numele este necesar</FormErrorMessage>}
                </FormControl>
                <FormControl id="email" isInvalid={errors.email} isRequired>
                  <FormLabel>E-mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                    >
                      <MdOutlineEmail key="person-email" color="gray.800" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      size="md"
                      placeholder='ionescuandrei@email.com'
                      focusBorderColor={useColorModeValue("primary.700", "secondary.700")}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      _hover={{
                        borderColor: useColorModeValue("primary.700", "secondary.700")
                      }}
                      _placeholder={{ color: "secondary.700" }}
                      name="email"
                    />
                  </InputGroup>
                  {errors.email && <FormErrorMessage>Email-ul este invalid</FormErrorMessage>}
                </FormControl>
                {/*<FormControl id="phone" isInvalid={errors.phone} isRequired>*/}
                <FormControl id="phone">
                  <FormLabel>Număr de telefon</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                    >
                      <MdPhone key="person-phone" color='gray.800' />
                    </InputLeftElement>
                    <Input
                      type='tel'
                      borderColor="#E0E1E7"
                      size="md"
                      placeholder='0123 456 789'
                      focusBorderColor={useColorModeValue("primary.700", "secondary.700")}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      _hover={{
                        borderColor: useColorModeValue("primary.700", "secondary.700")
                      }}
                      _placeholder={{ color: "secondary.700" }}
                      name="phone"
                    />
                  </InputGroup>
                  {/*{errors.phone && <FormErrorMessage>Phone is invalid</FormErrorMessage>}*/}
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Mesaj</FormLabel>
                  <Textarea
                    borderColor="#E0E1E7"
                    placeholder="Întreabă-ne fără ezitare"
                    focusBorderColor={useColorModeValue("primary.700", "secondary.700")}
                    maxH={"200px"}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    _hover={{
                      borderColor: useColorModeValue("primary.700", "secondary.700")
                    }}
                    _placeholder={{ color: "secondary.700" }}
                    name="message"
                  />
                </FormControl>
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
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </ScaleInContainer>
  );
}