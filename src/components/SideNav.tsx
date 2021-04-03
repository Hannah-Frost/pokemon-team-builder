import { Flex, Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const PokeballDivider = () => (
  <Flex
    minWidth="50vh"
    position="absolute"
    justifyContent="flex-end"
    transform="translateY(-65%)"
  >
    <Flex p={2} bg="card" rounded="full">
      <Box rounded="full" width={20} height={20}>
        <Image src="/images/quickball.png" />
      </Box>
    </Flex>
  </Flex>
);

export const SideNav = () => {
  return (
    <Flex
      bg="card"
      height="100vh"
    >
      <PokeballDivider />
    </Flex>
  );
};
