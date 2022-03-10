import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { Constants } from "../Constants";
import { Sidenavi } from "./Sidenavi";

type Props = {};

export const Header: FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      pos="fixed"
      w="100vw"
      top="0"
      left="0"
      flexDir="column"
      align="center"
      shadow="dark-lg"
      zIndex={1000}
      bgColor="orange.300"
    >
      <Flex
        as="nav"
        justify="space-between"
        wrap="wrap"
        padding="1.1rem"
        w="100%"
        h={Constants.appbar.height}
      >
        <IconButton
          display={{ base: "block", lg: "none" }}
          icon={<HamburgerIcon />}
          aria-label="Application Menu"
          onClick={onOpen}
        />

        <Box display={{ base: "none", lg: "block" }}>
          <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
            <HStack>
              <Box>
                <Link href="/" as={NextLink}>
                  <Text>Logo</Text>
                </Link>
              </Box>
            </HStack>
          </Heading>
        </Box>

        <Flex display={{ base: "none", md: "block" }} justifyContent="flex-end">
          <HStack gridGap={5}>
            <Button>
              <Text>Button</Text>
            </Button>
          </HStack>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex={1001}>
          <DrawerBody p={0}>
            <Sidenavi />
          </DrawerBody>

          <DrawerFooter borderWidth={1}>
            <VStack w="100%">
              <Button variant="outline" w="100%" onClick={onClose}>
                Close
              </Button>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
