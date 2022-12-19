import { useState } from "react";
import { Box, Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineMessage } from "react-icons/md";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToSection = () => {
    // TODO: scroll to contact section;
  };

  return (
    <>
      <Tooltip
        label='Contactează-ne'
        hasArrow
        placement={"right"}
        bg={useColorModeValue('primary.700', 'gold.200')}
        color={useColorModeValue('white', 'secondary.800')}
      >
        <Box
          onClick={scrollToSection}
          position='fixed'
          bottom='50%'
          // left={{ base: "46px", md: "66px" }}
          zIndex={3}>
          <Button
            iconSpacing={0}
            size={{ base: "sm", md: "md" }}
            borderRadius={0}
            leftIcon={<MdOutlineMessage />}
            borderWidth={1}
            borderColor={useColorModeValue('transparent', 'secondary.700')}
            bg={useColorModeValue('primary.700', 'gold.200')}
            color={useColorModeValue('white', 'secondary.800')}
            _hover={{ bg: useColorModeValue('primary.900', 'gold.300') }}>
          </Button>
        </Box>
      </Tooltip>
    </>
  );
}