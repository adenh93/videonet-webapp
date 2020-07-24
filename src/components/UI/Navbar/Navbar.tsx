import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Nav,
  Brand,
  NavItemList,
  NavItem,
  ProfileImage,
  NavRightContainer,
} from "./Styles";
import { NavRoute } from "../../../types/interfaces";

export interface NavbarProps extends RouteComponentProps {
  brandImg?: string;
  routes?: NavRoute[];
  profileImg?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brandImg,
  routes,
  profileImg,
  history,
}) => {
  const onClickBrand = (): void => history.push("/");
  const onClickNavItem = (route: string): void => history.push(route);

  const navItems = routes && (
    <NavItemList>
      {routes.map(({ display, route }) => (
        <NavItem
          key={route}
          active={history.location.pathname === route}
          onClick={() => onClickNavItem(route)}
        >
          {display}
        </NavItem>
      ))}
    </NavItemList>
  );

  return (
    <Nav>
      {brandImg && <Brand src={brandImg} onClick={onClickBrand} />}
      <NavRightContainer>
        {navItems}
        <ProfileImage src={profileImg} />
      </NavRightContainer>
    </Nav>
  );
};

export default withRouter(Navbar);
