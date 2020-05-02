import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = props => (
  <Wrapper>
    <ul>
      <li>
        <StyledLink
          to={`/`}
          active={
            props.location.pathname === "/" || props.contentType === "news"
              ? 1
              : 0
          }
        >
          News
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to={`/about`}
          active={props.location.pathname === "/about" ? 1 : 0}
        >
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to={`/songs`}
          active={
            props.location.pathname === "/songs" || props.contentType === "song"
              ? 1
              : 0
          }
        >
          Songs
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to={`/shop`}
          active={props.location.pathname === "/shop" ? 1 : 0}
        >
          Shop
        </StyledLink>
      </li>
    </ul>
  </Wrapper>
)

const StyledLink = styled(Link)`
  color: ${props => (props.active ? "#ff2d4b" : "#fff")};
  text-transform: uppercase;
  text-decoration: none;
`

const Wrapper = styled.nav`
  z-index: 10;
  position: absolute;
  bottom: 10px;

  @media (min-width: 580px) and (min-height: 500px) {
    bottom: 20px;
  }

  ul {
    display: flex;
    margin: 0;
    list-style: none;
    color: #fff;
  }

  li {
    margin: 0;
    font-family: "Roboto Slab", serif;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

    @media (min-width: 580px) and (min-height: 500px) {
      font-size: 23px;
    }
  }

  li:after {
    content: "|";
    margin: 0 10px;

    @media (min-width: 450px) {
      margin: 0 20px;
    }
  }

  li:last-child:after {
    content: unset;
  }
`

export default Nav
