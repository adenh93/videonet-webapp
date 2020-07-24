import React, { ReactElement } from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

export const renderWithTheme = (component: ReactElement) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const rtlWithTheme = (component: ReactElement) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
