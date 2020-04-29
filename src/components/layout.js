import React from "react"
import Header from "./header"
import styled from "styled-components"

const Layout = props => {
  const { children } = props

  return (
    <Wrapper>
      <Header location={props.location} contentType={props.contentType} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: "40px 30px 30px 30px",
          maxWidth: `1000px`,
        }}
      >
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
