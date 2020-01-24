import React, { useRef } from "react"

import { navigate } from "gatsby-link"
import styled from "styled-components"
import { animated, useSpring, useChain, config } from "react-spring"

import ArrowSVG from "./ArrowSVG"

/*
NOTES
-----
- P and Button have the same padding so that they are well spaced
when in row-mode (when width of div is ~100px) and not weird looking
when in column-mode (when width of div > 100px)
*/

const P = styled(animated.p)`
  color: #ffffff;
  font-family: playfair display;
  padding: 0; /* dont override margin it fucks everything up */
`

// const Button = styled(animated.button)`
//   background: none;
//   border: none;
//   margin: 5px auto 5px auto;
//   padding: 0;
// `

const Button = styled(animated.button)`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`

const Containr = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
`

const ButtonTainr = styled(animated.div)`
  position: relative;
  margin: auto 0px auto auto;
`

export default ({
  to,
  children,
  buttonStyle,
  textStyle,
  arrowProps,
  containrProps,
  // fancyClick
}) => {
  const handleClick = e => {
    e.preventDefault()
    console.log("%cfancy link clicked! navigating to: ", "color: pink", to)
    navigate(to)
  }

  const textProps = {}
  const buttonProps = {}

  // const [outerButtonProps, setOuterButtonProps] = useSpring({})

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
