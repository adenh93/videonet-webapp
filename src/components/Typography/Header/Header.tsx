import styled from "styled-components";

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-shadow: ${({ theme }) => theme.shadows.med};
  line-height: 7rem;
  letter-spacing: 0.1em;
`;

export default Header;
