  
import theme from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

export const CustomTheme = extendTheme({
    ...theme,
    fontFamily: {
      poppins: "Poppins, sans-serif",
    }, 
    colors: {
      ...theme.colors,
      //overriden styles for colors come here
      //like what is seen below
  
      brand: {
        100: "#3546AC",
        200: "#4CB952"
      },
      grey:{
        100:"#F8F8F8",
        200:"#C9C9C9"
      }
      },
})