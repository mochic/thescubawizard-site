import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react"

import { Link } from "gatsby"
import { navigate } from "gatsby-link"

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

import Image from "../components/ContactImage"

import devices from "../devices"
import shared from "../shared" // shared config store for building our animations, todo use the "gatsby way"

import TitleSVG from "../components/TitleSVG"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const ADiv = styled(animated.div)``

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

const H2 = styled(animated.h2)`
  font-family: gilda display;
  grid-area: heading;
  color: #506a61;
  font-size: 450%;
  margin: 0;
  padding: 0;
`

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
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: -146px;
  height: 100%;
  width: 100%;
  z-index: -2;

  @media ${devices.tablet} {
    left: 0px;
  }
`

const Drift = keyframes`
    from {
        transform: translate3d(40px,0,0);
    }

    to {
        transform: translate3d(0px,0,0);
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
  right: -140px;
  color: #ffe9c9;
  animation: ${Drift} 55s ease-out;
  animation-fill-mode: forwards;
`

const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 200px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;
  width: 100%;
  word-break: break-all;

  position: absolute;
  top: 0px;
  right: -140px;

  text-align: right;

  z-index: -1;
  animation: ${Drift} 55s ease-out;
  animation-fill-mode: forwards;

  @media ${devices.tablet} {
    width: none;
  }

  @media ${devices.laptop} {
    font-size: 260px;
  }
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
    fields: [emailAddress, phoneNumber],
  } = useContext(SchedulingContext)
  console.log("%cscheduling context: ", "color: blue", {
    emailAddress,
    phoneNumber,
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
    from: { opacity: 1 },
    to: {
      opacity: 1,
    },
  })

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
    from: { svgOpacity: 0, svgBlurRadius: 10 },
    to: { svgOpacity: 1, svgBlurRadius: 0 },
    config: { ...config.slow, duration: 2000 },
  })

  const headerSpringRef = useRef()

  const headerProps = useSpring({
    ref: headerSpringRef,
    from: { opacity: 0 },
    to: { opacity: 0.2 },
  })

  const navBarSpringRef = useRef()
  const navBarProps = useSpring({
    ref: navBarSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  useChain(
    [
      imageSpringRef,
      gradientSpringRef,
      headerSpringRef,
      contentSpringRef,
      navBarSpringRef,
    ],
    [0.2, 0.2, 0.2, 0.2, 0.4],
    shared.scheduleAnimationDuration
  )

  return (
    <>
      <NavBar
        className="navbar-schedule"
        style={{ background: "none", ...navBarProps }}
        gradientProps={{ style: { background: `none` } }}
      ></NavBar>
      <Containr>
        {/* we need separated from contentTainr to be sibilings for grid layout to work!*/}
        <SchedulerTainr
          style={{ backgroundFilter: `blur(20px)`, ...contentProps }}
        >
          <Scheduler />
        </SchedulerTainr>
        <ImageTainr style={{ ...imageProps }}>
          <Image
            // containrProps={{ style: { maxHeight: `800px`, maxWidth: `1180px` } }}
            // gradientProps={{
            //   style: {
            //     // height: `100%`,
            //     // width: `100%`
            //     // maxHeight: `800px`,
            //     // maxWidth: `1180px`,
            //     //   background: `linear-gradient(254.29deg, rgba(46, 144, 111, 0.3) ${gradientProps.lg0percent.interpolate(
            //     //     v => v
            //     //   )}%, #191f1d 75.64%)`,
            //   },
            //   ...gradientProps,
            // }}
            style={{
              height: `100%`,
              width: `100%`,
              minHeight: `800px`,
              minWidth: `1180px`,
              mixBlendMode: `overlay`,
              opacity: 0.2,
            }}
          >
            {/* <AH3 style={headerProps}>schedule</AH3> */}
            <AH2
              style={{
                color: `#fee8c8`,
                // opacity: 0.2,  its a headerProp controlled via spring
                mixBlendMode: `color`,
                ...headerProps,
              }}
            >
              schedule
            </AH2>
          </Image>
        </ImageTainr>
      </Containr>
    </>
  )
}
