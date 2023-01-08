import { Box, Flex, Heading, Spacer, Stack, Text, VStack } from "@chakra-ui/react";

export default function HeroWithImage(props) {
  const { imageUrl = "", title = "", subtitle = "" } = props;
  return (
    <Flex
      w={'full'}
      h={{ base: '90vh', md: '90vh' }}
      backgroundImage={`url(${imageUrl})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        px={{ base: 6, md: 10 }}
        bgGradient={'linear(to-b, blackAlpha.600, blackAlpha.600)'}
      >
        <Stack
          maxW={'6xl'}
          spacing={10}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          <Heading textAlign={"center"}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: '2xl', md: '5xl' }}
              py={2}
            >
              {title}
            </Text>
            <Text
              color={'whiteAlpha.700'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: 'xl', md: '4xl' }}>
              {subtitle}
            </Text>
          </Heading>
        </Stack>
      </VStack>
    </Flex>
  )
}