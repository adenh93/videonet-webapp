import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Title from "../Title";
import "jest-styled-components";

describe("Title Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Title>Test</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
