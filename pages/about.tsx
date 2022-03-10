import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Layout } from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Text as="h1" fontSize="6xl">
        About
      </Text>
    </Layout>
  );
};

export default Home;
