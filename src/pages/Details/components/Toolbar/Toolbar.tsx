import React from "react";
import { Container, ToolbarButton } from "./Styles";
import { check, thumb } from "../../../../assets/icons";

interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => (
  <Container>
    <ToolbarButton icon={check} outline>
      Watched
    </ToolbarButton>
    <ToolbarButton icon={thumb} color="success" outline>
      Liked
    </ToolbarButton>
    <ToolbarButton color="secondary" outline>
      Back
    </ToolbarButton>
  </Container>
);

export default Toolbar;
