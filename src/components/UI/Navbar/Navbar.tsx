import React from "react";
import { createBrowserHistory } from "history";
import {
  Nav,
  Brand,
  NavItemList,
  NavItem,
  ProfileImage,
  NavRightContainer,
} from "./Styles";
import { NavRoute } from "../../../types/interfaces";

export interface NavbarProps {
  brandImg?: string;
  routes?: NavRoute[];
  profileImg?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandImg, routes, profileImg }) => {
  const history = createBrowserHistory();

  const onClickBrand = () => {
    history.push("/");
  };

  const onClickNavItem = (route: string) => {
    history.push(route);
  };

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

export default Navbar;
