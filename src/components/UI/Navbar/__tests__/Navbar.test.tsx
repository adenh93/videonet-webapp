import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Navbar from "../Navbar";
import "jest-styled-components";

describe("Navbar Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Navbar>Test</Navbar>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
