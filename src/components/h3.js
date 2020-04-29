import React from "react"
import styled from "styled-components"

const H3 = props => <Element>{props.children}</Element>

const Element = styled.h3`
  font-family: "Roboto slab", "sans-serif";
  font-size: 30px;
  font-weight: 400;
  color: #000000;
`

export default H3
