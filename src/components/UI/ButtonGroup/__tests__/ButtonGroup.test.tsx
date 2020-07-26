import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import ButtonGroup from "../ButtonGroup";
import "jest-styled-components";

describe("ButtonGroup UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<ButtonGroup>Test</ButtonGroup>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
