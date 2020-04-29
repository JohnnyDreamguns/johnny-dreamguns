import React from "react"
import styled from "styled-components"

const H2 = props => <Element>{props.children}</Element>

const Element = styled.h2`
  font-family: "Roboto slab", "sans-serif";
  font-size: 30px;
  font-weight: 400;
  color: #000000;
`

export default H2
