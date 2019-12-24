import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import TitleSVG from "../components/TitleSVG"

import FancyLink from "../components/FancyLink"

import HeroImage from "../components/HeroImage"

import VisibilitySensor from "react-visibility-sensor"

import devices from "../devices"

// const HeroTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 100vh; /* it's the hero we want it to be the first thang u sees */
// `

const HeroTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 80vh; /* 100vh felt wayyyy tooo long to scroll thru */

  @media ${devices.laptop} {
    height: 100vh;
  }
`

const HeroLinkTainr = styled(animated.div)`
  z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
  position: absolute;
  top: 65%;
  width: 100%;
`

const TitleTainr = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
`

const ContentTainr = styled(animated.div)`
  background: red;
  display: grid;
  grid-template-areas:
    "title"
    "link";
  grid-template-columns: auto;
  grid-template-rows: auto auto;
`

const Curtain = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: #191f1d;
  position: absolute;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  position: relative;
  z-index: -1;
`

const Hero = ({ titleProps, linkTainrProps, curtainProps }) => {
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

  const [revealProps, setRevealProps] = useSpring(() => ({
    linkOpacity: 0,
  }))

  console.log("%cHero Section rendered!", "color: red")

  return (
    <HeroTainr>
      <TitleTainr {...titleProps}>
        <TitleSVG style={{ margin: `0 26px 0 26px`, maxWidth: `270px` }} />
      </TitleTainr>
      <HeroLinkTainr {...linkTainrProps}>
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
              margin: `0 26px 0 26px`,
              maxWidth: `270px`,
            },
          }}
        >
          Schedule a chat.
        </FancyLink>
      </HeroLinkTainr>
      <Curtain style={curtainProps} />
      <ImageTainr>
        <HeroImage {...heroImageProps} />
      </ImageTainr>
    </HeroTainr>
  )
}

export default Hero
