import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { PageHeading } from "../src/components/PageHeading.tsx";

export default function OtherTeams() {
  return (
    <Flex>
      <Head>
        <title>Other teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading
        heading="Published teams"
        subheading="All teams shared by other users can be viewed here."
      />
    </Flex>
  );
}
