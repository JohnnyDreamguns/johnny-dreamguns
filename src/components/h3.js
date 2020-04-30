import React from "react"
import styled from "styled-components"

const H3 = props => <Element>{props.children}</Element>

const Element = styled.h3`
  font-family: "Roboto slab", "sans-serif";
  font-size: 23px;
  font-weight: 400;
  color: #008be2;
  margin-bottom: 10px;

  a {
    color: #d68400;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default H3
