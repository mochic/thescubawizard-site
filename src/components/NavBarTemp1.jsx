import React, { useState } from "react"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import { navigate } from "gatsby-link"

import devices from "../devices"
import sizes from "../sizes"
import shared from "../shared"

import TitleSVG from "./TitleSVG"

const navTainrHeight = 70
// filter out props that higher level components dont expect and raise weird errors...
// const NavTainr = styled(({ ...props }) => <animated.div {...props} />)`
//   z-index: 1000 !important; /* really important for being visible... */
//   width: 100%;
//   text-align: center;
//   padding: 0;
//   margin: 0;
//   position: sticky;
//   top: 0px;
//   height: ${navTainrHeight}px;
//   display: grid;
//   backdrop-filter: blur(2px);
//   float: left;

//   grid-template-areas: ". title .";
//   grid-template-columns: auto auto auto;
// `

const NavTainr = styled(({ ...props }) => <animated.div {...props} />)`
  z-index: 1000 !important; /* really important for being visible... */
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0px;
  height: ${navTainrHeight}px;
  display: grid;
  backdrop-filter: blur(2px);
  float: left;

  grid-template-areas: ". title .";
  grid-template-columns: auto auto auto;
`

export default ({ style, handleTitleClick, ...rest }) => {
  // default method
  const _handleTitleClick = e => {
    console.log("%cdefault: title clicked...", "color: green")
    navigate("/")
  }

  return (
    <NavTainr style={{ ...style }}>
      <TitleSVG
        style={{
          gridArea: `title`,
          width: `100%`,
          maxWidth: `${sizes.title.width}px`,
          margin: `auto`,
        }}
        // default handler...
        onClick={handleTitleClick || _handleTitleClick}
      />
    </NavTainr>
  )
}
