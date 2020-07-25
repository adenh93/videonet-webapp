import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import MovieList from "../MovieList";
import "jest-styled-components";

describe("MovieList UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <MovieList movies={[]} onSelectMovie={() => {}}>
        Test
      </MovieList>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
