import React, { useRef, useState, useContext } from "react"

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

// const NavTainr = styled(animated.div)`
//   grid-area: nav;
//   width: 100%;
//   text-align: center;
// `

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

// const NavBar = ({ linkProps, tainrProps }) => {
//   return (
//     <NavTainr style={tainrProps}>
//       <HomeLink to="/" style={linkProps}>
//         the scuba wizard
//       </HomeLink>
//     </NavTainr>
//   )
// }

// const OtherNavBar = props => {
//   return (
//     <NavTainr {...props}>
//       <TitleSVG />
//     </NavTainr>
//   )
// }

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

// const Containr = styled(animated.div)`
//   display: grid;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
//   box-sizing: border-box;
//   grid-template-areas:
//     "nav"
//     "form";

//   grid-template-rows: 1fr 7fr;
//   padding: 5% 8% 46% 8%;
// `

const Containr = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: -146px;
  height: 100%;
  width: 100%;
  z-index: -2;
`

// const ContentTainr = styled(animated.div)``

// const DriftRight = keyframes`
//     from {
//         transform: translate3d(-60px,0,0);
//     }

//     to {
//         transform: translate3d(0px,0,0);
//     }
// `

// const AH3 = styled(animated.h3)`
//   font-family: playfair display;
//   font-weight: bold;
//   font-size: 72px;
//   line-height: 164.3%;
//   z-index: -1;
//   position: absolute;
//   top: 0px;
//   right: -166px;
//   color: #ffe9c9;
//   animation: ${DriftRight} 60s ease-out;
//   animation-fill-mode: forwards;
// `

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

// needs to be z-index bellow inputs but z-index above rest.
// const Curtain = styled(animated.div)`
//   height: 100vh;
//   width: 100vh;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   background: red;
//   z-index: 1000;
//   opacity: 0;
// `

// position absolute for ios scrolling and other reasons...:/....
// const NavTainr = styled(animated.div)`
//   position: absolute;
//   z-index: 1000;
//   width: 100%;
//   text-align: center;
//   top: 18px;
// `

// need animated for react-spring values!
// TODO maybs make it an animated svg
// const SVGTainr = styled(animated.div)``

// own fade in animations with spring built in...override with external props?
// const NavBar = ({ handleClick, svgProps, ...rest }) => {
//   console.log("%cnavbar with: ", "color: red", svgProps, rest)

//   const _handleClick = e => {
//     e.preventDefault()
//     handleClick()
//   }

//   return (
//     <NavTainr {...rest}>
//       <SVGTainr onClick={_handleClick} {...svgProps}>
//         <TitleSVG />
//       </SVGTainr>
//     </NavTainr>
//   )
// }

const BorderTainr = styled(animated.div)`
  background: radial-gradient(
    103.93% 50% at 50% 50%,
    rgba(25, 31, 29, 0.08) 0%,
    #191f1d 100%
  );
  height: 100vh; /* not the best but the best we can do for now?... */
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  pointer-events: none;
`

// const BorderTainr = styled(animated.div)``

const HomeLinkTainr = styled(animated.div)``

const Border = ({ homeProps, ...props }) => {
  return (
    <BorderTainr {...props}>
      <HomeLinkTainr
        style={{ padding: `7px`, textAlign: `right` }}
        {...homeProps}
      >
        <TitleSVG height={`56px`} width={`56px`} />
      </HomeLinkTainr>
    </BorderTainr>
  )
}

// font-family: playfair display;
//   font-weight: bold;
//   font-size: 72px;
//   line-height: 164.3%;
//   z-index: -1;
//   position: absolute;
//   top: 0px;
//   right: -140px;
//   color: #ffe9c9;
//   animation: ${Drift} 55s ease-out;
//   animation-fill-mode: forwards;

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
    submitted: { emailAddress, phoneNumber },
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
    from: { svgOpacity: 0, svgBlurRadius: 10 },
    to: { svgOpacity: 1, svgBlurRadius: 0 },
    config: { ...config.slow, duration: 2000 },
  })

  const headerSpringRef = useRef()
  const headerProps = useSpring({
    ref: headerSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const borderProps = {
    style: { background: `none` },
  }

  //   useChain(
  //     [
  //       imageSpringRef,
  //       gradientSpringRef,
  //       headerSpringRef,
  //       contentSpringRef,
  //       homeLinkSpringRef,
  //     ],
  //     [0, 0, 0.3, 0.4, 0.6],
  //     3000
  //   )
  useChain(
    [
      homeLinkSpringRef,
      imageSpringRef,
      gradientSpringRef,
      headerSpringRef,
      contentSpringRef,
    ],
    [0, 0.2, 0.2, 0.2, 0.2],
    shared.scheduleAnimationDuration
  )

  // keep it simple for now...maybs just get something pretty that works...thematically...
  return (
    <Containr>
      {/* <NavBar /> */}
      <Border {...borderProps} />
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
          <AH3 style={headerProps}>schedule</AH3>
        </Image>
      </ImageTainr>
      {/* <Curtain className="curtain" /> */}
    </Containr>
  )
}
