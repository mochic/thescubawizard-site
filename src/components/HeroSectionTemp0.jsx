import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import TitleSVG from "../components/TitleSVG"

import FancyLink from "../components/FancyLink"

import HeroImage from "../components/HeroImage"

import VisibilitySensor from "react-visibility-sensor"

const HeroTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 100vh; /* it's the hero we want it to be the first thang u sees */
`

const HeroLinkTainr = styled(animated.div)`
  z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
  position: absolute;
  top: 65%;
  width: 70%;
  padding: 0 45px 0 45px;
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

const ContentTainr = styled(animated.div)``

const Hero = ({ contentTainrProps, titleProps }) => {
  const [visible, setVisible] = useState(false)

  //   const heroImageProps = {
  //     gradientProps: {
  //       gv: Math.max(80 - (pos * 80) / 150, 1), // gradient breaks / looks strange when it goes lower than 1...
  //     },
  //   }

  const heroImageProps = {}

  const tSVGStyle = {
    transform: `scale(${1.5})`,
  }

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
    <VisibilitySensor
      partialVisibility
      offset={{ top: 50 }}
      onChange={v => {
        console.log("%chero visibility changed!", v)
        setVisible(v)
      }}
    >
      <HeroTainr>
        <TitleTainr {...titleProps}>
          <TitleSVG style={tSVGStyle} />
        </TitleTainr>
        <HeroLinkTainr>
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
          >
            Schedule a chat.
          </FancyLink>
        </HeroLinkTainr>
        <HeroImage {...heroImageProps} />
      </HeroTainr>
    </VisibilitySensor>
  )
}

export default Hero
