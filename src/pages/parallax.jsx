import React, { useLayoutEffect, useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import HeroImage from "../components/HeroImageParallax"

import TitleSVG from "../components/TitleSVG"

const HeroTainr = styled(animated.div)`
  background: #191f1d;
`
const Hero = ({ children, outerProps, innerProps }) => {
  return (
    <HeroTainr {...outerProps}>
      <HeroImage {...innerProps} />
      {children}
    </HeroTainr>
  )
}

const TitleTainr = styled(animated.div)``

const Title = ({ innerProps, outerProps, linkProps }) => {
  return (
    <TitleTainr {...outerProps}>
      <TitleSVG {...innerProps} />
    </TitleTainr>
  )
}

const AboutTainr = styled(animated.div)`
  background: red;
  color: white;
  font-family: open sans;
  font-weight: 300;
  font-size: 18px;
  position: relative;
`

const AboutContenTainr = styled(animated.div)``

const About = ({ innerProps, outerProps }) => {
  return (
    <AboutTainr {...outerProps}>
      <AboutContenTainr {...innerProps}>
        <h2>just a header</h2>
        <p>some text to show the effect</p>
      </AboutContenTainr>
    </AboutTainr>
  )
}

const MainTainr = styled(animated.div)`
  background: green;
  position: relative;
  height: 900px;
`

export default () => {
  const [pos, setPos] = useState(0)

  const [heroVisible, setHeroVisible] = useState(false)

  const handleScroll = e => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const titleTop = 300 - pos * 1.5
  const titleTopPadding = 20
  console.log("titleTop", titleTop)

  const aboutVelocity = 10
  const aboutPos = aboutVelocity * pos
  const aboutOpacity = pos / 100

  const titleRate = 0.6 / 300
  const titleScaleCalc = 1.6 - pos * titleRate
  const titleScale = titleScaleCalc > 1.0 ? titleScaleCalc : 1.0

  return (
    <MainTainr>
      <Title
        innerProps={{ style: { transform: `scale(${titleScale})` } }}
        outerProps={{
          style: {
            position: `fixed`,
            zIndex: 1,
            top: `${titleTop > titleTopPadding ? titleTop : titleTopPadding}px`,
            width: `100%`,
            textAlign: `center`,
          },
        }}
      />
      <VisibilitySensor
        onChange={visible => {
          if (visible != heroVisible) {
            setHeroVisible(visible)
            console.log("%chero visibility changed!", "color: pink", visible)
          }
        }}
      >
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
        />
      </VisibilitySensor>
      <About
        innerProps={{
          style: { backgroundColor: `pink`, bottom: `${aboutPos}px` },
        }}
        outerProps={{
          style: {
            opacity: aboutOpacity,
            zIndex: 2,
            height: `600px`,
          },
        }}
      />
    </MainTainr>
  )
}
