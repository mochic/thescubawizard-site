import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import HeroImage from "./HeroImage"

import devices from "../../devices"

const TitleTainr = styled(animated.div)`
  display: grid;
  height: 100vh;
  grid-template-rows: 3fr 1fr 1fr 1fr 2fr;
  grid-template-areas: "." "titleChunk0" "titleChunk1" "titleChunk2" ".";
  padding-left: 10%;

  @media ${devices.mobileL} {
    padding-left: 20%;
  }
`

// inner outer container to have a large
// hero image based on our screen size that
// doesn't stretch the rest of our content weirdly...
const OuterHeroImageTainr = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  max-width: 1440px;
`

const InnerHeroImageTainr = styled(animated.div)`
  height: 100%;
  width: 200%;

  @media ${devices.tablet} {
    height: 100%;
    width: 100%;
  }
`

const TitleChar = styled(animated.p)`
  color: #ffe9c9;
  font-family: inconsolata;
  font-size: 500%;
  font-weight: 900;
  margin: 0;
  padding: 0;
  z-index: 2;

  @media ${devices.laptop} {
    font-size: 700%;
  }

  @media ${devices.laptopL} {
    font-size: 5vw;
  }

  @media ${devices.desktop} {
    font-size: 1000%;
  }
`

const ChunkTainer = styled(animated.div)`
  display: flex;
  line-height: 1;
`

export default () => {
  const delay = 1000
  const heroProps = useSpring({
    from: { filter: `blur(20px)` },
    to: [{ filter: `blur(0px)` }, { filter: `blur(5px)` }],
    config: { ...config.stiff, duration: 1500 },
    // delay: 1800,
  })

  // const tc00Ref = useRef()
  const tc00Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.stiff, duration: 1500 },
    // ref: tc00Ref,
    delay,
  })

  // const tc01Ref = useRef()
  const tc01Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,60px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.slow, mass: 200, duration: 1500 },
    // ref: tc01Ref,
    delay,
  })

  // const tc02Ref = useRef()
  const tc02Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,80px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, tension: 120, duration: 1000 },
    // ref: tc02Ref,
    delay,
  })

  // const tc03Ref = useRef()
  // s
  const tc03Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,20px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1500 },
    // ref: tc03Ref,
    delay,
  })

  // const tc04Ref = useRef()
  // c
  const tc04Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,80px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1000 },
    // ref: tc04Ref,
    // delay: 500,
    delay,
  })

  // const tc05Ref = useRef()
  // u
  const tc05Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,100px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.slow, duration: 1800 },
    // ref: tc05Ref,
    // delay: 50,
    delay,
  })

  // const tc06Ref = useRef()
  // b
  const tc06Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,120px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1500 },
    // ref: tc06Ref,
    // delay: 100,
    delay,
  })

  // const tc07Ref = useRef()
  // a
  const tc07Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,100px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1100 },
    // ref: tc07Ref,
    delay,
  })

  // const c20Ref = useRef()
  // w
  const c20Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,100px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1300 },
    // ref: c20Ref,
    delay,
  })

  // const c21Ref = useRef()
  // i
  const c21Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,90px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1800 },
    // ref: c21Ref,
    delay,
  })

  // const c22Ref = useRef()
  // z
  const c22Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,150px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1200 },
    // ref: c22Ref,
    delay,
  })

  // const c23Ref = useRef()
  // a
  const c23Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,100px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.gentle, duration: 1300 },
    // ref: c23Ref,
    delay,
  })

  // const c24Ref = useRef()
  // r
  const c24Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,110px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.stiff, duration: 1000 },
    // ref: c24Ref,
    delay,
  })

  // const c25Ref = useRef()
  // d
  const c25Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,120px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1500 },
    // ref: c25Ref,
    delay,
  })

  return (
    <>
      <OuterHeroImageTainr>
        <InnerHeroImageTainr style={heroProps}>
          <HeroImage />
        </InnerHeroImageTainr>
      </OuterHeroImageTainr>
      <TitleTainr>
        <ChunkTainer style={{ gridArea: `titleChunk0` }}>
          <TitleChar style={tc00Props}>t</TitleChar>
          <TitleChar style={tc01Props}>h</TitleChar>
          <TitleChar style={tc02Props}>e</TitleChar>
        </ChunkTainer>
        <ChunkTainer style={{ gridArea: `titleChunk1` }}>
          <TitleChar style={tc03Props}>s</TitleChar>
          <TitleChar style={tc04Props}>c</TitleChar>
          <TitleChar style={tc05Props}>u</TitleChar>
          <TitleChar style={tc06Props}>b</TitleChar>
          <TitleChar style={tc07Props}>a</TitleChar>
        </ChunkTainer>
        <ChunkTainer style={{ gridArea: `titleChunk2` }}>
          <TitleChar style={c20Props}>w</TitleChar>
          <TitleChar style={c21Props}>i</TitleChar>
          <TitleChar style={c22Props}>z</TitleChar>
          <TitleChar style={c23Props}>a</TitleChar>
          <TitleChar style={c24Props}>r</TitleChar>
          <TitleChar style={c25Props}>d</TitleChar>
        </ChunkTainer>
      </TitleTainr>
    </>
  )
}
