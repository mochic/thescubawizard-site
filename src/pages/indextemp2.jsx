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

const scrollDetector = e => {
  console.log(e)
}

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
  })

  useEffect(() => {
    window.addEventListener("scroll", check)
    window.addEventListener("scroll", scrollDetector)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("scroll", scrollDetector)
    }
  })

  const logoDuration = 1500
  const titleDuration = 2000

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

  // const titleSpringRef = useRef()
  // const titleProps = useSpring({
  //   from: { opacity: 0, transform: `translate3d(0,40px,0)` },
  //   to: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   ref: titleSpringRef,
  //   config: { ...config.wobbly, duration: 1000 },
  // })
  // const titleSpringRef = useRef()
  // const titleProps = useSpring({
  //   from: {
  //     c0Opacity: 0,
  //     c0Transform: `translate3d(0,40px,0)`,
  //     c1Opacity: 0,
  //     c1Transform: `translate3d(0,40px,0)`,
  //     c2Opacity: 0,
  //     c2Transform: `translate3d(0,40px,0)`,
  //   },
  //   to: {
  //     c0Opacity: 1,
  //     c0Transform: `translate3d(0,0px,0)`,
  //     c1Opacity: 1,
  //     c1Transform: `translate3d(0,0px,0)`,
  //     c2Opacity: 1,
  //     c2Transform: `translate3d(0,0px,0)`,
  //   },
  //   ref: titleSpringRef,
  //   config: config.wobbly,
  // })

  const titleSpringRef = useRef()
  const titleProps = useSpring({
    from: {
      c0Opacity: 0,
      c0Transform: `translate3d(0,0px,0)`,
      c1Opacity: 0,
      c1Transform: `translate3d(0,0px,0)`,
      c2Opacity: 0,
      c2Transform: `translate3d(0,0px,0)`,
      filter: `blur(20px)`,
    },
    to: {
      c0Opacity: 1,
      c0Transform: `translate3d(0,0px,0)`,
      c1Opacity: 1,
      c1Transform: `translate3d(0,0px,0)`,
      c2Opacity: 1,
      c2Transform: `translate3d(0,0px,0)`,
      filter: `blur(0px)`,
    },
    ref: titleSpringRef,
    config: { ...config.wobbly, duration: titleDuration },
  })

  //   const navigationTransitionRef = useRef()
  const navigationTransitions = useTransition(pages, item => item.key, {
    from: { opacity: 0, channel: 47, transform: `translate3d(0,40px,0)` },
    enter: { opacity: 1, channel: 242, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0, channel: 47, transform: `translate3d(0,-40px,0)` },
    config: config.slow,
    // delay: logoDuration + titleDuration + 500,
    delay: 5000,
    // ref: navigationTransitionRef,
  })

  useChain([logoSpringRef, titleSpringRef])

  return (
    <>
      <SEO title="home" />
      <LogoContainr style={logoProps}>
        <Logo />
      </LogoContainr>
      {navigationTransitions.map(({ key, item, props }) => {
        console.log(key, item, props, windowsRevealed, "nothing")
        if (windowsRevealed >= 1.0 && item.key === `schedule`) {
          console.log("schedule")
          return (
            <Navigator
              key={item.key}
              name={item.name}
              props={props}
              handleClick={e => console.log(e)}
            />
          )
        }

        if (windowsRevealed < 1.0 && item.key === `home`) {
          console.log("home")
          return (
            <Navigator
              key={item.key}
              name={item.name}
              props={props}
              handleClick={e => console.log(e)}
            />
          )
        }
      })}
      <LandingPage {...titleProps} />
      <SchedulePageContainr>
        {windowsRevealed >= 0.4 && (
          <SchedulePage show={windowsRevealed >= 0.4} />
        )}
      </SchedulePageContainr>
    </>
  )
}
