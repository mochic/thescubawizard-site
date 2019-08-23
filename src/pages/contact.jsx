import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import { animated } from "react-spring"

import Scheduler from "../components/Scheduler"

import SchedulingProvider from "../providers/SchedulingProvider"

import devices from "../devices"

const NavTainr = styled(animated.div)`
  grid-area: nav;
`

const HomeLink = styled(Link)`
  color: #ffe9c9;
  font-family: inconsolata;
  font-weight: 900;
  text-decoration: none;

  &:focus {
    color: #ffeed6;
  }
`

const NavBar = ({ linkProps, tainrProps }) => {
  return (
    <NavTainr style={tainrProps}>
      <HomeLink to="/" style={linkProps}>
        the scuba wizard
      </HomeLink>
    </NavTainr>
  )
}

const H2 = styled(animated.h2)`
  font-family: gilda display;
  grid-area: heading;
  color: #506a61;
  font-size: 450%;
  margin: 0;
  padding: 0;
`

const P = styled(animated.p)`
  font-family: gilda display;
  color: white;
  margin: 0;
  border: 0;
  margin-bottom: 5%;
`

const Statement = styled(animated.div)`
  grid-area: statement;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 160%;
  font-style: italic;
  margin-left: 5%;
  max-width: 60%;
  min-width: 250px;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`

const StatementChunk = styled(animated.div)`
  display: flex;
`

const Containr = styled(animated.div)`
  display: grid;
  width: 100vw;
  box-sizing: border-box;

  grid-template-areas:
    "nav"
    "heading"
    "statement"
    "form";

  grid-template-rows: 1fr 2fr 2fr 5fr;

  padding: 5% 8% 8% 8%;
  background: #191f1d;
`

export default () => {
  return (
    <Containr>
      <NavBar />
      <H2 style={{ paddingTop: `6%`, paddingBottom: `13%` }}>contact</H2>
      <Statement>
        <StatementChunk style={{ alignSelf: `flex-start` }}>
          <P>{`Let's talk about`}</P>
        </StatementChunk>
        <StatementChunk style={{ alignSelf: `flex-end` }}>
          <P style={{ paddingRight: `7px` }}>{`that next `}</P>
          <P style={{ color: `#FFE9C9` }}>dive job.</P>
        </StatementChunk>
      </Statement>
      <SchedulingProvider>
        <Scheduler />
      </SchedulingProvider>
    </Containr>
  )
}
