import React, { useState } from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import Hero from "../components/Hero16"

import About from "../components/AboutLong12"

import Promise from "../components/Promise6"

import Interested from "../components/InterestedLong6"

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
  margin: 0;
  padding: 200px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
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
      <ChunkTainr style={{ overflow: `visible` }}>
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
