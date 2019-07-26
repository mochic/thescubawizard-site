import React, { useState, useEffect, useCallback } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import BubbleParticles from "../components/BubbleParticles"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Scheduler from "../components/Scheduler"

import SubmissionProvider from "../providers/SubmissionProvider"

import devices from "../devices"

/*
 * z-index is used to create some kinda of an underwater feel
 * -4 is app-background layer
 * -3 is water background layer
 * -2 is logo layer
 * -1 is water foreground layer
 * 0 is page layer
 */

const MainTainr = styled.div`
  overflow: hidden;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "hero"
    "schedule"
    "footer";
  margin: auto;
  background: black;

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

// const HeroContainr = styled(animated.div)`
//   overflow: hidden;
//   height: 100vh;
//   width: 100vw;
//   grid-area: hero;
// `

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
  z-index: 2;
`

const ParticlesContainr = styled(animated.div)`
  position: absolute;
  top: 0;
  z-index: 1;
`

const ScheduleContainr = styled(animated.div)`
  grid-area: schedule;
  padding: 10% 10% 15% 10%;
  z-index: 2;
  background: #0a0a0a;
  box-sizing: border-box;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const FooterContainr = styled(animated.div)`
  grid-area: footer;
  padding: 10px;
  text-align: center;
  z-index: 2;
  background: black;
`

export default () => {
  const onScroll = useCallback(e => {
    console.log(window.scrollY / document.documentElement.clientHeight)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <MainTainr>
      <SEO title={`home`} />
      <HeroContainr>
        <Water />
        <ParticlesContainr>
          <BubbleParticles height={`100vh`} width={`100vw`} />
        </ParticlesContainr>
        <Hero />
      </HeroContainr>
      <SubmissionProvider>
        <ScheduleContainr>
          <Scheduler />
        </ScheduleContainr>
      </SubmissionProvider>
      <FooterContainr>
        <Footer />
      </FooterContainr>
    </MainTainr>
  )
}
