import React from "react"
import styled from "styled-components"

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
)

export const StyledParagraph = styled.p`
  font-family: "Roboto slab", "sans-serif";
  font-size: 20px;
  line-height: 30px;
  color: #616161;
  max-width: 700px;
`

export default Paragraph
