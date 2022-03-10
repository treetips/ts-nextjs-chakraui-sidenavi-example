import { Box, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Constants } from "../Constants";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidenavi } from "./Sidenavi";

type Props = {};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box mt={Constants.appbar.height}>
      <HStack spacing={0} align="top">
        <Box
          display={{ base: "none", lg: "block" }}
          w={Constants.sidenavi.width}
        >
          <Sidenavi />
        </Box>

        <Box w="100%">
          <VStack spacing={0}>
            <Header />

            <Box w="100%">
              <Box as="article" p={5} borderWidth="2px" shadow="xl">
                {children}
              </Box>
            </Box>

            <Box w="100%">
              <Footer />
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};
