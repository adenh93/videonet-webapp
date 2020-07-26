import React from "react";
import { PaginatedResults } from "../../../../graphql/types";
import { Subheader, Subtitle } from "../../../../components/Typography";
import { Section } from "../../../../components/UI";
import { formatNumber } from "../../../../utils/number";

export interface ResultsCount {
  query: string;
  data: PaginatedResults;
}

const ResultsCount: React.FC<ResultsCount> = ({ query, data }) => {
  const resultsPerPage = 20;

  const { page, total_results, results } = data;
  const count = results.length;
  const last = count < resultsPerPage ? total_results : resultsPerPage * page;
  const first = resultsPerPage * (page - 1) + 1;

  return (
    <>
      <Section mb={5}>
        <Subheader>
          {count
            ? query
              ? `Showing results for "${query}":`
              : "Discovered for you:"
            : `No results found for "${query}"`}
        </Subheader>
      </Section>
      {count ? (
        <Subtitle>
          Showing {formatNumber(first)} - {formatNumber(last)} of{" "}
          {formatNumber(total_results)}{" "}
        </Subtitle>
      ) : null}
    </>
  );
};

export default ResultsCount;
