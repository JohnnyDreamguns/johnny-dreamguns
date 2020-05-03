import React from "react"
import styled from "styled-components"
import Nav from "./nav"

const Header = props => (
  <Wrapper>
    <InnerWrapper>
      <H1>
        <span>Johnny</span> <span>Dreamguns</span>
      </H1>
      <BigDG />
      <LittleDG />
      <Nav location={props.location} contentType={props.contentType} />
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #151b22;
  width: 100%;
  min-height: 200px;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url(/images/spacebg.jpg) no-repeat;
  min-height: 200px;
  min-width: 300px;
  background-position: top center;
  position: relative;
  max-width: 1200px;

  @media (min-width: 580px) and (min-height: 500px) {
    min-height: 530px;
  }
`

const H1 = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

  span:nth-child(1) {
    color: #fff;
    font-size: 30px;

    @media (min-width: 580px) and (min-height: 500px) {
      font-size: 34px;
    }
  }

  span:nth-child(2) {
    color: #ff2d4b;
    font-size: 40px;

    @media (min-width: 580px) and (min-height: 500px) {
      font-size: 60px;
    }
  }
`

const BigDG = styled.div`
  background: url(/images/bigdg.png) no-repeat;
  width: 543px;
  height: 452px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;

  @media (min-width: 1100px) {
    display: block;
  }
`

const LittleDG = styled.div`
  position: absolute;
  background: url(/images/littledg-small.png) no-repeat;
  width: 242px;
  height: 285px;
  background-size: 66%;
  right: 0;
  top: 10px;
  background-position: right top;

  @media (min-width: 580px) and (min-height: 500px) {
    background: url(/images/littledg.png) no-repeat;
    width: 566px;
    height: 452px;
    background-size: initial;
    right: initial;
    top: initial;
    background-position: initial;
  }

  @media (min-width: 1100px) {
    display: block;
    bottom: 0;
    right: 0;
  }
`

export default Header
