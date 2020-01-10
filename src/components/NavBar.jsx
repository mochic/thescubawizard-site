import React, { useState } from "react"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import { navigate } from "gatsby-link"

import devices from "../devices"
import sizes from "../sizes"
import shared from "../shared"

import TitleSVG from "./TitleSVGEmbed"

// const navTainrHeight = 70
// // filter out props that higher level components dont expect and raise weird errors...
// // const NavTainr = styled(({ ...props }) => <animated.div {...props} />)`
// //   z-index: 1000 !important; /* really important for being visible... */
// //   width: 100%;
// //   text-align: center;
// //   padding: 0;
// //   margin: 0;
// //   position: sticky;
// //   top: 0px;
// //   height: ${navTainrHeight}px;
// //   display: grid;
// //   backdrop-filter: blur(2px);
// //   float: left;

// //   grid-template-areas: ". title .";
// //   grid-template-columns: auto auto auto;
// // `

// const NavTainr = styled(({ ...props }) => <animated.div {...props} />)`
//   z-index: 1000 !important; /* really important for being visible... */
//   width: 100%;
//   text-align: center;
//   padding: 0;
//   margin: 0;
//   position: fixed;
//   top: 0px;
//   height: ${navTainrHeight}px;
//   display: grid;
//   backdrop-filter: blur(2px);
//   float: left;

//   grid-template-areas: ". title .";
//   grid-template-columns: auto auto auto;
// `

// export default ({ style, handleTitleClick, ...rest }) => {

//   return (
//     <NavTainr style={{ ...style }}>
//       <TitleSVG
//         style={{
//           gridArea: `title`,
//           width: `100%`,
//           maxWidth: `${sizes.title.width}px`,
//           margin: `auto`,
//         }}
//         // default handler...
//         onClick={handleTitleClick || _handleTitleClick}
//       />
//     </NavTainr>
//   )
// }

// const Containr = styled(animated.div)`
//   position: fixed;
//   top: 0px;
//   right: 0px;
//   z-index: 1000;
//   text-align: right;
//   mix-blend-mode: soft-light;
// `

const Containr = styled(animated.div)`
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  text-align: right;
  mix-blend-mode: overlay;
`

// const BorderTainr = styled(animated.div)``

const HomeLinkTainr = styled(animated.div)`
  transform: translate3d(0, 0, 0);
`

export default ({
  homeSVGProps,
  homeLinkProps,
  gradientProps,
  handleHomeClick,
  ...props
}) => {
  // default method
  const _handleHomeClick = e => {
    console.log("%cdefault: title clicked...", "color: green")
    navigate("/")
  }

  return (
    <Containr {...props}>
      <HomeLinkTainr
        style={{ padding: `7px`, textAlign: `right` }}
        {...homeLinkProps}
      >
        <TitleSVG
          height={`56px`}
          width={`56px`}
          fill={`#ffffff80`}
          style={{ mixBlendMode: `overlay` }}
          onClick={handleHomeClick || _handleHomeClick}
          {...props}
        />
      </HomeLinkTainr>
    </Containr>
  )
}
