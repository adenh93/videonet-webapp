import React, { ReactElement } from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../theme";

export const renderWithTheme = (component: ReactElement) =>
  renderer.create(
    <ThemeProvider theme={theme}>
      <Router>{component}</Router>
    </ThemeProvider>
  );

export const rtlWithTheme = (component: ReactElement) =>
  render(
    <ThemeProvider theme={theme}>
      <Router>{component}</Router>
    </ThemeProvider>
  );
