import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Button from "../Button";
import "jest-styled-components";

describe("Button UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Button>Test</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
