import React, { useState, useEffect, useCallback } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import Footer from "../components/Footer"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import InContentInternalLink from "../components/InContentInternalLink"

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
    "schedule-link"
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

// max-width, overflow, position are very
// important for making sure the hero doesn't
// leak past the bounds we want
const HeroContainr = styled(animated.div)`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  grid-area: hero;
  position: relative;
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

const InlineLinkTainr = styled.div``

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
        <Hero />
      </HeroContainr>
      <InlineLinkTainr style={{ gridArea: `schedule-link` }}>
        <InContentInternalLink
          heading="Need help with a dive job?"
          statement="Let's talk about it."
          link={{ to: `/contact`, label: `Schedule a chat. ---->` }}
        />
      </InlineLinkTainr>
      <FooterContainr>
        <Footer />
      </FooterContainr>
    </MainTainr>
  )
}
