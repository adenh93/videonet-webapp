import React from "react";
import { Container, ToolbarButton } from "./Styles";
import { check, thumb } from "../../../../assets/icons";

interface ToolbarProps {
  watched: boolean;
  liked: boolean;
  onClickWatched: () => void;
  onClickLike: () => void;
  onClickBack: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  watched,
  liked,
  onClickWatched,
  onClickLike,
  onClickBack,
}) => (
  <Container>
    <ToolbarButton
      icon={watched ? check : undefined}
      color={watched ? "primary" : "secondary"}
      onClick={onClickWatched}
      outline
    >
      Watched
    </ToolbarButton>
    <ToolbarButton
      icon={liked ? thumb : undefined}
      onClick={onClickLike}
      color={liked ? "success" : "secondary"}
      outline
    >
      {liked ? "Liked" : "Like"}
    </ToolbarButton>
    <ToolbarButton onClick={onClickBack} color="secondary" outline>
      Back
    </ToolbarButton>
  </Container>
);

export default Toolbar;
