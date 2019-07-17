import React, { useRef, useState, useEffect, useCallback } from "react"

import styled, { keyframes } from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import Schedule from "../chunks/Schedule"
import Hero from "../chunks/Hero"
import Footer from "../chunks/Footer"

import SEO from "../components/SEO"

import devices from "../devices"

const MainTainr = styled.div`
  overflow: hidden;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "hero"
    "schedule"
    "footer";
  margin: auto;

  @media ${devices.tablet} {
    grid-template-columns: auto 48%;
    grid-template-rows: auto 10%;
    grid-template-areas:
      "hero schedule"
      "hero footer";
  }

  @media ${devices.laptop} {
    grid-template-columns: auto 432px;
    grid-template-rows: auto 10%;
    grid-template-areas:
      "hero schedule"
      "hero footer";
  }
`

const HeroContainr = styled(animated.div)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  grid-area: hero;
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

const ScheduleContainr = styled(animated.div)`
  grid-area: schedule;
  padding: 0;
  padding-top: 80px;
  padding-bottom: 40px;
  z-index: 1;
  background: black;
  display: flex;
  align-items: flex-end;
`

const FooterContainr = styled(animated.div)`
  grid-area: footer;
  padding: 10px;
  text-align: center;
  background: black;
  max-height: 300px;
  z-index: 1;

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

  return (
    <MainTainr onScroll={onScroll}>
      <SEO title={`home`} />
      <HeroContainr>
        <Water />
        <Hero />
      </HeroContainr>
      <ScheduleContainr>
        <Schedule />
      </ScheduleContainr>
      <FooterContainr>
        <Footer />
      </FooterContainr>
    </MainTainr>
  )
}
