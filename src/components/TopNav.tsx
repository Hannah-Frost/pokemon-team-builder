import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavItem = ({ title, href }: { title: string; href: string }) => {
  const isSelected = href === useRouter().pathname;

  return (
    <Text
      color={isSelected ? "primary" : "white"}
      fontWeight={isSelected ? "bold" : "normal"}
      textTransform="uppercase"
      _hover={{
        color: "primary",
      }}
    >
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </Text>
  );
};


export const TopNav = () => {
  return (
    <Flex flexDir="column">
      <Flex
        bg="primary"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        height="10vh"
      >
        <Heading color="white" mr={8}>
          POKEMON TEAM BUILDER
        </Heading>
      </Flex>
      <Flex flexDir="row">
        <Flex
          bg="card"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          height="5vh"
        >
          <Flex justifyContent="space-around" width="80%">
            <NavItem title="Build new team" href="/new-team" />
            <NavItem title="View all teams" href="/all-teams" />
            <NavItem title="Memorise Types" href="/memorise-types" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
