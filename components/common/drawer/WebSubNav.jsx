import { Box, Flex, Icon, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { MdChevronRight, } from 'react-icons/md';

export default function WebSubNav({ label, href, subLabel }) {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'blue.50') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.800' }}
            fontWeight={600}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.800'} w={5} h={5} as={MdChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};