import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { CustomTheme } from "../helpers/Theme";
import CSSReset from "@chakra-ui/css-reset";

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={CustomTheme}>
    <CSSReset />
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
 
}

export default MyApp
