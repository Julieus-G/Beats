import React from "react";
// import { FaSearch } from "react-icons/fa";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ContainerFragment,
  Logo,
} from "./navbar.styles.js";

function Navbar() {
  return (
    <ContainerFragment>
      <Nav>
        <Logo>
          <NavLink to="/">
            <img alt="logo" />
          </NavLink>
        </Logo>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/tracks" activeStyle>
            Tracks
          </NavLink>
          <NavLink to="/memberships" activeStyle>
            Memberships
          </NavLink>
          <NavLink to="/sound-kits" activeStyle>
            Sound Kits
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/sign-in" activeStyle>
            Sign In
          </NavLink>
        </NavMenu>
      </Nav>
    </ContainerFragment>
  );
}

export default Navbar;
