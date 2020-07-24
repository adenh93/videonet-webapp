import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Subtitle from "../Subtitle";
import "jest-styled-components";

describe("Subtitle Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Subtitle>Test</Subtitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
