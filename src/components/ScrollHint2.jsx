import React, { useRef, useState, useCallback, useLayoutEffect } from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring } from "react-spring"

import { PropTypes, elementType } from "prop-types"

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
  font-family: playfair display;
  font-weight: 300;
  font-size: 16px;
  animation: ${FadeUpAnimation};
`

// heavily based on: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

const useScrollPosition = (effect, deps, element, immediate, useWindow) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  // throttle state changes
  const callback = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout === null) {
        if (immediate) {
          // run the callback immediately
          callback()
        }
        throttleTimeout = setTimeout(callback, 3000)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, deps)
}

const ScrollHint = ({ children }) => {
  const { opacity } = useSpring({
    from: { opacity: loHintOpacity },
    to: { opacity: show ? hiHintOpacity : loHintOpacity },
    delay: 1000,
    config: { duration: 5000 },
  })

  const [show, setShow] = useState(false)

  //   useLayoutEffect(() => {
  //     setTimeout(() => setShow(true), 4000)
  //   })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setShow(currPos.Y === prevPos.Y)
    },
    [show],
    null,
    true
  )

  return (
    <AnimatedP
      style={{
        opacity,
      }}
      {...{ animate: opacity.interpolate(v => v === hiHintOpacity) }}
    >
      {children}
    </AnimatedP>
  )
}

ScrollHint.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollHint
