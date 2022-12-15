import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { Box, Button, Tooltip, useColorModeValue } from '@chakra-ui/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundColor = useColorModeValue('primary.700', 'gold.200');
  const color = useColorModeValue('white', 'secondary.800');
  const hoverColor = useColorModeValue('primary.900', 'gold.300');

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
          bg={backgroundColor}
          color={color}>
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
              borderColor={color}
              bg={backgroundColor}
              color={color}
              _hover={{ bg: hoverColor }}>
            </Button>
          </Box>
        </Tooltip>
      )}
    </>
  );
}