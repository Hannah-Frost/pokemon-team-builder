import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const HeadingUnderline = () => (
  <Box width="100%" borderRadius={6} my={4} height={1} bg="tertiary" />
);

export const PageHeading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) => (
  <Flex flexDir="column" mb={16} color="white">
    <Heading>{heading}</Heading>
    <HeadingUnderline />
    {subheading && <Text>{subheading}</Text>}
  </Flex>
);
