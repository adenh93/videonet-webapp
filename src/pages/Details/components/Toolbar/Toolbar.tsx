import React from "react";
import { Container, ToolbarButton } from "./Styles";
import { check, thumb } from "../../../../assets/icons";

interface ToolbarProps {
  onClickWatched: () => void;
  onClickLike: () => void;
  onClickBack: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onClickWatched,
  onClickLike,
  onClickBack,
}) => (
  <Container>
    <ToolbarButton icon={check} onClick={onClickWatched} outline>
      Watched
    </ToolbarButton>
    <ToolbarButton icon={thumb} onClick={onClickLike} color="success" outline>
      Liked
    </ToolbarButton>
    <ToolbarButton onClick={onClickBack} color="secondary" outline>
      Back
    </ToolbarButton>
  </Container>
);

export default Toolbar;
