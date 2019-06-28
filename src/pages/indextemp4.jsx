import React, { useRef, useState, useEffect, useCallback } from "react"

import styled from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import debounce from "lodash/debounce"

import Logo from "../components/Logo"
import LandingPage from "../components/LandingFinal3"
import SchedulePage from "../components/SchedulerFinal"
import SEO from "../components/SEO"

import { FaChevronDown } from "react-icons/fa"

// short landing page for quick switch trick?
// const LandingPage = styled(animated.div)`
//   height: 50vh;
//   width: 100vw;
// `

const NavigationButton = styled(animated.div)``

const LandingBackgroundNavitationThing = ({ isLanding }) => {
  // probably put this in browser
  // always partially shown, visibility just triggers the logo icon to zoom in fade etc, and other shit...
  const logoProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  const titleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  const navButtonProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLanding ? 1 : 0 },
  })
  return (
    <>
      <div style={logoProps}>logo goes here</div>
      <div style={titleProps}>title goes here</div>
      <NavigationButton style={navButtonProps}>schedule</NavigationButton>
    </>
  )
}

const Containr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -2;
`

const LandingLogo = ({ percent }) => {
  const containrProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(${percent * 20}px)` },
    config: { ...config.wobbly, duration: percent < 1 ? 1500 : null },
  })

  return (
    <Containr style={containrProps}>
      <Logo />
    </Containr>
  )
}

const SchedulePageContainr = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
`

const NavContainr = styled(animated.div)`
  position: fixed;
  background: red;
  width: 100%;
  top: 80%;
  z-index: 2;
`

const LogoContainr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -2;
`

// const LogoContainr = styled(animated.div)`
//   text-align: center;
//   width: 573px;
//   height: 566px;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   z-index: -2;
// `

const ScheduleHintContainer = styled(animated.div)`
  color: #f2f2f2;
  position: fixed;
  top: 91.5%;
  left: 0%;
  width: 100%;
`

const ScheduleHintLabel = styled(animated.div)`
  font-family: roboto;
  font-weight: 300;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
`

const ScheduleHintIconContainer = styled(animated.div)`
  font-size: 24px;
  color: #2f2f2f;
  text-align: center;
`

// tbh i literally have no idea what this could possibly be called lmao...
const LogoNavTitleThing = ({ hint: { name }, percent }) => {
  // const logoSpringRef = useRef()
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(${percent * 20}px)` },
    config: { ...config.wobbly, duration: percent < 1 ? 1500 : null },
    // ref: logoSpringRef,
  })

  // const titleSpringRef = useRef()
  // const titleProps = useSpring({
  //   from: { filter: `blur(20px)` },
  //   to: { filter: `blur(${percent > 1 ? 20 : 0}px)` },
  //   config: { ...config.wobbly, duration: percent < 1 ? 1000 : null },
  //   ref: titleSpringRef,
  // })

  // const navigationSpringRef = useRef()
  // const navigationProps = useSpring({
  //   from: { opacity: 0, transform: `translate3d(0,40px,0)` },
  //   to: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   ref: navigationSpringRef,
  // })

  // useChain([logoSpringRef, titleSpringRef, navigationSpringRef])

  return (
    <>
      <LogoContainr style={logoProps}>
        <Logo />
      </LogoContainr>
    </>
  )
}

const Title2 = styled(animated.h1)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  padding-top: 20px;
  margin-left: 40px;
  position: absolute;
`

const TitleContainr = styled(animated.div)`
  position: sticky;
  top: 0px;
  height: 20vh;
  width: 100%;
  z-index: 100;
`

const FirstTitle = styled(animated.h1)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
`

const TitleThing = ({ opacity, filter }) => {
  return (
    <>
      <TitleContainr>
        <Title2 style={{ opacity }}>
          the
          <br />
          scuba
          <br />
          wizard
        </Title2>
      </TitleContainr>
    </>
  )
}

const OtherContainr = styled(animated.div)`
  position: sticky;
  top: 0px;
  height: 20vh;
  width: 100%;
  z-index: 100;
`

const OtherP = styled(animated.p)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  margin-left: 50%;
`

const OtherH = styled(animated.h1)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  margin-top: 20px;
  margin-left: 40px;
`

const OtherTitleThing = ({ transform0, transform1, opacity0, opacity1 }) => {
  return (
    <>
      <OtherContainr style={{ background: `black` }}>
        <OtherH style={{ opacity: opacity0, transform: transform0 }}>
          the
          <br />
          scuba
          <br />
          wizard
        </OtherH>
        <OtherP style={{ opacity: opacity1, transform: transform1 }}>
          dive expert.
        </OtherP>
      </OtherContainr>
    </>
  )
}

const Navigator = ({
  name,
  props: { channel, opacity, transform },
  handleClick,
}) => {
  return (
    <ScheduleHintContainer
      style={{
        opacity,
        transform,
      }}
      onClick={e => {
        e.preventDefault()
        return handleClick(e)
      }}
    >
      <ScheduleHintLabel
        style={{ color: channel.interpolate(v => `rgb(${v},${v},${v})`) }}
      >
        {name}
      </ScheduleHintLabel>
      <ScheduleHintIconContainer>
        <FaChevronDown />
      </ScheduleHintIconContainer>
    </ScheduleHintContainer>
  )
}

const LandingTitleContainer = styled(animated.div)`
  background: red;
  position: sticky;
  top: 0;
  z-index: 100;
`

const TitleThingy = styled(animated.div)``

const TitleChunkP = styled(animated.p)`
  font-size: 56px;
  font-family: roboto;
  font-weight: 900;
  line-height: 1;
  color: #f2f2f2;
`

const PageHint = styled(animated.div)``

const LandingTitleThing = ({ percent }) => {
  return (
    <LandingTitleContainer>
      <TitleThingy>
        <TitleChunkP style={{}}>the</TitleChunkP>
        <TitleChunkP style={{}}>scuba</TitleChunkP>
        <TitleChunkP style={{}}>wizard</TitleChunkP>
      </TitleThingy>
      <TitleChunkP style={{}}>schedule a chat.</TitleChunkP>
    </LandingTitleContainer>
  )
}

const scrollDetector = e => {
  console.log(e)
}

const HeaderThing = styled(animated.h1)`
  margin: 0;
  padding: 0;
`

export default () => {
  const [windowsRevealed, setRevealed] = useState(0)
  const [isScrolling, setScrolling] = useState(false)
  const pages = [
    { key: `home`, name: `schedule` },
    { key: `schedule`, name: `scheduling` },
  ]

  // const check = debounce(e => {
  //   setRevealed(window.scrollY / window.innerHeight)
  // }, 10)
  // const check = debounce(e => {
  //   setRevealed(window.scrollY / window.innerHeight)
  // }, 10)

  const check = useCallback(() => {
    setRevealed(window.scrollY / window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", check)
    window.addEventListener("scroll", scrollDetector)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("scroll", scrollDetector)
    }
  })

  const logoDuration = 1500
  const titleDuration = 1000

  const logoSpringRef = useRef()
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(${2 + windowsRevealed * 18}px)` },
    config: {
      ...config.wobbly,
      duration: windowsRevealed < 1 ? logoDuration : null,
    },
    ref: logoSpringRef,
  })
  console.log(`rendered`)

  const titleSpringRef = useRef()
  const titleProps = useSpring({
    from: {
      opacity0: 0,
      transform0: `translate3d(-40px,0,0)`,
    },
    to: [
      {
        opacity0: 1,
        transform0: `translate3d(0px,0,0)`,
      },
    ],
    ref: titleSpringRef,
    config: { ...config.wobbly, duration: titleDuration },
  })

  useChain([logoSpringRef, titleSpringRef])

  const navigationProps = useSpring({
    from: { opacity: 0, channel: 47, transform: `translate3d(0,40px,0)` },
    to: { opacity: 1, channel: 242, transform: `translate3d(0,0px,0)` },
    delay: logoDuration + titleDuration + 500,
    config: config.wobbly,
  })

  return (
    <>
      <SEO title="home" />
      <LogoContainr style={logoProps}>
        <Logo />
      </LogoContainr>
      <Navigator
        name={`schedule`}
        props={navigationProps}
        handleClick={e => console.log(e)}
      />
      <LandingPage />
      {/* <TitleThing {...titleProps} /> */}
      {/* <OtherTitleThing {...titleProps} /> */}
      {/* <LandingTitleThing /> */}
      <SchedulePageContainr>
        {windowsRevealed >= 0.2 && (
          <SchedulePage show={windowsRevealed >= 0.2} />
        )}
      </SchedulePageContainr>
    </>
  )
}
