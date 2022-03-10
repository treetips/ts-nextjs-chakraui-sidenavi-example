import { Box, Center, Divider, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";

type Props = {};

export const Footer: FC<Props> = () => {
  const copyrightYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box as="footer">
      <Divider />
      <Center p={2}>
        <Text fontSize="lg">
          Copyright (c) {copyrightYear}. Example Company. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};
