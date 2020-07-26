import React from "react";
import ButtonGroup from "../../../../components/UI/ButtonGroup";
import { Button } from "../../../../components/UI";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onClickPrev,
  onClickNext,
}) => (
  <ButtonGroup>
    <Button
      disabled={page === 1}
      color="secondary"
      onClick={onClickPrev}
      outline
    >
      Previous
    </Button>
    <Button disabled={page === totalPages} onClick={onClickNext} outline>
      Next
    </Button>
  </ButtonGroup>
);

export default Pagination;
