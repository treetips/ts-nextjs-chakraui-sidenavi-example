import { Box, Flex, Link, Text, theme } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const SidenaviItem: FC<Props> = ({ title, href, icon }) => {
  return (
    <Link href={href} as={NextLink}>
      <Box
        p={3}
        shadow="lg"
        _hover={{
          bg: theme.colors.orange[200],
          color: theme.colors.orange[800],
        }}
        cursor="pointer"
      >
        <Flex w="100%" align="center">
          <Box mr={3}>{icon}</Box>
          <Box>
            <Text variant="h2">{title}</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};
