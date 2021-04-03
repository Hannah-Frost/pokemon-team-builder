import { ChakraProvider, Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import theme from "../src/utils/customTheme.js";
import { TopNav } from "../src/components/TopNav.tsx";
import { SideNav } from "../src/components/SideNav.tsx";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem colSpan={5}>
          <TopNav />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <SideNav />
        </GridItem>
        <GridItem colSpan={4} bg="bg">
          <Flex p={12}>
            <Component {...pageProps} />
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
