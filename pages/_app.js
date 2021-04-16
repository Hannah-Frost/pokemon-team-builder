import { ChakraProvider, Flex, Grid, GridItem } from "@chakra-ui/react";
import theme from "../src/utils/customTheme.js";
import { TopWelcome } from "../src/components/TopWelcome.tsx";
import { SideNav } from "../src/components/SideNav.tsx";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem colSpan={5}>
          <TopWelcome />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <SideNav />
        </GridItem>
        <GridItem colSpan={4} bg="bg">
          <Flex width="100%" py={16} px={32}>
            <Component {...pageProps} />
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
