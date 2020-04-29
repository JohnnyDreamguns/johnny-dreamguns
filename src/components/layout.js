import React from "react"
import Header from "./header"
import styled from "styled-components"

const Layout = props => {
  const { children } = props

  // const header = (
  //   <h1
  //     style={{
  //       ...scale(1.5),
  //       marginBottom: rhythm(1.5),
  //       marginTop: 0,
  //     }}
  //   >
  //     <Link
  //       style={{
  //         boxShadow: `none`,
  //         textDecoration: `none`,
  //         color: `inherit`,
  //       }}
  //       to={`/`}
  //     >
  //       {title}
  //     </Link>
  //   </h1>
  // )

  return (
    <Wrapper>
      {/* <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      > */}
      <Header />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `1000px`,
        }}
      >
        <main>{children}</main>
      </div>
      {/* </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
