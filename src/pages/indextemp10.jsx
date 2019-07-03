import React, { useRef, useState, useEffect, useCallback } from "react"

import styled, { keyframes } from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import debounce from "lodash/debounce"

import VisibilitySensor from "react-visibility-sensor"

import Logo from "../components/Logo"
import Scheduler from "../components/SchedulerFinal3"
import Landing from "../components/Landing"
import SEO from "../components/SEO"
import Hint from "../components/ScrollHint"
import Footer from "../components/Footer"

// define the size of the containr elsewhere and also add right left padding on each page

const Containr = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: 0px;
`

const Header = styled(animated.h1)`
  color: #f2f2f2;
  font-family: Inconsolata;
  font-weight: 300;
  font-size: 24px;
  line-height: 25px;
`

const Divider = styled(animated.hr)`
  border-top: 1px solid #f2f2f2;
  width: 100%;
`

const BlurHeader = ({ children, props }) => {
  return (
    <Containr style={props}>
      <Header>{children}</Header>
      <Divider />
    </Containr>
  )
}

const MainTainr = styled.div`
  width: 100vw;
  overflow: hidden;
`

// very important for guiding user...telling them what they're doing...etc...animated...?
const HintContainer = styled(animated.div)`
  position: fixed;
  top: 92%;
  width: 100%;
  text-align: center;
  z-index: 2;
`
// #23ff00
// #efff2f

const PageTainer = styled(animated.div)`
  margin: 10%;
  background: green;
`

// till we figure out where all margins go
const BlurHeaderTainer = styled(animated.div)`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
`

// const TestThing = styled(animated.div)`
//   background: #000000;
//   color: #ffffff;
//   mix-blend-mode: lighten;
//   font-size: 40px;
//   font-family: roboto;
//   font-weight: 600;
// `
// const TestThing = () => (
//   <div class="knockout" style={{ position: `fixed`, width: `100%` }}>
//     <svg class="knockout-text-container" width="100%" height="100%">
//       <rect
//         class="knockout-text-bg"
//         width="100%"
//         height="100%"
//         fill="#000"
//         x="0"
//         y="0"
//         fill-opacity="1"
//         mask="url(#knockout-text)"
//       />
//       <mask id="knockout-text">
//         <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
//         <text
//           x="50%"
//           y="50%"
//           fill="#000"
//           stroke="#fff"
//           strokeWidth="1px"
//           text-anchor="middle"
//           style={{ fontSize: `40px`, fontFamily: `roboto`, fontWeight: `600` }}
//         >
//           schedule a chat.
//         </text>
//       </mask>
//     </svg>
//   </div>
// )

export default () => {
  const [{ percent }, set] = useSpring(() => ({ percent: 0 }))

  const [percentRevealed, setPercentRevealed] = useState(0)

  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(2px)` },
    config: { ...config.wobbly, duration: 1500 },
    delay: 500,
  })

  const [hVis, setHVis] = useState(false)
  const onHVisChange = useCallback(e => {
    if (e) {
      setHVis(true)
    }
  }, [])

  const scheduleHeaderProps = useSpring({
    from: { opacity: 0, filter: `blur(20px)` },
    to: { opacity: 1, filter: hVis ? `blur(0px)` : `blur(20px)` },
    config: { ...config.wobbly, friction: 1, duration: 1000 },
  })

  const onScroll = useCallback(e => {
    console.log(window.scrollY / document.documentElement.clientHeight)
    set({ percent: window.scrollY / document.documentElement.clientHeight })
    setPercentRevealed(window.scrollY / document.documentElement.clientHeight)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })
  console.log("INDEX RERENDERED")
  return (
    <MainTainr onScroll={onScroll}>
      >
      <Landing />
      <VisibilitySensor partialVisibility={`bottom`} onChange={onHVisChange}>
        <div style={{ background: `pink` }}>
          <BlurHeaderTainer>
            <BlurHeader props={scheduleHeaderProps}>
              schedule a chat.
            </BlurHeader>
          </BlurHeaderTainer>
          {hVis && (
            <PageTainer>
              <Scheduler />
            </PageTainer>
          )}
        </div>
      </VisibilitySensor>
      <VisibilitySensor>
        <Footer />
      </VisibilitySensor>
      {percentRevealed < 0.05 && (
        <HintContainer>
          <Hint>scroll to continue</Hint>
        </HintContainer>
      )}
    </MainTainr>
  )
}
