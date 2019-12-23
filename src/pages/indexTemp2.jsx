import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImage"
import Hero from "../components/HeroSection"
// import AboutImage from "../components/AboutImageParallax5"
// import AboutImageParallax5 from "../components/AboutImageParallax5"

import About from "../components/AboutSection"

// import Promise from "../components/PromiseThang2"
import Services from "../components/ServicesSection"

import Interested from "../components/InterestedSection"

import Footer from "../components/AnotherFooter"

import Statements from "../components/Statements3"

import device from "../devices"

const ADiv = styled(animated.div)``

const MainTainr = styled(animated.div)`
  position: relative;
`

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
  const aboutVelocity = -0.08
  const servicesVelocity = 0.8

  const velocities = {
    hero: {
      title: -0.1,
      link: -0.08,
    },
  }

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(0px,0px,0)`,
    linkTransform: `translate3d(0px,0px,0)`,
  }))
  const [aboutProps, setAboutProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))
  const [servicesProps, setServicesProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))

  const [aboutContentTainrProps, setAboutContentTainrProps] = useSpring(() => ({
    transform: `translate3d(0px,0px,0)`,
  }))

  const rawHandler = () => {
    // setPos(window.pageYOffset)
    setHeroProps({
      titleTransform: `translate3d(0px,${velocities.hero.title *
        window.pageYOffset}px,0)`,
    })
    setAboutProps({
      transform: `translate3d(${aboutVelocity * window.pageYOffset},0px,0)`,
    })
    setServicesProps({
      transform: `translate3d(${servicesVelocity * window.pageYOffset},0px,0)`,
    })
    setAboutContentTainrProps({
      transform: `translate3d(0px,${aboutVelocity * window.pageYOffset}px,0)`,
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

  console.log("%cIndex rendered!", "color: red")

  return (
    <MainTainr>
      <Hero titleProps={{ style: { transform: heroProps.titleTransform } }} />
      <About contentTainrProps={aboutContentTainrProps} />
      <Services scrollPos={pos} />
      <Interested />
      <div>
        <Footer />
      </div>
    </MainTainr>
  )
}
