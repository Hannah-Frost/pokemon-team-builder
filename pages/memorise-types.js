import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { TypeEffectivityMemoriser } from "../src/components/TypeEffectivityMemoriser.tsx";

export default function MemoriseTypes() {
  return (
    <Flex>
      <Head>
        <title>Memorise Types</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TypeEffectivityMemoriser />
    </Flex>
  );
}
