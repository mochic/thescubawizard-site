import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import TitleSVG from "../components/TitleSVG"

import FancyLink from "../components/FancyLink"

import HeroImage from "../components/HeroImage"

import sizes from "../sizes"
import devices from "../devices"

// const MainTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 80vh; /* 100vh felt wayyyy tooo long to scroll thru */

//   display: grid;
//   grid-template-areas:
//     ". . ."
//     ". . ."
//     ". link ."
//     ". . .";
//   grid-template-columns: 8% auto 8%;
//   grid-template-rows: 250px auto auto auto;

//   @media ${devices.laptop} {
//     height: 100vh;
//   }
// `

// const MainTainr = styled(animated.div)`
//   overflow: hidden;
//   height: 100vh;
//   padding: 8%;
//   background: red;
// `

// const MainTainr = styled(animated.div)`
//   overflow: hidden;
//   height: 500px;
// `

const MainTainr = styled(animated.section)`
  overflow: hidden;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
`

// const LinkTainr = styled(animated.div)`
//   z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
//   width: 100%;
//   margin-top: 80%;
// `

// const LinkTainr = styled(animated.div)`
//   z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
//   width: 100%;

//   position: absolute;
//   bottom: -10px;
// `

const LinkTainr = styled(animated.div)`
  z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
  width: 100%;

  position: absolute;
  bottom: 30%;
`

const Curtain = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: #191f1d;
  position: absolute;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`

const Hero = ({
  titleProps,
  linkTainrProps,
  curtainProps,
  mainTainrStyle,
  gradientProps,
}) => {
  const heroImageProps = {}

  const linkProps = useSpring({
    from: {
      arrowTransform: `translate3d(-10px,0,0)`,
      arrowOpacity: 0,
      textOpacity: 0,
    },
    to: [
      { textOpacity: 1 },
      {
        arrowTransform: `translate3d(0px,0,0)`,
        arrowOpacity: 1,
      },
    ],
    // reset: true,
    config: { ...config.molasses, duration: 500 },
  })

  console.log("%cHero Section rendered!", "color: red")

  return (
    <MainTainr style={{ ...mainTainrStyle }}>
      <LinkTainr style={{ ...linkTainrProps }}>
        <FancyLink
          to="/schedule"
          textStyle={{ fontWeight: 300, opacity: linkProps.textOpacity }}
          buttonStyle={{
            transform: linkProps.arrowTransform,
            opacity: linkProps.arrowOpacity,
          }}
          arrowProps={{
            style: {},
          }}
          containrProps={{
            style: {
              margin: `auto`,
              maxWidth: `${sizes.title.width}px`,
            },
          }}
        >
          Schedule a chat.
        </FancyLink>
      </LinkTainr>
      {/* <Curtain style={curtainProps} /> */}
      <ImageTainr>
        <HeroImage {...heroImageProps} gradientProps={gradientProps} />
      </ImageTainr>
    </MainTainr>
  )
}

export default Hero
