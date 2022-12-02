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

export default function Drawer({ links = [] }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div className={styles.drawer} id={'top-drawer'}>
      <Box
        w={'full'}
        overflow={"hidden"}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={2}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
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
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'end', md: 'space-around' }} alignItems={'center'} zIndex={99}>
            <Flex>
              <Link href={"/"}>
                <Logo h={{ base: 8, sm: 8, md: 10, lg: "100px" }} minWidth={{ md: "90px" }} />
              </Link>
            </Flex>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <WebDrawer links={links} />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileDrawer links={links} />
        </Collapse>
      </Box>
    </div>
  );
};