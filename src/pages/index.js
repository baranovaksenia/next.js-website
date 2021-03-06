import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import Layout from "components/layout";

export default function IndexPage(props) {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}
