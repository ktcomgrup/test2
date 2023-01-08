import { Box, Image } from "@chakra-ui/react";
import ScaleInContainer from "../container";

export default function SectionDivider(props) {
  const { children, sectionId, parentDirection = "row", imageSrc, ...rest } = props;
  return (
    <ScaleInContainer id={sectionId}>
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={parentDirection}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          p={10}
          minH={"200px"}
          boxShadow={"2xl"}
          {...rest}
        >
          {children}
        </Box>
        <Box display={"flex"} flex={1} justifyContent={"center"}>
          <Image
            borderRadius='full'
            boxSize={{ base: '80px', md: '180px' }}
            objectFit={"cover"}
            src={imageSrc}
            alt='image'
          />
        </Box>
      </Box>
    </ScaleInContainer>
  )
}