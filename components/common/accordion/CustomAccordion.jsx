import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue
} from "@chakra-ui/react";

export default function CustomAccordion(props) {
  const { accordionItems = [] } = props;
  const expandedBg = useColorModeValue("primary.700", "secondary.800")

  return (
    <Accordion allowMultiple>
      {
        accordionItems.length > 0 ? accordionItems.map((a, idx) => {
          return (
            <AccordionItem
              key={`accordion-${idx}`}
              borderColor={"blackAlpha.200"}
            >
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: expandedBg,
                    color: "white"
                  }}
                  _hover={{
                    bg: expandedBg,
                    color: "white",
                    transition: 'all .3s ease-in-out'
                  }}
                >
                  <Box as="span" flex='1' textAlign='left' fontSize={{ base: 'md', md: 'lg' }}>
                    {a.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                {a.description}
              </AccordionPanel>
            </AccordionItem>
          )
        }) : null
      }
    </Accordion>
  )
}