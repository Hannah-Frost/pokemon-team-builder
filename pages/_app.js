import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../src/utils/customTheme.js";
import { TopNav } from "../src/components/TopNav.tsx";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="bg" height="100vh">
        <TopNav />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
