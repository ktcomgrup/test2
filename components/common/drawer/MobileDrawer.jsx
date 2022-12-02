import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { ColorModeSwitcher } from "../theme/ColorModeSwitcher";

export default function MobileDrawer({ links }) {
  return (
    <Stack
      bg={useColorModeValue('transparent', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      borderBottom={2}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      {links.map((item) => (
        <MobileNavItem key={item.label} {...item} />
      ))}
    </Stack>
  );
};