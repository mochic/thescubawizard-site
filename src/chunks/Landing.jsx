import React, { useState } from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import { GridTainr } from "../components/Shared"
import Logo from "../components/Logo"

import devices from "../devices"

const TitleTainr = styled(animated.div)`
  margin: 0;
  padding: 100px 0 300px 0;
  z-index: 0;
`

const LogoTainr = styled(animated.div)`
  position: absolute;
  height: 200%;
  width: 200%;
  z-index: -1;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const TitleChunk = styled(animated.p)`
  color: #efff2f;
  font-family: inconsolata;
  font-size: 96px;
  font-weight: 900;
  opacity: 1;
  line-height: 1;
`

export default ({ initSpringRef }) => {
  const { logoFilter } = useSpring({
    from: { filter: `blur(0px)` },
    to: { filter: `blur(0px)` },
    ref: initSpringRef,
  })

  return (
    <>
      <LogoTainr style={{ filter: logoFilter }}>
        <Logo />
      </LogoTainr>
      <TitleTainr>
        <TitleChunk>the</TitleChunk>
        <TitleChunk>scuba</TitleChunk>
        <TitleChunk>wizard</TitleChunk>
      </TitleTainr>
    </>
  )
}
