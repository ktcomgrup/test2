import {
  Box,
  Text,
  Stack,
  Image,
  useColorModeValue, Link,
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { motion } from "framer-motion";

export default function CustomCard(props) {
  const { imageUrl = "", heading = "", description = "", redirectUrl="" } = props;
  return (
    <Link as={NextLink} href={redirectUrl} _hover={{
      textDecoration: "none"
    }}>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        cursor={"pointer"}
        maxW={"400px"}
        minH={{ base: "200px", md: "460px" }}
        w={'full'}
        bg={useColorModeValue('primary.700', 'secondary.800')}
        boxShadow={'lg'}
        rounded={{ base: "md", md: "xl" }}
        p={6}
        overflow={'hidden'}
      >
        <Box
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            objectFit='cover'
            src={imageUrl}
            w={"100%"}
            h={"auto"}
            alt='image'
          />
        </Box>
        <Stack>
          <Text
            color={useColorModeValue('white', 'white')}
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight={"bold"}
          >
            {heading}
          </Text>
          <Text color={useColorModeValue('white', 'white')}>
            {description}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
}