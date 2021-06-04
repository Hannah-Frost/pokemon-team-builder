import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../utils/customTheme";

const OptionsItem = ({ title, href }: { title: string; href: string }) => (
  <Flex>
    <Link
      href={href}
      color="white"
      fontSize="lg"
      width="100%"
      p="1"
      mr={4}
      borderBottom={`2px solid ${theme.colors.secondary}`}
      _hover={{ color: "secondary" }}
    >
      <a>{title}</a>
    </Link>
  </Flex>
);

export const OptionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex position="fixed" top={0} right={0} zIndex={99} flexDirection="column">
      <IconButton
        aria-label="Options"
        height={12}
        width={12}
        mt={4}
        mr={4}
        mb={2}
        rounded="full"
        bg="tertiary"
        _hover={{ bg: "secondary" }}
        _active={{ bg: "primary" }}
        onClick={() => setIsOpen(!isOpen)}
        icon={
          isOpen ? (
            <CloseIcon color="white" fontSize={16} />
          ) : (
            <HamburgerIcon color="white" fontSize={24} />
          )
        }
      />
      {isOpen && (
        <Flex flexDirection="column">
          <OptionsItem href="placeholder" title="Logout" />
          <OptionsItem href="placeholder" title="Edit Profile" />
        </Flex>
      )}
    </Flex>
  );
};
