import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Content from "../Content";
import "jest-styled-components";

describe("Content component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Content>Test</Content>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
