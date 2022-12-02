import { Box, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function SectionContainer(props) {
  const { children } = props;
  return (
    <Box bg={useColorModeValue('blue.50', 'blue.50')} my={10}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color={"blue.800"}>In aceste misiuni am avut parte de ajutorul unor parteneri exceptionali</Heading>
          <Text color={"blue.800"}>Ne bucuram ca ii avem alaturi de noi</Text>
        </Stack>
        {children}
      </Container>
    </Box>
  )
}