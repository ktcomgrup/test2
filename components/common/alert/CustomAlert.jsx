import { Box, Highlight, Link, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { MdOutlineFileDownload, MdOutlineDocumentScanner } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

export default function CustomAlert(props) {
  const { title = "", description = "", icon = "download", highlight = null, disableHover = false, list = [] } = props;
  const iconColor = useColorModeValue("white", "#f9eb9e");
  const textHoverColor = useColorModeValue("primary.200", "secondary.500");
  const listItemColor = useColorModeValue("primary.200", "secondary.500");
  const listColor = useColorModeValue("white", "gold.200");
  const highlightColor = useColorModeValue("white", "gold.200");
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
            {
              icon === "download" ? <a href='/docs/230_2020_form.pdf' download={"Declaratie_230_din_2022.pdf"}>{title}</a> : <span>{title}</span>
            }
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

          {
            list && list.length > 0 ?
              (
                list.map((l, idx) => {
                  return (
                    <UnorderedList key={`list-text-${idx}`}>
                      <ListItem color={listColor}>
                        <Text
                          fontSize={{ base: "md", md: "lg" }}
                          pb={1}
                          color={listItemColor}
                        >
                          {
                            l.redirectLink ?
                              <Link
                                isExternal
                                href={l.redirectLink}
                                _hover={{
                                  textDecoration: 'none'
                                }}
                              >
                                <Highlight
                                  query={l.highlight}
                                  styles={{
                                    color: highlightColor,
                                    cursor: "pointer"
                                  }}
                                >
                                  {l.title}
                                </Highlight>
                              </Link>
                              :
                              <Highlight
                                query={l.highlight}
                                styles={{
                                  color: highlightColor,
                                  cursor: "pointer"
                                }}
                              >
                                {l.title}
                              </Highlight>
                          }
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  )
                })
              ) : null
          }

        </Box>
      </Box>
    </Box>
  );
}