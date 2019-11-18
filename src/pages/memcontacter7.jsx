import React, { useRef, useState, useContext } from "react"

import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTrail,
  useTransition,
  config,
} from "react-spring"

import Scheduler from "../components/Scheduler"

import SchedulingProvider from "../providers/SchedulingProvider"

import SchedulingContext from "../contexts/scheduling.context"

import Image from "../components/ContactImage5"

import devices from "../devices"

import TitleSVG from "../components/TitleSVG"
import { statement } from "@babel/template"

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

// const P = styled(animated.p)`
//   font-family: open sans;
//   color: white;
//   margin: 0;
//   border: 0;
//   margin-top: 56px;
//   margin-bottom: 5%;
//   font-size: 26px;
//   line-height: 110.3%;
//   font-weight: normal;
// `

const P = styled(animated.p)`
  font-family: open sans;
  color: #cecece;
  margin: 0;
  border: 0;
  margin-bottom: 5%;
  font-size: 22px;
  line-height: 110.3%;
  font-weight: 300;
`

// const Statement = styled(animated.div)`
//   grid-area: statement;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   font-size: 160%;
//   max-width: 60%;
//   min-width: 250px;
//   width: 250px;

//   margin-top: 60px;

//   @media ${devices.laptop} {
//     flex-direction: row;
//   }
// `

const StatementTainr = styled(animated.div)`
  grid-area: statement;
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 60%;
  min-width: 250px;
  width: 250px;

  margin-top: 60px;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`

const Statement = styled(animated.div)`
  position: absolute;
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
    "form";

  grid-template-rows: 1fr 7fr;
  padding: 5% 8% 46% 8%;
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

const DriftRight = keyframes`
    from {
        transform: translate3d(0px,0,0);
    }

    to {
        transform: translate3d(40px,0,0);
    }
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 72px;
  line-height: 164.3%;
  z-index: -1;
  position: absolute;
  top: 0px;
  right: -110px;
  color: #ffe9c9;
  animation: ${DriftRight} 6s ease-out;
  animation-fill-mode: forwards;
`

// needs to be z-index bellow inputs but z-index above rest.
const Curtain = styled(animated.div)`
  height: 100vh;
  width: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: red;
  z-index: 1000;
  opacity: 0;
`

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

  //   const statementSpringRef = useRef()
  //   const statementProps = useSpring({
  //     ref: statementSpringRef,
  //     from: { opacity: 0 },
  //     to: { opacity: 1 },
  //     config: { ...config.stiff, duration: 1000 },
  //   })

  const statements = [
    // props => (
    //   <Statement {...props}>
    //     <P>{`How would you like us to get in contact with you?`}</P>
    //   </Statement>
    // ),
    props => (
      <Statement {...props}>
        <P>{`All we need is a phone number or email address.`}</P>
      </Statement>
    ),
    props => (
      <Statement {...props}>
        <P>{`Great! We'll try to contact you in the next two business days.`}</P>
      </Statement>
    ),
    props => (
      <Statement {...props}>
        <P>{`Great! We'll try.`}</P>
      </Statement>
    ),
  ]

  // this is a dumb-ish way to do it for now...
  const statementIndex = emailAddress || phoneNumber ? 1 : 0
  // const statementTransitionsRef = useRef()

  // we need a persistent store
  //   const schedulingState = useRef(0)

  // const sDiff = {}
  // if (statementIndex === 0) {
  //   sDiff.from = 0
  //   sDiff.enter = 0
  //   sDiff.leave = -100
  // } else if (statementIndex === 1) {
  //   sDiff.from = 100
  //   sDiff.enter = 0
  //   sDiff.leave = -100
  // } else {
  //   console.log("%cunknown statementIndex", "color: green", statementIndex)
  // }

  // const statementTransitions = useTransition(statementIndex, i => i, {
  //   ref: statementTransitionsRef,
  //   from: { opacity: 0, transform: `translate3d(${sDiff.from}px,0,0)` },
  //   enter: { opacity: 1, transform: `translate3d(${sDiff.enter}px,0,0)` },
  //   leave: { opacity: 0, transform: `translate3d(${sDiff.leave}px,0,0)` },
  //   config: { ...config.stiff, duration: 1000 },
  //   delay: statementIndex === 1 ? 1000 : 1000,
  // })

  // we hardcode the shculder transition to be -100px as well to give the illusion of moving the same...
  const unsubmittedStatementSpringRef = useRef()
  const unsubmittedStatementProps = useSpring({
    ref: unsubmittedStatementSpringRef,
    from: { opacity: 0 },
    to: {
      opacity: statementIndex === 0 ? 1 : 0,
      transform: `translate3d(${statementIndex === 0 ? 0 : -100}px,0,0)`,
    },
  })

  const submittedStatementSpringRef = useRef()
  const submittedStatementProps = useSpring({
    ref: submittedStatementSpringRef,
    from: { opacity: 0, transform: `translate3d(100px,0,0)` },
    to: {
      opacity: statementIndex === 1 ? 1 : 0,
      transform: `translate3d(${statementIndex === 1 ? 0 : 100}px,0,0)`,
    },
  })

  // gotta make image thing render children so we can feed them our headers etc...
  const headers = [
    // unscheduled state
    props => <AH3 {...props}>schedule</AH3>,
    // scheduled success
    props => <AH3 {...props}>scheduled</AH3>,
    // scheduled failure
    props => <AH3 {...props}>scheduled</AH3>,
  ]
  const headerIndex = emailAddress || phoneNumber ? 1 : 0
  const headerTransitionsRef = useRef()
  const headerTransitions = useTransition(headerIndex, i => i, {
    ref: headerTransitionsRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  //   const statement = emailAddress || phoneNumber ? statements[1] : statements[0]
  //   const statementTransitionsRef = useRef()
  //   const statementTransitions = useTransition(statement, item => item.key, {
  //     ref: statementTransitionsRef,
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   })

  // useChain(
  //   [
  //     imageSpringRef,
  //     gradientSpringRef,
  //     homeLinkSpringRef,
  //     headerTransitionsRef,
  //     statementTransitionsRef,
  //     contentSpringRef,
  //   ],
  //   [0, 0, 0, 0.3, 0.3, 0.4],
  //   3000
  // )

  useChain(
    [
      imageSpringRef,
      gradientSpringRef,
      homeLinkSpringRef,
      headerTransitionsRef,
      unsubmittedStatementSpringRef,
      submittedStatementSpringRef,
      contentSpringRef,
    ],
    [0, 0, 0, 0.3, 0.3, 0.3, 0.4],
    3000
  )

  // keep it simple for now...maybs just get something pretty that works...thematically...
  return (
    <Containr>
      <OtherNavBar style={homeLinkProps} />
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
        >
          {headerTransitions.map(({ key, item, props }) => {
            const Header = headers[item]
            return <Header key={key} style={props} />
          })}
        </Image>
      </ImageTainr>
      {/* <Curtain className="curtain" /> */}
    </Containr>
  )
}
