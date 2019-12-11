import React from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import TitleSVG from "./TitleSVG"

// need animated for react-spring values!

const SVGTainr = styled(animated.div)``

// own fade in animations with spring built in...override with external props?
const NavBar = ({ handleClick, ...rest }) => {
  console.log("%cnavbar with: ", "color: red", svgProps, rest)

  const _handleClick = e => {
    e.preventDefault()
    handleClick()
  }

  return (
    <>
      <SVGTainr onClick={_handleClick} {...rest}>
        <TitleSVG />
      </SVGTainr>
    </>
  )
}

export default NavBar
