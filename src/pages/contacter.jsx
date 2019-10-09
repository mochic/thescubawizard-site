import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import { animated } from "react-spring"

import SchedulerAll from "../components/SchedulerAll"

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
  width: 100vw;
  overflow-x: hidden;
  padding: 5% 8% 8% 8%;
  background: #191f1d;
`

export default () => {
  return (
    <SchedulingProvider>
      <Containr>
        <SchedulerAll />
      </Containr>
    </SchedulingProvider>
  )
}