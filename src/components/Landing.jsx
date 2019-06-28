import React, { useRef } from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import Logo from "./Logo"

const LogoTainr = styled(animated.div)``

// we're doing weird stuff with opacity,
// we dont want to potentially negatively
// affect seo
const TitleTainr = styled(animated.div)``

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

// needs to resize based on media query?
const LogoTainer = styled(animated.div)``

export default ({ ref }) => {
  const { logoOpacity, logoFilter, titleOpacity, titleFilter } = useSpring({
    from: {
      logoOpacity: 0,
      logoFilter: `blur(20px)`,
      titleOpacity: 0,
      titleFilter: `blur(20px)`,
    },
    to: [
      { titleOpacity: 1, titleFilter: `blur(0px)` },
      { logoOpacity: 1, logoFilter: `blur(20px)` },
    ],
    ref,
  })

  return (
    <>
      <TitleTainr style={{ opacity: titleOpacity, filter: titleFilter }}>
        <TitleChunk>the</TitleChunk>
        <TitleChunk>scuba</TitleChunk>
        <TitleChunk>wizard</TitleChunk>
      </TitleTainr>
      <LogoTainr style={{ opacity: logoOpacity, filter: logoFilter }}>
        <Logo />
      </LogoTainr>
    </>
  )
}
