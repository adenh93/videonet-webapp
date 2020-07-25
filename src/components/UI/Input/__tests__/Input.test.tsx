import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Input from "../Input";
import "jest-styled-components";

describe("Input UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Input>Test</Input>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
