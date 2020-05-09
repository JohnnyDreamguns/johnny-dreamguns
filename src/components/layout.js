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
        {props.location.pathname.indexOf("mailing-list") === -1 && (
          <StyledSideBar>
            <MailingList />
          </StyledSideBar>
        )}
      </FlexContainer>
    </Wrapper>
  )
}

const MainContent = styled.div`
  padding: 40px 30px 30px 30px;
  max-width: 800px;
`

const StyledSideBar = styled(SideBar)`
  padding: 30px 30px 30px 30px;
  background: #fff;

  h3 {
    font-size: 18px;
    color: #000;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (min-width: 820px) {
    max-width: 300px;
    margin-top: 40px;
    margin-right: 30px;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f1f1f1;
`

const FlexContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

  @media (min-width: 820px) {
    display: flex;
  }
`

export default Layout
