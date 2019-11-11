import React, { useRef, useState, useContext } from "react"

import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { animated, useSpring, useChain, useTrail, config } from "react-spring"

import Scheduler from "../components/Scheduler"

import SchedulingProvider from "../providers/SchedulingProvider"

import SchedulingContext from "../contexts/scheduling.context"

import Image from "../components/ContactImage2"

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

const OtherNavBar = props => {
  return (
    <NavTainr {...props}>
      <HomeLink to="/">the scuba wizard</HomeLink>
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

const SchedulerTainr = styled(animated.div)`
  grid-area: form;
`

const Containr = styled(animated.div)`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  grid-template-areas:
    "nav"
    "statement"
    "form";

  grid-template-rows: 1fr 3.5fr 5.5fr;
  padding: 5% 8% 8% 8%;
`

const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -2;
`

const AH3 = styled(animated.h3)`
  position: absolute;
  font-family: playfair display;
  font-weight: bold;
  font-size: 72px;
  color: #2d2d2d;
  top: 0px;
  right: 0px;
  z-index: -1;
`

const ContentTainr = styled(animated.div)``

export default () => {
  /* simple state for now...fix later
    states
    0: initial
    1: phone
    2: email
    3: finished (no errors)
    4: errors
    */

  //   const [formState, setFormState] = useState(0)
  const {
    submitted: { emailAddress, phoneNumber },
  } = useContext(SchedulingContext)
  console.log("%cscheduling context: ", "color: blue", {
    emailAddress,
    phoneNumber,
  })

  const headerSpringRef = useRef()
  const headerProps = useSpring({
    ref: headerSpringRef,
    from: { opacity: 1, transform: `translate3d(50px,0,0)` },
    to: {
      opacity: emailAddress || phoneNumber ? 0 : 1,
      transform: `translate3d(${emailAddress || phoneNumber ? -70 : -2}px,0,0)`,
    },
    config: {
      ...config.slow,
      duration: emailAddress || phoneNumber ? 1000 : 20000,
    },
    reset: emailAddress || phoneNumber,
  })

  const headerSpring2Ref = useRef()
  const header2Props = useSpring({
    ref: headerSpring2Ref,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const contentSpringRef = useRef()
  const contentProps = useSpring({
    ref: contentSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const imageSpringRef = useRef()
  const imageProps = useSpring({
    ref: imageSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const homeLinkSpringRef = useRef()
  const homeLinkProps = useSpring({
    ref: homeLinkSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
  })

  useChain(
    [headerSpringRef, imageSpringRef, contentSpringRef, homeLinkSpringRef],
    [0.5, 0.55, 0.8, 0.9],
    2000
  )
  // keep it simple for now...maybs just get something pretty that works...thematically...
  return (
    <Containr>
      <OtherNavBar style={homeLinkProps} />
      <AH3 style={headerProps}>schedule</AH3>
      <ContentTainr style={contentProps}>
        <Statement>
          <StatementChunk style={{ alignSelf: `flex-start` }}>
            <P>{`Let's talk about`}</P>
          </StatementChunk>
          <StatementChunk style={{ alignSelf: `flex-end` }}>
            <P style={{ paddingRight: `7px` }}>{`that next `}</P>
            <P style={{ color: `#FFE9C9` }}>dive job.</P>
          </StatementChunk>
        </Statement>
      </ContentTainr>
      {/* we need separated from contentTainr to be sibilings for grid layout to work!*/}
      <SchedulerTainr style={contentProps}>
        <Scheduler />
      </SchedulerTainr>
      <ImageTainr style={imageProps}>
        <Image
          containrProps={{ style: { maxHeight: `800px`, maxWidth: `1180px` } }}
          gradientProps={{ style: { maxHeight: `800px`, maxWidth: `1180px` } }}
          headerProps={{}}
        />
      </ImageTainr>
    </Containr>
  )
}
