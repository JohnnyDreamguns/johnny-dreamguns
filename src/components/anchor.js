import React from "react"
import styled from "styled-components"

const Anchor = props => <Element {...props}>{props.children}</Element>

const Element = styled.a`
  color: #d68400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default Anchor
