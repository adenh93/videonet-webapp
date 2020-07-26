import styled from "styled-components";
import { Button } from "../../../../components/UI";
import {
  StyledButton,
  ButtonIcon,
} from "../../../../components/UI/Button/Styles";

export const ToolbarButton = styled(Button)`
  margin-right: 2rem;
`;

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;

  @media (max-width: 1100px) {
    display: block;
    ${StyledButton} {
      padding-left: 0;
      margin-top: 1rem;
      width: 100%;
    }
    ${ButtonIcon} {
      margin-top: 0.8rem;
    }
  }
`;
