import { Collapse, Flex, Icon, Link, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import NextLink from "next/link";

export default function MobileNavItem({ label, linkColor, href, handleCollapse, children }) {
  const { isOpen, onToggle } = useDisclosure();
  const linkC = useColorModeValue(linkColor, linkColor);

  const handleMobileMenuClose = () => {
    handleCollapse(true)
  }

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? ''}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={handleMobileMenuClose}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue(linkColor, linkColor)}
          href={href ?? ''}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FaChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            variant={"ghost"}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link as={NextLink} key={child.label} py={2} href={child.href} color={linkC}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
