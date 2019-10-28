import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImageParallax2"
// import AboutImage from "../components/AboutImageParallax5"
// import AboutImageParallax5 from "../components/AboutImageParallax5"

import About from "../components/AnotherAbout5"

import Promise from "../components/PromiseThang2"

import Interested from "../components/InterestedParallax2"

import TitleSVG from "../components/TitleSVG"

import FancyLink from "../components/FancyLink"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

const ADiv = styled(animated.div)``

// for media queries primarily
const HeroTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 70vh;
`

const MainTainr = styled(animated.div)`
  position: relative;
`

// const TitleTainr = styled(animated.div)`
//   z-index: 1000;
//   width: 100%;
//   text-align: center;
//   padding: 0;
//   margin: auto;
// `

const TitleTainr = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
`

const Hero = ({ pos }) => {
  const [visible, setVisible] = useState(false)

  const heroImageProps = {
    gradientProps: {
      gv: Math.max(80 - (pos * 80) / 150, 1), // gradient breaks / looks strange when it goes lower than 1...
    },
  }

  const titleStyle = {}

  const tSVGStyle = {
    transform: `scale(${1.5})`,
  }

  const linkProps = {}

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 50 }}
      onChange={v => {
        console.log("%chero visibility changed!", v)
        setVisible(v)
      }}
    >
      <>
        <TitleTainr style={titleStyle}>
          <TitleSVG style={tSVGStyle} />
        </TitleTainr>
        <FancyLink to="/contact" {...linkProps}>
          Schedule a chat.
        </FancyLink>
        <HeroImage {...heroImageProps} />
      </>
    </VisibilitySensor>
  )
}

// intelligently scale with js :/
const AboutHeight = 900
const AboutTainr = styled(animated.div)`
  min-height: ${AboutHeight}px;
  width: 100%;
  position: relative;
  z-index: 1;
`
// z-index 1 so that our header doesnt get cut off...TODO: fix this so we dont need this hack solution

const PromiseHeight = 700
const PromiseTainr = styled.div`
  min-height: ${PromiseHeight}px;
  width: 100%;
  position: relative;
  z-index: 1;
`

export default () => {
  const [pos, setPos] = useState()

  // maybe use different based on browser support, etc....
  const rawHandler = () => {
    setPos(window.pageYOffset)
  }

  const handleScroll = e => {
    window.requestAnimationFrame(rawHandler)
  }

  //   const debouncedHandle = debounce(handleScroll, 20)
  const debouncedHandle = handleScroll

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [pos]) // if we dont do this handleScroll will only evaluate pos.current to its initial 0 from each render

  return (
    <MainTainr>
      <HeroTainr className="hero-tainr">
        <Hero pos={pos} />
      </HeroTainr>
      <AboutTainr>
        <About scrollPos={pos} />
      </AboutTainr>
      <PromiseTainr>
        <Promise scrollPos={pos} />
      </PromiseTainr>
      <div>
        <Interested />
      </div>
    </MainTainr>
  )
}
