import {
  Box,
  Collapse,
  Flex, Icon,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import WebDrawer from "./WebDrawer";
import Logo from "../theme/Logo";
import MobileDrawer from "./MobileDrawer";
import styles from "../../../styles/components/common/Drawer.module.scss";
import { ColorModeSwitcher } from "../theme";

export default function Drawer({ links = [] }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const themeText = useColorModeValue('dark', 'light');

  const handleCollapse = (collapse = false) => {
    if (collapse) {
      onClose();
    }
  }

  return (
    <div className={styles.drawer} id={'top-drawer'}>
      <Box
        w={'full'}
        overflow={"hidden"}
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.800")}
        backdropFilter={"blur(10px)"}
        boxShadow='lg'
      >
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <Icon as={MdClose} w={3} h={3} /> : <Icon as={MdMenu} w={5} h={5} />
              }
              variant={'ghost'}
              color={useColorModeValue('primary.800', 'gold.200')}
              aria-label={'Toggle Navigation'}
            />
            <ColorModeSwitcher />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'end', md: 'space-around' }} alignItems={'center'} zIndex={99}>
            <Flex>
              <Link href={"/"}>
                <Logo
                  h={{ base: 10, sm: 10, md: 10, lg: "80px" }}
                  minWidth={{ md: "90px" }}
                  logoUrl={themeText === "dark" ? "./logo.svg" : "./logo_gold.svg"}
                />
              </Link>
            </Flex>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <WebDrawer links={links} linkColor={useColorModeValue("primary.800", "gold.200")} />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileDrawer
            links={links}
            linkColor={useColorModeValue("primary.800", "gold.200")}
            handleCollapse={handleCollapse}
          />
        </Collapse>
      </Box>
    </div>
  );
};