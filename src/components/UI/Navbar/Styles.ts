import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  display: inline-block;
  width: calc(100% - ${({ theme }) => theme.margins.gutter * 2 + 2}rem);
  z-index: 3;
  top: 2rem;
  left: 2rem;
`;

export const Brand = styled.img`
  cursor: pointer;
  width: 21.5rem;
  height: 6rem;
`;

export const NavRightContainer = styled.div`
  float: right;
`;

export const NavItemList = styled.ul`
  display: inline-block;
  vertical-align: top;
  transform: translateY(60%);
  list-style: none;
`;

interface NavItemProps {
  active: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  font-size: ${({ theme }) => theme.fontSize.navItem};
  cursor: pointer;
  letter-spacing: 0.03em;
  display: inline;
  padding: 0.5rem 1.3rem;
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.palette.text.main}` : "none"};
  margin-right: 6rem;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.palette.text.main};
  }
`;

export const ProfileImage = styled.img`
  border-radius: 20rem;
  width: 6rem;
`;
