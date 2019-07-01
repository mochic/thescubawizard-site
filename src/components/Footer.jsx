import React from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import devices from "../devices"

// line-height == font-size centers text vertically if it's one line
const OffColorP = styled(animated.p)`
  text-align: center;
  color: #2f2f2f;
  font-family: inconsolata;
  font-weight: 900;
  font-size: 18px;
  line-height: 18px;
`
const OffColorLink = styled(animated.a)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #2f2f2f;
  }
`

const HidingTainr = styled.div`
  overflow: hidden;

  @media ${devices.mobileM} {
    max-height: 200px;
  }
`

export default () => {
  const linkProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.wobbly,
    delay: 2000,
  })
  return (
    <HidingTainr>
      <OffColorP style={linkProps}>
        {// so i can see the space at the end lel...
        `site by `}
        <OffColorLink
          href="https://github.com/mochic"
          target="_blank"
          rel="noopener noreferrer"
        >
          mochic
        </OffColorLink>
      </OffColorP>
    </HidingTainr>
  )
}
