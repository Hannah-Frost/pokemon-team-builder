import Head from "next/head";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Head>
        <title>Pokemon Team Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Flex>
  );
}
