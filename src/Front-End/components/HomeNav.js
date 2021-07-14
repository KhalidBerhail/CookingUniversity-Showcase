/* 
 *
 *Custom nav bar for the home page
 */

import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logoCookingUni.svg";

//styled component that represents the nav
const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
`;

//styled component for text logo
const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

//styled component for the nav menu
const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

//styled component for list items
const Item = styled.li``;

//styled component for hyperlinks
const Link = styled.a`
  color: #f9a374;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

//styled component for the minimized menu icon
const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;


const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #f9a374;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

//styled component for the Overlay used when width of page is smaller
const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

//styled component for the overlay menu
const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

//stateless component that uses all the styled components above to build the HomeNav
const HomeNav = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        
        <img src={logo} style={{width : "50px"}}/>
        <Menu>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Login
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              SignUp
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="">
              Navitem1
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Navitem2
            </Link>
          </Item>
          <Item>
            <Link target="#" href="">
              Navitem3
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default HomeNav;
