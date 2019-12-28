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

import Footer from "../components/Footer"

import Statements from "../components/Statements3"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

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
  background: red;
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
      link: -0.1,
      curtain: 0.01,
    },
    about: {
      content: -0.08,
      header: -0.04,
    },
    services: {
      content: -0.03,
    },
  }

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(0px,0px,0)`,
    linkTransform: `translate3d(0px,0px,0)`,
    linkOpacity: 1,
    curtainOpacity: 0,
    // config: { duration: 5000 },
  }))

  const [heroLinkProps, setHeroLinkProps] = useSpring(() => ({
    linkTransform: `translate3d(0px,0px,0px)`,
    linkOpacity: 0,
  }))

  // const [aboutProps, setAboutProps] = useSpring(() => ({
  //   transform: `translate3d(0px,0px,0)`,
  // }))
  const [servicesProps, setServicesProps] = useSpring(() => ({
    contentTransform: `translate3d(0px,0px,0)`,
    h0Transform: `translate3d(200px, 0px, 0px)`,
    h1Transform: `translate3d(-200px, 0px, 0px)`,
  }))

  const [aboutProps, setAboutProps] = useSpring(() => ({
    contentTransform: `translate3d(0px,0px,0px)`,
    headerTransform: `translate3d(0px,0px,0px)`,
  }))

  const [revealProps, setRevealProps] = useSpring(() => ({
    aboutCurtainOpacity: 1,
    servicesCurtainOpacity: 1,
    config: { ...config.stiff, duration: 2000 },
  }))

  const [parallaxProps, setParallaxProps] = useSpring(() => ({
    aboutTransform: `translate3d(0px,0px,0px)`,
  }))

  const rawHandler = () => {
    // setPos(window.pageYOffset)
    setHeroProps({
      titleTransform: `translate3d(0px,${velocities.hero.title *
        window.pageYOffset}px,0)`,
      curtainOpacity: velocities.hero.curtain * window.pageYOffset,
      linkTransform: `translate3d(0px,${velocities.hero.link}px,0)`,
    })

    setAboutProps({
      contentTransform: `translate3d(0px,${velocities.about.content *
        window.pageYOffset}px,0px)`,
      headerTransform: `translate3d(${velocities.about.header *
        window.pageYOffset}px,0px,0px)`,
    })

    setServicesProps({
      contentTransform: `translate3d(0px,${velocities.services.content *
        window.pageYOffset}px,0px)`,
      h0Transform: `translate3d(${velocities.services.content *
        window.pageYOffset}px,0px,0px)`,
      h1Transform: `translate3d(${-velocities.services.content *
        window.pageYOffset}px,0px,0px)`,
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
      <VisibilitySensor
        onChange={v => {
          console.log("Hero visibility changed...", v)
          setHeroProps({
            linkOpacity: v ? 1 : 0,
          })
        }}
      >
        <Hero
          titleProps={{ style: { transform: heroProps.titleTransform } }}
          curtainProps={{ opacity: heroProps.curtainOpacity }}
          linkTainrProps={{
            opacity: heroProps.linkOpacity,
            transform: heroProps.linkTransform,
          }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        onChange={v => {
          console.log("About visibility changed...", v)
          setRevealProps({
            aboutCurtainOpacity: v ? 0 : 1,
          })
        }}
      >
        <About
          contentTainrProps={{ transform: aboutProps.contentTransform }}
          headerProps={{ transform: aboutProps.headerTransform }}
          curtainProps={{ opacity: revealProps.aboutCurtainOpacity }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        onChange={v => {
          console.log("Services visibility changed...", v)
          setRevealProps({
            servicesCurtainOpacity: v ? 0 : 1,
          })
        }}
      >
        <Services
          contentProps={{ transform: servicesProps.contentTransform }}
          curtainProps={{ opacity: revealProps.servicesCurtainOpacity }}
          h2Props0={{ transform: servicesProps.h0Transform }}
          h2Props1={{ transform: servicesProps.h1Transform }}
        />
      </VisibilitySensor>
      <Interested />
      <div>
        <Footer />
      </div>
    </MainTainr>
  )
}
