import React, { useState, useCallback } from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring, useTransition } from "react-spring"

import { PropTypes } from "prop-types"

const loHintOpacity = 0
const hiHintOpacity = 1

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

const FadeUpAnimation = ({ animate, animationLength }) => css`
  ${animate
    ? css`
        ${FadeUpKeys} ${animationLength || 3}s ease-in-out infinite
      `
    : null}
`

const AnimatedP = styled(animated.p)`
  color: #384c45;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 22px;
  animation: ${FadeUpAnimation};
`

const ScrollHint = ({ children }) => {
  const { opacity } = useSpring({
    from: { opacity: loHintOpacity },
    to: { opacity: hiHintOpacity },
    delay: 1000,
    config: { duration: 5000 },
  })
  return (
    <AnimatedP
      animate={opacity.interpolate(v => v === hiHintOpacity)}
      style={{
        opacity,
      }}
    >
      {children}
    </AnimatedP>
  )
}

// const ScrollHint = ({show}) => {
//   const {}
//   const hintTransitions = useTransition({})
// }

ScrollHint.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollHint
