import React, { useRef } from "react"

import { navigate } from "gatsby-link"
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
  transform: translate3d(0, 17px, 0);
`

export default ({
  to,
  children,
  buttonStyle,
  textStyle,
  arrowProps,
  containrProps,
}) => {
  const handleClick = e => {
    e.preventDefault()
    console.log("%cfancy link clicked! navigating to: ", "color: pink", to)
    navigate(to)
  }

  const textProps = {}
  const buttonProps = {}

  return (
    <Containr {...containrProps}>
      <P style={{ ...textProps, ...textStyle }}>{children}</P>
      <ButtonTainr>
        <Button
          style={{ ...buttonProps, ...buttonStyle }}
          onClick={handleClick}
        >
          <ArrowSVG {...arrowProps} />
        </Button>
      </ButtonTainr>
    </Containr>
  )
}
