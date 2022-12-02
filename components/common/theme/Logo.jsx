import { Box, Image } from "@chakra-ui/react";

export default function Logo({ ...props }) {
  const logoUrl = "/logo.svg";

  return (
    <Box>
      <Image src={logoUrl} cursor={'pointer'} {...props} alt={"logo"} />
    </Box>
  )
}