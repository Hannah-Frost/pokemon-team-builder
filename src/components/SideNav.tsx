import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import { DividerLine } from "./DisplayPanel.tsx";
import { useRouter } from "next/router";
import Link from "next/link";

const PokeballDivider = () => (
  <Flex
    minWidth="45vh"
    position="absolute"
    justifyContent="flex-end"
    transform="translateY(-30%)"
    ml={8}
  >
    <Flex p={2} bg="card" rounded="full">
      <Box rounded="full" width={20} height={20}>
        <Image src="/images/quickball.png" />
      </Box>
    </Flex>
  </Flex>
);

const SelectedHighlight = () => (
  <Box
    position="absolute"
    bg="tertiary"
    width="100%"
    p={5}
    zIndex={-1}
    transform="translateY(-10%)translateX(-2%)"
  />
);

const NavItemContainer = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => (
  <Flex
    textTransform="uppercase"
    color="white"
    flexDir="column"
    position="relative"
  >
    <Flex p={8} flexDir="column">
      <Heading size="lg" mb={6}>
        {heading}
      </Heading>
      {children}
    </Flex>
    <DividerLine />
  </Flex>
);

const NavItem = ({ title, href }: { title: string; href: string }) => {
  const isSelected = href === useRouter().pathname;

  return (
    <Flex
      fontWeight={isSelected ? "bold" : "normal"}
      my={isSelected ? 2 : 0}
      fontSize="xl"
      whiteSpace="nowrap"
    >
      {isSelected && <SelectedHighlight />}
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </Flex>
  );
};

export const SideNav = () => {
  return (
    <Flex
      bg="card"
      height="100vh"
      minWidth="45vh"
      flexDir="column"
      position="sticky"
      top={0}
    >
      <NavItemContainer heading="My teams">
        <NavItem title="Create new team" href="/new-team" />
        <NavItem title="View my teams" href="/my-teams" />
      </NavItemContainer>

      <NavItemContainer heading="Other tools">
        <NavItem title="View my teams" href="/my-teams" />
        <NavItem title="Memorise Types" href="/memorise-types" />
        <NavItem title="View my teams" href="/my-teams" />
      </NavItemContainer>
    </Flex>
  );
};
