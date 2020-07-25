import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import SearchInput from "../SearchInput";
import "jest-styled-components";

describe("SearchInput UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <SearchInput onSearch={() => {}}>Test</SearchInput>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
