import React from "react"

import styled, { keyframes } from "styled-components"
import { animated, useSpring } from "react-spring"

const AnimatedP = styled(animated.p)`
  color: #f2f2f2;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 22px;
`

const UpKeys = keyframes`
  from {
    opacity: ${loHintOpacity};
    transform: translate3d(0,16px,0)
  }
  to {
    opacity: ${hiHintOpacity};
    transform: translate3d(0,0px,0)
  }
`

const loHintOpacity = 0.2
const hiHintOpacity = 1

export default ({ children, delay, ref }) => {
  const { opacity } = useSpring({
    from: { opacity: loHintOpacity },
    to: { opacity: hiHintOpacity },
    ref,
    delay,
  })
  return (
    <AnimatedP
      style={{
        opacity,
        animation: opacity.interpolate(v =>
          v === hiHintOpacity ? `${UpKeys} 3s ease-in-out infinite` : null
        ),
      }}
    >
      {children}
    </AnimatedP>
  )
}
