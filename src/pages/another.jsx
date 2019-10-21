import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImageParallax"
// import AboutImage from "../components/AboutImageParallax5"
import AboutImageParallax5 from "../components/AboutImageParallax5"

const ADiv = styled(animated.div)``

// for media queries primarily
const HeroTainr = styled(animated.div)`
  min-height: 600px;
  overflow: hidden;'
  background: yellow;
`

const AboutTainr = styled(animated.div)`
  min-height: 800px;
  overflow: hidden;
  background: blue;
`

const MainTainr = styled(animated.div)`
  position: relative;
  background: red;
`

// for auto webkit stuff
const AH1 = styled(animated.h1)`
  position: sticky;
  top: 0;
`

const Depths = styled(animated.div)`
  position: absolute;
  background: yellow;
  height: 500px;
  width: 100%;
  z-index: 1000;
`

export default () => {
  const [pos, setPos] = useState()

  const handleScroll = e => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset) // window.scrollTop() doesnt work on safari?
  }

  const debouncedHandle = debounce(handleScroll, 20)

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [pos]) // if we dont do this handleScroll will only evaluate pos.current to its initial 0 from each render

  const heroImageProps = {
    style: {
      opacity: 1 - pos / 300, // scroll 300px before fading out
    },
  }
  console.log(heroImageProps)
  return (
    <MainTainr>
      <HeroTainr>
        <HeroImage imageProps={heroImageProps} />
      </HeroTainr>
      <AH1>the scuba wizard</AH1>
      <AboutTainr>
        <AboutImageParallax5 />
      </AboutTainr>
      <Depths />
    </MainTainr>
  )
}
