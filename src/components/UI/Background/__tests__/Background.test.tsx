import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Background from "../Background";
import "jest-styled-components";

describe("Background UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Background>Test</Background>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
