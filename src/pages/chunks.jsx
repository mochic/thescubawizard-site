import React, { useRef, useState, useEffect, useCallback } from "react"

import styled, { keyframes } from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import { useGesture, withGesture, Gesture } from "react-with-gesture"

import ScheduleChunk from "../chunks/Schedule"
import LandingChunk from "../chunks/Landing"
import FooterChunk from "../chunks/Footer"

import devices from "../devices"

const ChunkTainr = styled(animated.div)`
  margin: 10%;
`

const MainTainr = styled.div`
  overflow: hidden;
  width: 100vw;
`

const LandingContainr = styled(animated.div)`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

const Water = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 86%
  );
  top: 0;
  left: 0;
`

const ScheduleChunkContainr = styled(animated.div)`
  padding: 0;
`

const FooterChunkContainr = styled(animated.div)`
  padding: 10px;
  text-align: center;
  background: black;
  @media ${devices.mobileS} {
    max-height: 300px;
  }
`

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
      <LandingContainr>
        <Water />
        <LandingChunk />
      </LandingContainr>
      <ScheduleChunkContainr>
        <ScheduleChunk />
      </ScheduleChunkContainr>
      <FooterChunkContainr>
        <FooterChunk />
      </FooterChunkContainr>
    </MainTainr>
  )
}
