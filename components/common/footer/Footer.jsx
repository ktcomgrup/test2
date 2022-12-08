import { Box, Container, Flex, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import Logo from "../theme/Logo";

export function Footer() {
  const themeText = useColorModeValue('dark', 'light');
  return (
    <Box
      bg={useColorModeValue('white', 'secondary.800')}
      color={useColorModeValue('primary.800', 'gold.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo h={{ base: 16, sm: 16, md: 10, lg: "60px" }} minWidth={{ md: "90px" }}
              logoUrl={themeText === "dark" ? "./logo.svg" : "./logo_gold.svg"} />
        <Flex direction={{ base: "column", md: "row" }}>
          <Text textAlign={"center"}>© 2022 E-Learning Foundation.&nbsp;</Text>
          <Text textAlign={"center"}>Toate drepturile rezervate</Text>
        </Flex>
      </Container>
    </Box>
  );
}