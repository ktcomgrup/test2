import { Box, Image } from "@chakra-ui/react";

export default function Logo({ logoUrl, ...props }) {
  return (
    <Box>
      <Image src={logoUrl} cursor={'pointer'} {...props} alt={"logo"} />
    </Box>
  )
}