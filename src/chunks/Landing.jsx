import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useSpring, useSprings, useChain, config } from "react-spring"

import Logo from "../components/Logo"

import devices from "../devices"

const TitleTainr = styled(animated.div)`
  margin: 0 30px 0 30px;
  padding: 330px 0 120px 0;
  z-index: 0;
  height: 100vh;
`

const LogoTainr = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 200%;
  z-index: -1;
  top: 0;
  left: 0;
`

const OtherLogoTainer = styled(animated.div)`
  height: 100%;
  width: 200%;
`

const OtherTainer = styled(animated.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`

// box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

const TitleChunk = styled(animated.p)`
  color: #efff2f;
  font-family: inconsolata;
  font-size: 96px;
  font-weight: 900;
  opacity: 1;
  line-height: 1;
`

const TitleChar = styled(animated.p)`
  color: #ffe9c9;
  font-family: inconsolata;
  font-size: 96px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  z-index: 1;
`

const ChunkTainer = styled(animated.div)`
  display: flex;
  line-height: 1;
`

export default ({ initSpringRef }) => {
  const delay = 1000
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(2px)` },
    config: { ...config.wobbly, duration: 1500 },
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
      {/* <LogoTainr style={{ filter: logoFilter }}>
        <Logo />
      </LogoTainr> */}
      <OtherTainer>
        <OtherLogoTainer style={logoProps}>
          <Logo />
        </OtherLogoTainer>
      </OtherTainer>
      <TitleTainr>
        <ChunkTainer>
          <TitleChar style={tc00Props}>t</TitleChar>
          <TitleChar style={tc01Props}>h</TitleChar>
          <TitleChar style={tc02Props}>e</TitleChar>
        </ChunkTainer>
        <ChunkTainer>
          <TitleChar style={tc03Props}>s</TitleChar>
          <TitleChar style={tc04Props}>c</TitleChar>
          <TitleChar style={tc05Props}>u</TitleChar>
          <TitleChar style={tc06Props}>b</TitleChar>
          <TitleChar style={tc07Props}>a</TitleChar>
        </ChunkTainer>
        <ChunkTainer>
          <TitleChar style={c20Props}>w</TitleChar>
          <TitleChar style={c21Props}>i</TitleChar>
          <TitleChar style={c22Props}>z</TitleChar>
          <TitleChar style={c23Props}>a</TitleChar>
          <TitleChar style={c24Props}>r</TitleChar>
          <TitleChar style={c25Props}>d</TitleChar>
        </ChunkTainer>
        {/* <ChunkTainer>
          <TitleChar style={tc04Props}>wizard</TitleChar>
        </ChunkTainer> */}
        {/* <ChunkTainer>
          {title1Props.map((props, index) => {
            console.log(props, index)
            const { key, value } = TitleChunk1[index]
            return (
              <TitleChar key={key} style={props}>
                {value}
              </TitleChar>
            )
          })}
        </ChunkTainer>
        <ChunkTainer>
          {title2Props.map((props, index) => {
            console.log(props, index)
            const { key, value } = TitleChunk2[index]
            return (
              <TitleChar key={key} style={props}>
                {value}
              </TitleChar>
            )
          })}
        </ChunkTainer> */}
      </TitleTainr>
    </>
  )
}
