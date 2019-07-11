import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useSpring, useSprings, useChain, config } from "react-spring"

import { GridTainr } from "../components/Shared"
import Logo from "../components/Logo"

import devices from "../devices"

const TitleTainr = styled(animated.div)`
  margin: 0 30px 0 30px;
  padding: 330px 0 120px 0;
  z-index: 0;
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
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(8px)` },
    delay: 500,
  })

  const TitleChunk0 = [
    { key: `letter-0`, value: `t`, ref: useRef() },
    { key: `letter-1`, value: `h`, ref: useRef() },
    { key: `letter-2`, value: `e`, ref: useRef() },
  ]

  const TitleChunk1 = [
    { key: `letter-3`, value: `s`, ref: useRef() },
    { key: `letter-4`, value: `c`, ref: useRef() },
    { key: `letter-5`, value: `u`, ref: useRef() },
    { key: `letter-6`, value: `b`, ref: useRef() },
    { key: `letter-7`, value: `a`, ref: useRef() },
  ]

  const TitleChunk2 = [
    { key: `letter-8`, value: `w`, ref: useRef() },
    { key: `letter-9`, value: `i`, ref: useRef() },
    { key: `letter-10`, value: `z`, ref: useRef() },
    { key: `letter-11`, value: `a`, ref: useRef() },
    { key: `letter-12`, value: `r`, ref: useRef() },
    { key: `letter-13`, value: `d`, ref: useRef() },
  ]

  // const [tC0Springs, setTC0] = useSpring(TitleChunk0.length, index => ({
  //   opacity: 1,
  //   transform: `translate3d(0,0px,0)`,
  // }))

  // const [title0Props, setTitle0Props] = useSprings(
  //   TitleChunk0.length,
  //   index => {
  //     return {
  //       from: { opacity: 0, transform: `translate3d(0,100px,0)` },
  //       to: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //       delay: index < 1 ? index * 50 : 500 + index * 50,
  //       config: config.stiff,
  //       ref: TitleChunk0[index].ref,
  //     }
  //   }
  // )

  const [title1Props, setTitle1Props] = useSprings(
    TitleChunk1.length,
    index => {
      return {
        from: { opacity: 0, transform: `translate3d(0,100px,0)` },
        to: { opacity: 1, transform: `translate3d(0,0px,0)` },
        delay: index < 3 ? index * 50 : 500 + index * 50,
        config: config.stiff,
        ref: TitleChunk1[index].ref,
      }
    }
  )

  const [title2Props, setTitle2Props] = useSprings(
    TitleChunk2.length,
    index => {
      return {
        from: { opacity: 0, transform: `translate3d(0,100px,0)` },
        to: { opacity: 1, transform: `translate3d(0,0px,0)` },
        delay: index < 3 ? index * 50 : 500 + index * 50,
        config: config.stiff,
        ref: TitleChunk2[index].ref,
      }
    }
  )

  const tc00Ref = useRef()
  const tc00Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.stiff, duration: 1500 },
    ref: tc00Ref,
  })

  const tc01Ref = useRef()
  const tc01Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,60px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.slow, mass: 200, duration: 1500 },
    ref: tc01Ref,
  })

  const tc02Ref = useRef()
  const tc02Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,80px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, tension: 120, duration: 1000 },
    ref: tc02Ref,
  })

  const tc03Ref = useRef()
  const tc03Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,20px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1000 },
    ref: tc03Ref,
    delay: 1000,
  })

  const tc04Ref = useRef()
  const tc04Props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,20px,0)` },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: { ...config.wobbly, duration: 1000 },
    ref: tc04Ref,
    delay: 1000,
  })

  useChain(
    [tc00Ref, tc02Ref, tc01Ref, tc03Ref, tc04Ref],
    [0, 0.2, 0.4, 0.9, 1.0]
  )

  // const [chunk0Props, setChunk0Props] = useSpring(() => {
  //   transform: `translate3d(0,0px,0)`
  // })

  // const [chunk1Props, setChunk1Props] = useSpring(() => {
  //   transform: `translate3d(0,0px,0)`
  // })

  // const [chunk2Props, setChunk2Props] = useSpring(() => {
  //   transform: `translate3d(0,0px,0)`
  // })
  // useChain([TitleChunk0[0].ref, TitleChunk0[1].ref, TitleChunk0[2].ref])
  // useChain(TitleChunk1.map(({ ref }) => ref))
  // useChain(TitleChunk2.map(({ ref }) => ref))

  // return (
  //   <>
  //     {/* <LogoTainr style={{ filter: logoFilter }}>
  //       <Logo />
  //     </LogoTainr> */}
  //     <OtherTainer>
  //       <OtherLogoTainer>
  //         <Logo />
  //       </OtherLogoTainer>
  //     </OtherTainer>
  //     <TitleTainr>
  //       <TitleChunk>the</TitleChunk>
  //       <TitleChunk>scuba</TitleChunk>
  //       <TitleChunk>wizard</TitleChunk>
  //     </TitleTainr>
  //   </>
  // )

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
          <TitleChar style={tc03Props}>scuba</TitleChar>
        </ChunkTainer>
        <ChunkTainer>
          <TitleChar style={tc04Props}>wizard</TitleChar>
        </ChunkTainer>
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
