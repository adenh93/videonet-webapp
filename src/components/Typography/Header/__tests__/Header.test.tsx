import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Header from "../Header";
import "jest-styled-components";

describe("Header Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Header>Test</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
