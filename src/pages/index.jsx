import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import Hero from "../components/HeroSection"

import debounce from "lodash/debounce"

import About from "../components/AboutSection"

import Services from "../components/ServicesSection"

import Interested from "../components/InterestedSection"

import Footer from "../components/Footer"

import TitleSVG from "../components/TitleSVG"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

const ADiv = styled(animated.div)``

const MainTainr = styled(animated.div)`
  position: relative;
  min-height: 100vh;
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

export default () => {
  const [pos, setPos] = useState()

  // maybe use different based on browser support, etc....
  // const rawHandler = () => {
  //   setPos(window.pageYOffset)
  // }
  // velocities
  // const heroVelocity = 0.8
  // const aboutVelocity = -0.08
  // const servicesVelocity = 0.8

  const [revealed, setRevealed] = useState({
    hero: false,
    about: false,
    services: false,
    interested: false,
  })

  const velocities = {
    hero: {
      title: -0.1,
      link: -0.1,
      curtain: 0.01,
      gradient: -0.3,
    },
    about: {
      content: -0.08,
      header: -0.04,
    },
    services: {
      content: -0.08,
      header: -0.07,
    },
  }

  // const [heroProps, setHeroProps] = useSpring(() => ({
  //   titleTransform: `translate3d(0px,0px,0)`,
  //   // titleOpacity: 1,
  //   linkTransform: `translate3d(0px,0px,0)`,
  //   linkOpacity: 1,
  //   curtainOpacity: 1,
  //   gradientPercent: 0,
  //   // config: { duration: 5000 },
  // }))

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(-100px,0,0)`,
    // titleOpacity: 1,
    linkTransform: `translate3d(0px,0px,0)`,
    linkOpacity: 0,
    curtainOpacity: 1,
    gradientPercent: 0,
    // config: { duration: 5000 },
  }))

  // const [heroLinkProps, setHeroLinkProps] = useSpring(() => ({
  //   linkTransform: `translate3d(0px,0px,0px)`,
  //   linkOpacity: 0,
  // }))

  // const [aboutProps, setAboutProps] = useSpring(() => ({
  //   transform: `translate3d(0px,0px,0)`,
  // }))
  const [servicesProps, setServicesProps] = useSpring(() => ({
    contentTransform: `translate3d(0px,0px,0)`,
    h0Transform: `translate3d(200px, 0px, 0px)`,
    h1Transform: `translate3d(-200px, 0px, 0px)`,
    headerTransform: `translate3d(-200px,0px,0px)`,
  }))

  const [aboutProps, setAboutProps] = useSpring(() => ({
    contentTransform: `translate3d(0px,0px,0px)`,
    headerTransform: `translate3d(0px,0px,0px)`,
  }))

  const [revealProps, setRevealProps] = useSpring(() => ({
    aboutCurtainOpacity: 1,
    servicesCurtainOpacity: 1,
    footerOpacity: 0,
    config: { ...config.stiff, duration: 2000 },
  }))

  // const [parallaxProps, setParallaxProps] = useSpring(() => ({
  //   aboutTransform: `translate3d(0px,0px,0px)`,
  // }))

  const rawHandler = () => {
    // setPos(window.pageYOffset)
    setHeroProps({
      titleTransform: `translate3d(0px,${velocities.hero.title *
        window.pageYOffset}px,0)`,
      curtainOpacity: velocities.hero.curtain * window.pageYOffset,
      linkTransform: `translate3d(0px,${velocities.hero.link *
        window.pageYOffset}px,0)`,
      gradientPercent: velocities.hero.gradient * window.pageYOffset,
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
      headerTransform: `translate3d(${-velocities.services.header *
        window.pageYOffset}px,0px,0px)`,
    })
  }

  const handleScroll = e => {
    window.requestAnimationFrame(rawHandler)
  }

  // const debouncedHandle = debounce(handleScroll, 20)
  const debouncedHandle = handleScroll

  const gradientInterpolator = v => `radial-gradient(
    313.85% 74.82% at 50.13%
      ${v}%,
    rgba(25, 31, 29, 0.75) 0%,
    #191f1d 100%
  )`

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [pos]) // if we dont do this handleScroll will only evaluate pos.current to its initial 0 from each render

  console.log("%cIndex rendered!", "color: red")

  setHeroProps({ curtainOpacity: 0, titleTransform: `translate3d(0px,0,0)` })
  setTimeout(1000, setHeroProps({ linkOpacity: 1 }))

  return (
    <MainTainr>
      {/* <TitleTainr style={{ background: `red` }}>
        <TitleSVG style={{ margin: `auto`, maxWidth: `270px` }} />
      </TitleTainr> */}
      <VisibilitySensor
        partialVisibility={`top`} /* we don't always have full vis of hero...safari :( */
        // offset={{ top: 700 }}
        onChange={v => {
          console.log("Hero visibility changed...", v)
          // setRevealed({
          //   hero: v,
          // })
          setHeroProps({
            linkOpacity: v ? 1 : 0,
          })
        }}
      >
        <Hero
          titleProps={{ style: { transform: heroProps.titleTransform } }}
          // curtainProps={{
          //   opacity: heroProps.curtainOpacity.interpolate(v => {
          //     console.log(v)
          //     return 1 - v
          //   }),
          // }}
          linkTainrProps={{
            opacity: heroProps.linkOpacity,
            transform: heroProps.linkTransform,
          }}
          mainTainrStyle={{
            position: `absolute`,
            top: `0px`,
            left: `0px`,
            height: `100vh`,
            width: `100vw`,
            // zIndex: -1,
            opacity: 0,
          }}
          // gradientProps={{
          //   style: {
          //     background: heroProps.gradientPercent.interpolate(
          //       gradientInterpolator
          //     ),
          //   },
          // }}
        />
      </VisibilitySensor>
      {/* <div style={{ height: `1000px`, width: `100%`, background: `red` }} /> */}
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        onChange={v => {
          console.log("About visibility changed...", v)
          // setRevealProps({
          //   aboutCurtainOpacity: v ? 0 : 1,
          // })
        }}
      >
        <About
          // key={`about-section`}
          contentTainrProps={{ transform: aboutProps.contentTransform }}
          headerProps={{ transform: aboutProps.headerTransform }}
          // curtainProps={{ opacity: revealProps.aboutCurtainOpacity }}
          mainTainrStyle={{
            padding: `300px 0`,
            opacity: 1,
            // zIndex: 0,
          }}
        />
      </VisibilitySensor>
      {/* <VisibilitySensor
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
          headerProps={{ transform: servicesProps.headerTransform }}
          h2Props0={{ transform: servicesProps.h0Transform }}
          h2Props1={{ transform: servicesProps.h1Transform }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        onChange={v => {
          console.log("Interested visibility changed...", v)
          // setRevealProps({ footerOpacity: 1 })
        }}
      >
        <Interested />
      </VisibilitySensor>
      <VisibilitySensor
        onChange={v => {
          console.log("Footer visibility changed...", v)
          setRevealProps({ footerOpacity: 1 })
        }}
      >
        <ADiv
          style={{
            position: `absolute`,
            width: `100%`,
            bottom: `5px`,
            opacity: revealProps.footerOpacity,
          }}
        >
          <Footer />
        </ADiv>
      </VisibilitySensor> */}
    </MainTainr>
  )
}
