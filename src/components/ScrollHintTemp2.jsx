import React from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring } from "react-spring"

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

const FadeUpAnimation = ({ length }) => css`
  ${FadeUpKeys} ${length || 3}s ease-in-out infinite
`

const AnimatedP = styled(animated.p)`
  color: #384c45;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 22px;
  animation: ${props => (props.animation ? FadeUpAnimation : null)};
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
      animation={opacity.interpolate(v => v === hiHintOpacity)}
      style={{
        opacity,
      }}
    >
      {children}
    </AnimatedP>
  )
}

ScrollHint.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollHint
