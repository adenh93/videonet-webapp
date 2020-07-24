import styled from "styled-components";

const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 2.5rem;
`;

export default Body;
