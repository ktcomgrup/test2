import { Box, Highlight, Text, useColorModeValue } from '@chakra-ui/react';
import { MdOutlineFileDownload, MdOutlineDocumentScanner } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

export default function CustomAlert(props) {
  const { title = "", description = "", icon = "download", highlight = null, disableHover = false } = props;
  const iconColor = useColorModeValue("white", "#f9eb9e");
  const textHoverColor = useColorModeValue("primary.200", "secondary.500");
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
          {
            icon === "number1" ?
              <RiNumber1
                size={100}
                color={iconColor}
                cursor={!disableHover ? "pointer" : "unset"}
              />
              : null
          }
          {
            icon === "number2" ?
              <RiNumber2
                size={100}
                color={iconColor}
                cursor={!disableHover ? "pointer" : "unset"}
              />
              : null
          }
          {
            icon === "number3" ?
              <RiNumber3
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
              color: textHoverColor,
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
                color={"white"}
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