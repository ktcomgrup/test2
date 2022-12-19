import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { ColorModeSwitcher } from "../theme/ColorModeSwitcher";

export default function MobileDrawer({ links, linkColor }) {
  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      borderBottom={2}
      borderStyle={'solid'}
      borderColor={useColorModeValue("whiteAlpha.900", "blackAlpha.800")}
    >
      {links.map((item) => (
        <MobileNavItem key={item.label} linkColor={linkColor} {...item} />
      ))}
    </Stack>
  );
};