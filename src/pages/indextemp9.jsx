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

// define the size of the containr elsewhere and also add right left padding on each page

const LandingPage = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

const LogoContainr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
`

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
  top: 80%;
  width: 100%;
  text-align: center;
  z-index: -1;
`
// #23ff00
// #efff2f
const TitleChunk = styled(animated.div)`
  color: #efff2f;
  font-family: inconsolata;
  font-weight: 900;
  font-size: 96px;
  line-height: 1;
  opacity: 1;
  padding: 42px 0 0 32px;
  margin: 0;
  text-shadow: 0px 15px 5px rgba(0, 0, 0, 0.1),
    10px 20px 5px rgba(0, 0, 0, 0.05), -10px 20px 5px rgba(0, 0, 0, 0.05);
`

const TitleContainr = styled(animated.div)`
  z-index: -1;
  height: 85%;
`

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

export default () => {
  const [{ percent }, set] = useSpring(() => ({ percent: 0 }))

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
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <MainTainr onScroll={onScroll}>
      <LandingPage>
        <TitleContainr style={{ gridArea: `2 / 2 / auto / auto` }}>
          <TitleChunk>the</TitleChunk>
          <TitleChunk>scuba</TitleChunk>
          <TitleChunk>wizard</TitleChunk>
        </TitleContainr>
        <LogoContainr style={logoProps}>
          <Logo />
        </LogoContainr>
      </LandingPage>
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
      {percent === 0 && (
        <HintContainer>
          <Hint></Hint>
        </HintContainer>
      )}
    </MainTainr>
  )
}
