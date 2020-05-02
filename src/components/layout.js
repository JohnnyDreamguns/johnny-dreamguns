import React from "react"
import styled from "styled-components"
import Header from "./header"
import SideBar from "./sidebar"
import MailingList from "./mailing-list"

const Layout = props => {
  const { children } = props

  return (
    <Wrapper>
      <Header location={props.location} contentType={props.contentType} />
      <FlexContainer>
        <MainContent>
          <main>{children}</main>
        </MainContent>
        <StyledSideBar>
          <MailingList />
        </StyledSideBar>
      </FlexContainer>
    </Wrapper>
  )
}

const MainContent = styled.div`
  padding: 40px 30px 30px 30px;
  max-width: 800px;
`

const StyledSideBar = styled(SideBar)`
  margin-top: 40px;
  margin-right: 40px;
  padding: 30px 30px 30px 30px;
  background: #fff;
  max-width: 300px;

  h3 {
    font-size: 18px;
    color: #000;
  }

  p {
    font-size: 18px;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f1f1f1;
`

const FlexContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`

export default Layout
