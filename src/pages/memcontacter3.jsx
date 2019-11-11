import React, { useRef, useState, useContext } from "react"

import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { animated, useSpring, useChain, useTrail, config } from "react-spring"

import Scheduler from "../components/Scheduler"

import SchedulingProvider from "../providers/SchedulingProvider"

import SchedulingContext from "../contexts/scheduling.context"

import Image from "../components/ContactImage4"

import devices from "../devices"

import TitleSVG from "../components/TitleSVG"

const NavTainr = styled(animated.div)`
  grid-area: nav;
  width: 100%;
  text-align: center;
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

const TitleTainr = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
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
      <TitleSVG />
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
  font-family: playfair display;
  color: white;
  margin: 0;
  border: 0;
  margin-bottom: 5%;
  font-size: 36px;
  line-height: 110.3%;
  font-weight: normal;
`

const Statement = styled(animated.div)`
  grid-area: statement;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 160%;
  max-width: 60%;
  min-width: 250px;
  width: 250px;

  margin-top: 60px;

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
  left: -146px;
  height: 100%;
  width: 100%;
  z-index: -2;
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

  //   const headerSpringRef = useRef()
  //   const headerProps = useSpring({
  //     ref: headerSpringRef,
  //     from: { opacity: 1, transform: `translate3d(50px,0,0)` },
  //     to: {
  //       opacity: emailAddress || phoneNumber ? 0 : 1,
  //       transform: `translate3d(${emailAddress || phoneNumber ? -70 : -2}px,0,0)`,
  //     },
  //     config: {
  //       ...config.slow,
  //       duration: emailAddress || phoneNumber ? 1000 : 20000,
  //     },
  //     reset: emailAddress || phoneNumber,
  //   })

  //   const headerSpringRef = useRef()
  //   const headerProps = useSpring({
  //     ref: headerSpringRef,
  //     from: { opacity: 1, transform: `translate3d(0px,0,0)` },
  //     to: {
  //       opacity: emailAddress || phoneNumber ? 0 : 1,
  //       //   transform: `translate3d(${emailAddress || phoneNumber ? -70 : -2}px,0,0)`,
  //       transform: `translate3d(${100}px,0,0)`,
  //     },
  //     config: {
  //       ...config.slow,
  //       duration: emailAddress || phoneNumber ? 1000 : 200000,
  //     },
  //     reset: emailAddress || phoneNumber,
  //   })

  const headerSpringRef = useRef()
  const headerProps = useSpring({
    ref: headerSpringRef,
    from: { opacity: 0.5 },
    to: {
      opacity: emailAddress || phoneNumber ? 0 : 1,
    },
    config: {
      ...config.slow,
      duration: emailAddress || phoneNumber ? 1000 : 2000,
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

  //-1096.03 to 37.97
  const imageSpringRef = useRef()
  const imageProps = useSpring({
    ref: imageSpringRef,
    from: { opacity: 1 },
    to: { opacity: 1 },
  })

  //-1096.03 to 37.97
  //   const gradientSpringRef = useRef()
  //   const gradientProps = useSpring({
  //     ref: gradientSpringRef,
  //     from: { lg0percent: -1096.03 },
  //     to: { lg0Percent: 37.97 },
  //     config: { ...config.wobbly, duration: 2000 },
  //   })

  const gradientSpringRef = useRef()
  const gradientProps = useSpring({
    ref: gradientSpringRef,
    from: { lg0percent: -1096.03 },
    to: { lg0percent: 37.97 },
    config: { ...config.molasses, duration: 1000 },
  })

  const homeLinkSpringRef = useRef()
  const homeLinkProps = useSpring({
    ref: homeLinkSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.slow, duration: 2000 },
  })

  //   const statementSpringRef = useRef()
  //   const statementProps = useSpring({
  //     ref: statementSpringRef,
  //     from: { opacity: 0, transform: `translate3d(20px,0,0)` },
  //     to: { opacity: 1, transform: `translate3d(0px,0,0)` },
  //     config: { ...config.slow, duration: 1000 },
  //   })

  const statementSpringRef = useRef()
  const statementProps = useSpring({
    ref: statementSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.stiff, duration: 1000 },
  })

  //   useChain(
  //     [
  //       headerSpringRef,
  //       imageSpringRef,
  //       statementSpringRef,
  //       contentSpringRef,
  //       homeLinkSpringRef,
  //     ],
  //     [0.5, 0.55, 0.6, 0.8, 0.9],
  //     2000
  //   )
  useChain(
    [
      imageSpringRef,
      gradientSpringRef,
      homeLinkSpringRef,
      headerSpringRef,
      statementSpringRef,
      contentSpringRef,
    ],
    [0, 0, 0, 0.3, 0.3, 0.4],
    3000
  )
  // keep it simple for now...maybs just get something pretty that works...thematically...
  return (
    <Containr>
      <OtherNavBar style={homeLinkProps} />
      <ContentTainr>
        <Statement style={statementProps}>
          <StatementChunk>
            <P>{`How would you like us to get in contact with you?`}</P>
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
          gradientProps={{
            style: {
              maxHeight: `800px`,
              maxWidth: `1180px`,
              //   background: `linear-gradient(254.29deg, rgba(46, 144, 111, 0.3) ${gradientProps.lg0percent.interpolate(
              //     v => v
              //   )}%, #191f1d 75.64%)`,
            },
            ...gradientProps,
          }}
          headerProps={{ style: headerProps }}
        />
      </ImageTainr>
    </Containr>
  )
}
