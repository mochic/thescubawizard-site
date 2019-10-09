import React from "react"

import { navigateTo } from "gatsby-link"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

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
`

const Containr = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArrowTainr = styled(animated.div)`
  position: absolute;
`

export default ({ to, children, textStyle, arrowProps }) => {
  const handleClick = e => {
    e.preventDefault()
    navigateTo(to)
  }

  // const textProps = useSpring({
  //   from: {},
  //   to: {},
  // })

  // const buttonProps = useSpring({
  //   from: {},
  //   to: {},
  // })

  return (
    <Containr>
      <P style={{ ...textStyle }}>{children}</P>
      <Button onClick={handleClick}>
        <ArrowTainr>
          <ArrowSVG style={{ ...arrowProps }} />
        </ArrowTainr>
      </Button>
    </Containr>
  )
}
