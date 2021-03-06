import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { PageHeading } from "../src/components/PageHeading.tsx";

export default function MyTeams() {
  return (
    <Flex>
      <Head>
        <title>My Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading
        heading="My teams"
        subheading="All of your saved teams can be found here."
      />
    </Flex>
  );
}
