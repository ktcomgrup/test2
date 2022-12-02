import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import WebSubNav from "./WebSubNav";

export default function WebDrawer({ links }) {

  return (
    <Flex w="100%" py={4} align="center" justify="space-around">
      <HStack as="nav">
        {links.map((item, idx) => (
          <Box key={`box-${idx}`}>
            <Popover trigger={'hover'} placement={'bottom-start'} key={`popover-${idx}`}>
              <PopoverTrigger>
                <Link
                  key={`link-${idx}`}
                  href={item.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={useColorModeValue('blue.800', 'blue.800')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('blue.400', 'blue.400'),
                  }}
                >
                  <Button variant="nav"> {item.label} </Button>
                </Link>
              </PopoverTrigger>

              {item.children && (
                <PopoverContent
                  border={1}
                  borderStyle={'solid'}
                  borderColor={'blue.800'}
                  boxShadow={'xl'}
                  bg={useColorModeValue('white', 'white')}
                  mt={10}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {item.children.map((child) => (
                      <WebSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
        {/*<ColorModeSwitcher />*/}
        <Link
          href={"#contact-us"}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button
            variant="nav"
            bg={'#193877'}
            color={'white'}
            _hover={{
              bg: 'gray.300',
              color: '#193877',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          > Contact
          </Button>
        </Link>
      </HStack>
    </Flex>
  )
}