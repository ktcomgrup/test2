import { Box, Container, Flex, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import Logo from "../theme/Logo";

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('blue.50', 'blue.900')}
      color={useColorModeValue('blue.800', 'blue.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo h={{ base: 8, sm: 8, md: 10, lg: "60px" }} minWidth={{ md: "90px" }} />
        <Flex direction={{ base: "column", md: "row" }}>
          <Text textAlign={"center"}>© 2022 E-Learning Foundation.&nbsp;</Text>
          <Text textAlign={"center"}>Toate drepturile rezervate</Text>
        </Flex>
      </Container>
    </Box>
  );
}