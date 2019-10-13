import React, { useLayoutEffect, useState } from "react"

import styled from "styled-components"
import { animated, useSpring, useTransition } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import HeroImage from "../components/HeroImageParallax"
import AboutImage from "../components/AboutImageParallax"

import TitleSVG from "../components/TitleSVG"

const HeroTainr = styled(animated.div)`
  background: #191f1d;
`
const Hero = ({ children, outerProps, innerProps }) => {
  return (
    <VisibilitySensor>
      <HeroTainr {...outerProps}>
        <HeroImage {...innerProps} />
        {children}
      </HeroTainr>
    </VisibilitySensor>
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
  position: absolute;
`

const AboutContenTainr = styled(animated.div)``

const About = ({ innerProps, outerProps }) => {
  const [visible, setVisible] = useState(false)

  const imageProps = useSpring({ from: { opacity: `` } })

  return (
    <VisibilitySensor
      onChange={visible => {
        if (!visible) {
          setVisible(visible)
          console.log("%cabout revealed!", "color: yellow")
        }
      }}
    >
      <AboutTainr {...outerProps}>
        <AboutContenTainr {...innerProps}>
          <h2>just a header</h2>
          <p>some text to show the effect</p>
        </AboutContenTainr>
      </AboutTainr>
    </VisibilitySensor>
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

  const aboutVelocity = 0.6
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
      <About
        innerProps={{
          style: { backgroundColor: `pink` },
        }}
        outerProps={{
          style: {
            opacity: aboutOpacity,
            zIndex: 2,
            height: `600px`,
            top: `calc(100vh - ${aboutPos}px)`,
            width: "100%",
            overflow: "hidden",
          },
        }}
      />
    </MainTainr>
  )
}
