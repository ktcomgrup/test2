import { Box, Highlight, Text, useColorModeValue } from '@chakra-ui/react';
import { MdOutlineFileDownload, MdOutlineDocumentScanner } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function CustomAlert(props) {
  const { title = "", description = "", icon = "download", highlight = null, disableHover = false } = props;
  const iconColor = useColorModeValue("white", "#f9eb9e");
  return (
    <Box my={4}>
      <Box display={"flex"} alignItems={"center"} my={4}>
        <Box display={{ base: "none", md: "inline-block" }}>

          {
            icon === "download" ?
              <MdOutlineFileDownload
                size={100}
                color={iconColor}
                cursor={"pointer"}
              />
              : null
          }
          {
            icon === "form" ?
              <MdOutlineDocumentScanner
                size={100}
                color={iconColor}
                cursor={!disableHover ? "pointer" : "unset"}
              />
              : null
          }
          {
            icon === "send" ?
              <FiSend
                size={100}
                color={iconColor}
                cursor={!disableHover ? "pointer" : "unset"}
              />
              : null
          }

        </Box>
        <Box ml={{ base: 3, md: 4 }}>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            cursor={!disableHover ? "pointer" : "unset"}
            color={useColorModeValue("white", "gold.200")}
            _hover={!disableHover ? {
              color: useColorModeValue("primary.200", "secondary.500"),
              transition: 'all .3s ease-in-out',
            } : null}
          >
            {title}
          </Text>
          <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue("primary.200", "secondary.500")}>
              {description}
            </Text>
            {
              highlight ? <Text
                fontSize={{ base: "md", md: "lg" }}
                color={useColorModeValue("white", "white")}
                ml={{ base: 0, md: 2 }}
              >
                {highlight}
              </Text> : null
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}