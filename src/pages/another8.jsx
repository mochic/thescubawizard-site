import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImageParallax2"
// import AboutImage from "../components/AboutImageParallax5"
// import AboutImageParallax5 from "../components/AboutImageParallax5"

import About from "../components/AnotherAbout4"

import TitleSVG from "../components/TitleSVG"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

const ADiv = styled(animated.div)``

// for media queries primarily
const HeroTainr = styled(animated.div)`
  overflow: hidden;
  background: yellow;
  position: relative;
  height: 70vh;
`

const AboutTainr = styled(animated.div)`
  min-height: 800px;
  overflow: hidden;
  background: blue;
`

const MainTainr = styled(animated.div)`
  position: relative;
`

const TitleTainr = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  position: fixed;
  text-align: center;
`

const BlurringDiv = styled(animated.div)`
  background: linear-gradient(180deg, rgba(25, 31, 29, 0) 0%, #191f1d 128.99%);
  height: 194px;
  width: 100%;
`

// intelligently scale with js :/
const AboutHeight = 900
const AboutTainr2 = styled(animated.div)`
  min-height: ${AboutHeight}px;
  width: 100%;
  position: relative;
  z-index: 1;
`
// z-index 1 so that our header doesnt get cut off...TODO: fix this so we dont need this hack solution

export default () => {
  const [pos, setPos] = useState()

  // maybe use different based on browser support, etc....
  const rawHandler = () => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset) // window.scrollTop() doesnt work on safari?
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

  const heroImageProps = {
    gradientProps: {
      gv: Math.max(80 - (pos * 80) / 150, 1), // gradient breaks / looks strange when it goes lower than 1...
    },
  }

  const finalHeaderTop = 0
  const headerTopPadding = 300

  const atTop = true

  const titleStyle = {
    top: `${headerTopPadding + finalHeaderTop}px`,
    transform: `translate3d(0,-${
      pos > headerTopPadding ? headerTopPadding : Math.ceil(pos)
    }px,0px)`,
    background: atTop ? `none` : `none`,
    padding: `10px 0 10px 0`,
  }

  const tSVGStyle = {
    transform: `scale(${1.5})`,
  }

  console.log(heroImageProps)
  return (
    <MainTainr>
      <TitleTainr style={titleStyle}>
        <TitleSVG style={tSVGStyle} />
      </TitleTainr>
      <HeroTainr className="hero-tainr">
        <HeroImage {...heroImageProps} />
      </HeroTainr>
      <AboutTainr2>
        <About scrollPos={pos} />
      </AboutTainr2>
    </MainTainr>
  )
}
