import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import TitleSVG from "../components/TitleSVGEmbed"

import FancyLink from "../components/FancyLink"

import HeroImage from "../components/HeroImage"

import sizes from "../sizes"
import shared from "../shared"
import devices from "../devices"

const MainTainr = styled(animated.div)`
  z-index: 1;
  overflow: hidden;
  position: relative;
  height: 80vh; /* 100vh felt wayyyy tooo long to scroll thru */
  min-height: ${shared.minHeroHeight}px;

  @media ${devices.laptop} {
    height: 100vh;
  }
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
`

const HintTainr = styled(animated.div)`
  width: 100%;
  text-align: center;
  mix-blend-mode: overlay;
  z-index: 5;
`

const HeroLinkTainr = styled(animated.div)`
  z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0;
  mix-blend-mode: overlay;
`

const ContenTainr = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  position: absolute;
  bottom: 20px;
  width: 100%;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row-reverse;
    bottom: 10%;
  }
`

const Hero = ({
  titleProps,
  linkTainrProps,
  curtainProps,
  scrollHintProps,
  containrProps,
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

  // const hintProps = {}
  // const [hintProps, setHintProps, stopHintProps] = useSpring(() => ({
  //   opacity: 1,
  //   // transform: `translate3d(0,60px,0)`
  // }))
  const hintProps = {}
  // const hintProps = useSpring({
  //   from: { opacity: 0, transform: `translate3d(0,20px,0)` },
  //   to: { opacity: 1, transform: `translate3d(0,0px,0)` },
  //   delay: 1000,
  //   config: { ...config.molasses, duration: 500 },
  // })

  console.log("%cHero Section rendered!", "color: red")

  return (
    <MainTainr style={{ ...containrProps }}>
      <Curtain style={curtainProps} />
      <ImageTainr style={{ background: `red` }}>
        <HeroImage
          style={{ background: `yellow` }}
          // imageProps={{
          //   style: {
          //     display: `grid`,
          //     gridTemplateAreas: ``,
          //     gridTemplateColumns: `auto auto auto`,
          //   },
          // }}
        >
          <TitleSVG
            style={{
              transform: `scale(0.95)`, // TODO use media queries to make this max 0.75 on smaller mobile devices, also make link a child so it scales with image
              position: `absolute`,
              zIndex: 1000,
              top: `100px`,
              width: `100%`,
              textAlign: `center`,
              gridArea: `title`,
            }}
          />
        </HeroImage>
      </ImageTainr>
      <ContenTainr>
        <HeroLinkTainr style={{ ...linkTainrProps }}>
          <FancyLink
            to="/schedule"
            textStyle={{
              fontWeight: 300,
              fontFamily: `open sans`,
              opacity: linkProps.textOpacity,
            }}
            buttonStyle={{
              transform: linkProps.arrowTransform,
              opacity: linkProps.arrowOpacity,
              padding: "10px 0 10px 10px",
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
        </HeroLinkTainr>
        <HintTainr>
          <animated.p
            style={{
              color: `#ffffff`,
              fontFamily: `open sans`,
              fontWeight: 300,
              transform: `translate3d(0px,0px,0px)`, // somehow fixes overlay on mobile ios........
              ...hintProps,
              ...scrollHintProps,
            }}
          >
            Scroll for more.
          </animated.p>
        </HintTainr>
      </ContenTainr>
    </MainTainr>
  )
}

export default Hero
