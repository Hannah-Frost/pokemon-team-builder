import { Flex, Image } from "@chakra-ui/react";
import { OptionsButton } from "./OptionsButton.tsx";

const HeadingContainer = () => (
  <Flex zIndex={99}>
    <Image height={16} m={6} src="/images/welcome_logo.svg" />
    <Image
      position="absolute"
      left={0}
      src="/images/welcome_bg.svg"
      height={64}
    />
    <Image
      position="absolute"
      src="/images/mareep_run_1.png"
      _hover={{ src: "/images/mareep_run_2.png" }}
      top={115}
      left={470}
      height={32}
    />
    <Image
      position="absolute"
      height={10}
      left={320}
      top={215}
      src="/images/welcome_grass.svg"
    />
    <Image
      position="absolute"
      height={8}
      left={140}
      top={198}
      src="/images/welcome_grass.svg"
    />
  </Flex>
);

export const WelcomeBanner = () => {
  return (
    <Flex
      flexDir="column"
      height={64}
      backgroundImage="linear-gradient(#92D0F3, #D3E8F4)"
      alignItems="center"
      width="100%"
    >
      <OptionsButton />
      <Flex width="100%" height="100%" justifyContent="space-between">
        <HeadingContainer />
        <Image position="absolute" right={0} src="/images/dripdown.svg" />
      </Flex>
    </Flex>
  );
};
