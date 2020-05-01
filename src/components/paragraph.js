import React from "react"
import styled from "styled-components"

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
)

export const ParagraphStyles = `
  font-size: 20px;
  line-height: 30px;
  color: #616161;
  max-width: 700px;
 `

const StyledParagraph = styled.p`
  ${ParagraphStyles}
`

export default Paragraph
