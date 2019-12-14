import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImage"
// import AboutImage from "../components/AboutImageParallax5"
// import AboutImageParallax5 from "../components/AboutImageParallax5"

import About from "../components/AboutSection"

// import Promise from "../components/PromiseThang2"
import Services from "../components/ServicesSection"

import Interested from "../components/InterestedSection"

import Footer from "../components/AnotherFooter"

import Statements from "../components/Statements3"

import TitleSVG from "../components/TitleSVG"

import FancyLink from "../components/FancyLink"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

const ADiv = styled(animated.div)``

// for media queries primarily
// const HeroTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 70vh;
// `

const HeroTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 100vh; /* it's the hero we want it to be the first thang u sees */
`

const MainTainr = styled(animated.div)`
  position: relative;
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

const HeroLinkTainr = styled(animated.div)`
  z-index: 1000 !important; /* we want our scheduling link always clickable! no matter wut */
  position: absolute;
  top: 65%;
  width: 70%;
  padding: 0 45px 0 45px;
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
      </>
    </VisibilitySensor>
  )
}

// intelligently scale with js :/
// show header and extra stuff if in tablet/desktop view!
// const AboutHeight = 900
// const AboutTainr = styled(animated.div)`
//   min-height: ${AboutHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

const AboutHeight = 900
const AboutTainr = styled(animated.div)`
  min-height: ${AboutHeight}px;
  width: 100%;
  position: relative;
  z-index: 1;
`

// z-index 1 so that our header doesnt get cut off...TODO: fix this so we dont need this hack solution

// const StatementsHeight = 600
// const StatementsTainr = styled.div`
//   height: ${StatementsHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

// const PromiseHeight = 700
// const PromiseTainr = styled.div`
//   min-height: ${PromiseHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

// const PromiseHeight = 500
// const PromiseTainr = styled.div`
//   height: ${PromiseHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

// const PromiseHeight = 700
// const PromiseTainr = styled.div`
//   min-height: ${PromiseHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

export default () => {
  const [pos, setPos] = useState()

  // maybe use different based on browser support, etc....
  // const rawHandler = () => {
  //   setPos(window.pageYOffset)
  // }
  // velocities
  const heroVelocity = 0.8
  const aboutVelocity = 0.8
  const servicesVelocity = 0.8

  const [heroProps, setHeroProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))
  const [aboutProps, setAboutProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))
  const [servicesProps, setServicesProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))

  const rawHandler = () => {
    setPos(window.pageYOffset)
    setHeroProps({
      transform: `translate3d(${heroVelocity * window.pageYOffset},0px,0)`,
    })
    setAboutProps({
      transform: `translate3d(${aboutVelocity * window.pageYOffset},0px,0)`,
    })
    setServicesProps({
      transform: `translate3d(${servicesVelocity * window.pageYOffset},0px,0)`,
    })
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

  console.log("%cmain page rendered!", "color: blue")

  return (
    <MainTainr>
      <HeroTainr className="hero-tainr">
        <Hero pos={pos} />
      </HeroTainr>
      <About scrollPos={pos} />
      <Services scrollPos={pos} />
      <Interested />
      <div>
        <Footer />
      </div>
    </MainTainr>
  )
}
