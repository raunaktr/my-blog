import React, { Component } from "react";
import Blog from "./containers/Blog/Blog";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

import Head from "./components/Head";
import Layout from "./components/Layout";

const colors = {
  blue: "#66D9EF",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#F8F8F2",
  black: "#272822",
};

const theme = {
  colors: {
    primary: colors.blue,
    text: colors.black,
    background: "rgb(246,247,248)",
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors
  },
  breakpoints: ["850px", "1100px", "64em"],
  fonts: {
    system: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ],
    serif: ["Helvetica", "serif"],
  },
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background-color: ${(props) => props.theme.colors.background};
        margin:0
    }
    strong{
        font-weight: bold;
    }
    hr{
        margin: 2em 0;
        border-color: rgba(0,0,0,0)
    }
`;

const NAV_HEIGHT = 65;
export const DEFAULT_TITLE = "Raunak Tripathi";

class App extends Component {
  render() {
    return (
      // <div className="App">
      <ThemeProvider theme={theme}>
        <Head title={DEFAULT_TITLE} />
        <Layout
          pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
          css={{
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <GlobalStyle />
          <Blog />
        </Layout>
      </ThemeProvider>
      // </div>
    );
  }
}

export default App;
