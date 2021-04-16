import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { PageHeading } from "../src/components/PageHeading.tsx";
import { TypeEffectivityMemoriser } from "../src/components/TypeEffectivityMemoriser.tsx";

export default function MemoriseTypes() {
  return (
    <Flex flexDir="column">
      <Head>
        <title>Memorise Types</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading
        heading="Memorise Type Effectivity"
        subheading="This tool is useful for familiarising yourself with the resistances / weaknesses of each type - vital knowledge for building and battling a diverse and competitvely viable team."
      />
      <TypeEffectivityMemoriser />
    </Flex>
  );
}
