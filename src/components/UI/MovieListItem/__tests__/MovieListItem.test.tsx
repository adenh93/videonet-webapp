import React from "react";
import { renderWithTheme } from "../../../../utils/renderWithTheme";
import MovieListItem from "../MovieListItem";
import "jest-styled-components";

describe("MovieList UI component", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <MovieListItem
        id={0}
        title="Some Title"
        vote_average={5}
        vote_count={5}
        release_date="2020-10-10"
      >
        Test
      </MovieListItem>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
