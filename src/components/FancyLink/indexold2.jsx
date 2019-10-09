import React, { useRef } from "react"

import { navigateTo } from "gatsby-link"
import styled from "styled-components"
import { animated, useSpring, useChain, config } from "react-spring"

import ArrowSVG from "./ArrowSVG"

const P = styled(animated.p)`
  color: #ffffff;
  font-family: playfair display;
`

const Button = styled(animated.button)`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0px;
`

const Containr = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonTainr = styled(animated.div)`
  position: relative;
`

export default ({ to, children, textStyle, arrowProps }) => {
  const handleClick = e => {
    e.preventDefault()
    navigateTo(to)
  }

  const textRef = useRef()
  const textProps = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    ref: textRef,
  })

  const buttonRef = useRef()
  const buttonProps = useSpring({
    from: { opacity: 0, transform: `translate3d(-20px,17px,0)` },
    to: { opacity: 1, transform: `translate3d(0px,17px,0)` },
    ref: buttonRef,
    config: config.molasses,
  })

  useChain([textRef, buttonRef], [0, 0.12])

  return (
    <Containr>
      <P style={{ ...textProps, ...textStyle }}>{children}</P>
      <ButtonTainr>
        <Button style={buttonProps} onClick={handleClick}>
          <ArrowSVG {...arrowProps} />
        </Button>
      </ButtonTainr>
    </Containr>
  )
}
