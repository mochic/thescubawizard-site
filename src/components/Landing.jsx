import React, { useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, config } from "react-spring"

import Logo from "./Logo"

import devices from "../devices"

const LogoTainr = styled(animated.div)`
  top: 0px;
  left: 0px;
  width: 600px;
  height: 600px;
  position: absolute;
  text-align: center;
  z-index: -2;

  @media ${devices.mobileM} {
    height: 716px;
    width: 716px;
  }
`
const LandingPage = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

// we're doing weird stuff with opacity,
// we dont want to potentially negatively
// affect seo
const TitleTainr = styled(animated.div)`
  z-index: -1;
  height: 85%;
`

const TitleChunk = styled(animated.p)`
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

export default () => {
  const titleSpringRef = useRef()
  const titleProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(0px)` },
    config: { ...config.wobbly, duration: 1500 },
    ref: titleSpringRef,
  })

  const logoSpringRef = useRef()
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(2px)` },
    config: { ...config.wobbly, duration: 1500 },
    ref: logoSpringRef,
  })

  useChain([titleSpringRef, logoSpringRef], [0.3, 0.9])

  return (
    <LandingPage>
      <TitleTainr style={titleProps}>
        <TitleChunk>the</TitleChunk>
        <TitleChunk>scuba</TitleChunk>
        <TitleChunk>wizard</TitleChunk>
      </TitleTainr>
      <LogoTainr style={logoProps}>
        <Logo />
      </LogoTainr>
    </LandingPage>
  )
}
