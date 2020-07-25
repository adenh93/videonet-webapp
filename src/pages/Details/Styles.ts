import styled from "styled-components";
import { Content } from "../../components/UI";
import Button from "../../components/UI/Button";

interface BackgroundProps {
  image: string;
}

export const Background = styled.div<BackgroundProps>`
  height: calc(100vh - ${({ theme }) => theme.margins.gutter * 2}rem);
  border-radius: 0.3rem;
  background-image: linear-gradient(
      to right,
      rgba(34, 34, 34, 0.85),
      rgba(34, 34, 34, 0.85)
    ),
    url(${({ image }) => image});
  background-size: cover;
  background-position: top;
  position: relative;
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
`;

export const PosterContainer = styled.div``;

export const Poster = styled.img`
  width: 31rem;
  height: 46.5rem;
  filter: drop-shadow(${({ theme }) => theme.shadows.dark});
`;
