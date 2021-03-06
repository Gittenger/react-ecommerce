import { createGlobalStyle } from "styled-components";

import device from "./styles.utils";

const { tablet } = device;

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;

  @media ${tablet} {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  font-family: "Open Sans Condensed", sans-serif;
  box-sizing: border-box;
}

`;
