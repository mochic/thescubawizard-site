import React from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring } from "react-spring"

import PropTypes from "prop-types"

const AnimatedP = styled(animated.p)`
  color: #f2f2f2;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 22px;
`

const FadeUpKeys = keyframes`
  from {
    opacity: ${loHintOpacity};
    transform: translate3d(0,16px,0)
  }
  to {
    opacity: ${hiHintOpacity};
    transform: translate3d(0,0px,0)
  }
`

const FadeUpAnimation = ({ length }) => css`
  ${FadeUpKeys} ${length || 3}s ease-in-out infinite
`

const loHintOpacity = 0
const hiHintOpacity = 1

// const ScrollHint = ({ children }) => {
//   const { opacity } = useSpring({
//     from: { opacity: loHintOpacity },
//     to: { opacity: hiHintOpacity },
//     delay: 1000,
//     config: { duration: 5000 },
//   })
//   console.log("scroll hint rendered")
//   return (
//     <AnimatedP
//       style={{
//         opacity,
//         animation: opacity.interpolate(v => (v > 0.8 ?  : null)),
//       }}
//     >
//       {children}
//     </AnimatedP>
//   )
// }

const ScrollHint = ({ children }) => {
  const { opacity } = useSpring({
    from: { opacity: loHintOpacity },
    to: { opacity: hiHintOpacity },
    delay: 1000,
    config: { duration: 5000 },
  })
  console.log("scroll hint rendered")
  return (
    <AnimatedP
      style={{
        opacity,
        animation: opacity.interpolate(v =>
          v > 0.8 ? `${FadeUpAnimation}` : null
        ),
      }}
    >
      {children}
    </AnimatedP>
  )
}

ScrollHint.propTypes = {}

export default ScrollHint
