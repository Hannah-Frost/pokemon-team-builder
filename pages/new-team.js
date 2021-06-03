import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { PageHeading } from "../src/components/PageHeading.tsx";

export default function NewTeam() {
  return (
    <Flex>
      <Head>
        <title>New Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading heading="Create a new team" />
    </Flex>
  );
}
