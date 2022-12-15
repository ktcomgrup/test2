import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { Box, Button, Tooltip, useColorModeValue } from '@chakra-ui/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Tooltip
          mb={1}
          label='Navigează la început'
          hasArrow
          bg={useColorModeValue('primary.700', 'gold.200')}
          color={useColorModeValue('white', 'secondary.800')}>
          <Box
            onClick={scrollToTop}
            position='fixed'
            bottom='20px'
            right={{ base: "16px", md: "20px" }}
            zIndex={3}>
            <Button
              iconSpacing={0}
              size={{ base: "xs", md: "sm" }}
              rightIcon={<MdArrowUpward />}
              borderWidth={1}
              borderColor={useColorModeValue('white', 'secondary.700')}
              bg={useColorModeValue('primary.700', 'gold.200')}
              color={useColorModeValue('white', 'secondary.800')}
              _hover={{ bg: useColorModeValue('primary.900', 'gold.300') }}>
            </Button>
          </Box>
        </Tooltip>
      )}
    </>
  );
}