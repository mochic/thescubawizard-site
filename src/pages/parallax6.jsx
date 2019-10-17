import React, { useLayoutEffect, useState } from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring, useTransition, config } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import debounce from "lodash/debounce"

import smoothscroll from "smoothscroll-polyfill"

import HeroImage from "../components/HeroImageParallax"
import AboutImage from "../components/AboutImageParallax5"
import Interested from "../components/InterestedParallax"

import AboutThing from "../components/AboutThingParallax2"

import TitleSVG from "../components/TitleSVG"

import devices from "../devices"

smoothscroll.polyfill()

const HeroTainr = styled(animated.div)`
  background: #191f1d;
`

const Hero = ({ outerProps, innerProps, titleProps, titleSVGProps }) => {
  const [visible, setVisible] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    console.log("%ctitle clicked!", "color: red")
    if (!visible) {
      window.scrollTo({ top: 0, behavior: `smooth` })
      console.log("%cscrolling to top!", "color: green")
    }
  }

  return (
    <VisibilitySensor
      partialVisibility="top"
      onChange={v => {
        if (visible !== v) {
          setVisible(v)
          console.log("%chero visibility changed", "color: purple", v)
        }
      }}
    >
      <HeroTainr {...outerProps}>
        <HeroImage {...innerProps} />
        <div onClick={handleClick} {...titleProps}>
          <TitleSVG {...titleSVGProps} />
        </div>
      </HeroTainr>
    </VisibilitySensor>
  )
}

const MainTainr = styled(animated.div)`
  background: green;
  position: relative;
  height: calc(100vh + ${885}px);
`

const OuterHeroTainr = styled(animated.div)`
  max-height: 600px;
  overflow: hidden;
`

const AboutHeight = 500

// we supply height/width to component because we're wrapping a Visibiliy Sensor
// which will not correctly percolate the height/width to the component we care
// about
const OuterAboutTainr = styled(animated.div)`
  overflow: hidden;
  background: yellow;
`

export default () => {
  const [pos, setPos] = useState(0)

  const [heroVisible, setHeroVisible] = useState(false)

  const handleScroll = e => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset)
  }

  const debouncedHandle = debounce(handleScroll, 20)

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [])

  const titleTop = 300 - pos * 1.5
  const titleTopPadding = 20
  console.log("titleTop", titleTop)

  const aboutVelocity = 0.6
  const aboutPos = aboutVelocity * pos
  const aboutOpacity = pos / 100

  const aboutImageVelocity = 0.05
  const aboutImagePos = aboutImageVelocity * pos

  const titleRate = 0.6 / 300
  const titleScaleCalc = 1.6 - pos * titleRate
  const titleScale = titleScaleCalc > 1.0 ? titleScaleCalc : 1.0

  // rounding to nearest pixel is apparently better
  const contentOffset = [0, Math.ceil(pos / 1.2), 0] // the movement is adding up over time...this is bad...

  const contentVelocities = [0, 1.5, 0]

  const elementPositions = []

  return (
    <MainTainr>
      <OuterHeroTainr>
        <Hero
          outerProps={{
            style: {
              position: `relative`,
            },
          }}
          innerProps={{
            style: {
              opacity: pos > 100 ? 80 / pos : 1,
            },
          }}
          titleProps={{
            style: {
              position: `fixed`,
              zIndex: 1000,
              top: `${
                titleTop > titleTopPadding ? titleTop : titleTopPadding
              }px`,
              width: `100%`,
              textAlign: `center`,
            },
          }}
          titleSVGProps={{ style: { transform: `scale(${titleScale})` } }}
        />
      </OuterHeroTainr>
      {/* about block so page accounts for about*/}
      <OuterAboutTainr>
        <AboutThing
          outerProps={{
            style: {
              minHeight: `900px`,
              maxHeight: `1100px`,
            },
          }}
          imageTainrProps={{
            style: {
              left: `-${aboutImagePos}px`,
              opacity: aboutOpacity,
            },
          }}
          contentOffset={contentOffset}
          contentPos={pos}
          contentVelocities={contentVelocities}
          // contentProps={{
          //   style: { bottom: `${contentPos}px` },
          // }}
        />
      </OuterAboutTainr>
      <div>
        <Interested />
      </div>
    </MainTainr>
  )
}
