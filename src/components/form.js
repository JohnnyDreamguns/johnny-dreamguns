import React from "react"
import styled from "styled-components"

const Form = props => (
  <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
)

const StyledForm = styled.form`
  input {
    margin-bottom: 20px;
    padding: 5px 5px;
    border-radius: 4px;
    border: 1px solid #d6d6d6;
    color: #0089ea;
    background: #f9f9f9;
    margin-right: 20px;
  }

  input::placeholder {
    color: grey;
  }

  button {
    background: #0089e5;
    color: #fff;
    border: 0;
    border-radius: 6px;
    padding: 6px 30px;
  }

  @media (min-width: 820px) {
    text-align: right;

    input {
      width: 100%;
      margin-right: 0;
    }
  }
`

export default Form
