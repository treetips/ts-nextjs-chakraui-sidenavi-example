import { Box, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { MdOutlineHome } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { SidenaviItem } from "./SidenaviItem";

type Props = {};

export const Sidenavi: FC<Props> = () => {
  return (
    <VStack>
      <Box w="100%">
        <Box p={4} bgColor="orange.200" fontWeight="bold" shadow="lg">
          Group 1
        </Box>

        <SidenaviItem title="Home" href="/" icon={<MdOutlineHome />} />
        <SidenaviItem title="About" href="/about" icon={<VscQuestion />} />

        <Box p={4} bgColor="orange.200" fontWeight="bold" shadow="lg">
          Group 2
        </Box>

        <SidenaviItem title="Home" href="/" icon={<MdOutlineHome />} />
        <SidenaviItem title="About" href="/about" icon={<VscQuestion />} />
      </Box>
    </VStack>
  );
};
