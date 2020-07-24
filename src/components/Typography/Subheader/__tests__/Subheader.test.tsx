import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Subheader from "../Subheader";
import "jest-styled-components";

describe("Subheader Typography component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Subheader>Test</Subheader>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
