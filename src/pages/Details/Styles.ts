import styled from "styled-components";
import { Content, Background } from "../../components/UI";

interface BackgroundProps {
  image: string;
}

export const DetailsBackground = styled(Background)<BackgroundProps>`
  background-image: linear-gradient(
      to right,
      rgba(34, 34, 34, 0.85),
      rgba(34, 34, 34, 0.85)
    ),
    url(${({ image }) => image});
`;

export const Container = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
`;

export const DetailsContainer = styled.div`
  width: 60%;
  margin-top: 5%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const PosterContainer = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Poster = styled.img`
  width: 31rem;
  height: 46.5rem;
  filter: drop-shadow(${({ theme }) => theme.shadows.dark});
`;
