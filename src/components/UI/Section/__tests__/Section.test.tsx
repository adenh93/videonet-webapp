import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import Section from "../Section";
import "jest-styled-components";

describe("Section UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Section mt={5} mb={5}>
        Test
      </Section>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
