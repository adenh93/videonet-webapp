import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Body from "../Body";
import "jest-styled-components";

describe("Body Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Body>Test</Body>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
