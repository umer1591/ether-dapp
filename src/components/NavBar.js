import { ReactNode } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Logo } from "./Logo";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";

const NavLink = ({ children: ReactNode }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <NextLink href="/">
            <Text fontWeight="bold" fontSize="xl">MyDapp</Text>
          </NextLink>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <IconButton
                onClick={toggleColorMode}
                aria-label="Change color mode"
                size="lg"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant={"ghost"}
              />
              <Menu>
                <MenuButton
                  size="lg"
                  aria-label="Navigation options"
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant={"ghost"}
                ></MenuButton>
                <MenuList alignItems={"center"}>
                  <NextLink href="/">
                    <MenuItem>Home</MenuItem>
                  </NextLink>
                  <NextLink href="/project">
                    <MenuItem>About</MenuItem>
                  </NextLink>
                  <NextLink href="/start">
                    <MenuItem>Play</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
