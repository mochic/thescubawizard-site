import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import Hero from "../components/Hero14"

import About from "../components/AboutLong5"

import Promise from "../components/Promise2"

import Interested from "../components/InterestedLong3"

import Footer from "../components/FooterLong"

import ScrollHint from "../components/ScrollHint2"

const HeroTainr = styled(animated.div)`
  overflow: hidden;
`

const AboutTainr = styled(animated.div)`
  overflow: hidden;
`

const PromiseTainr = styled(animated.div)``

const InterestedTainr = styled(animated.div)`
  overflow: hidden;
`

const ChunkTainr = styled(animated.div)`
  overflow: hidden;
`

const HintTainr = styled(animated.div)`
  position: fixed;
  z-index: 1000;
  width: 100%;
  bottom: 5%;
  text-align: center;
`

const FooterTainr = styled(animated.div)`
  min-height: 50px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

export default () => {
  return (
    <>
      <ChunkTainr>
        <Hero />
      </ChunkTainr>
      <ChunkTainr>
        <About />
      </ChunkTainr>
      <ChunkTainr>
        <Promise />
      </ChunkTainr>
      <ChunkTainr>
        <Interested />
      </ChunkTainr>
      <FooterTainr>
        <Footer />
      </FooterTainr>
      {/* <HintTainr>
        <ScrollHint>Scroll for more.</ScrollHint>
      </HintTainr> */}
    </>
  )
}
