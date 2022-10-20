import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';


export const ContainerFragment = styled(React.Fragment)``;
export const Nav = styled.nav`
  background: rgba(255,255,255,255);
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  color: rgba(0,0,0,255);
  background: rgba(255,255,255,255);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const Logo = styled.span`
  margin-right: auto;
  background: rgba(255,255,255,255);
  color: black;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: rgba(255,255,255,255);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;