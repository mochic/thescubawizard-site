import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, config, useSpring, useSprings } from "react-spring"

import Hero from "../components/HeroSection"

import debounce from "lodash/debounce"

import About from "../components/AboutSection"

import Services from "../components/ServicesSection"

import Interested from "../components/InterestedSection"

import Footer from "../components/Footer"

import TitleSVG from "../components/TitleSVGEmbed"

import device from "../devices"
import shared from "../shared"

import NavBar from "../components/NavBar"

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

const DepthsGradient = styled(animated.div)`
  background: radial-gradient(
    103.93% 50% at 50% 50%,
    rgba(25, 31, 29, 0.08) 0%,
    #191f1d 100%
  );
  height: 100vh; /* not the best but the best we can do for now?... */
  width: 100vw;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${shared.depthsGradientZIndex}; /* hopefully this is enough but not too much... */
`

export default () => {
  const [pos, setPos] = useState()

  const revealState = useState({
    footer: false,
  })

  // some performance cost to prevent weird situations when we initialize at top but about is slightly showing...
  const diveThreshold = 50 // probs have to do something elaborate to calculate this...
  const [isDiving, setIsDiving] = useState(window.pageYOffset > diveThreshold)
  console.log("%cIndex rendered", { isDiving }, "color: #ff00ff")
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

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(0px,0px,0)`,
    // titleOpacity: 1,
    linkTransform: `translate3d(0px,0px,0)`,
    linkOpacity: 1,
    curtainOpacity: 0,
    // config: { duration: 5000 },
  }))

  // const [blurUpProps, setBlurUpProps] = useSpring(() => ({
  //   interestedLinkFilter: `blur(20px)`
  //   config: {...config.wobbly, duration: 600}
  // }))

  const [interestedProps, setInterestedProps] = useSpring(() => ({
    linkFilter: `blur(20px)`,
    config: { ...config.wobbly, duration: 600 },
  }))

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
    config: { ...config.stiff, duration: 2000 },
    reset: !isDiving,
  }))

  const [scrollHintProps, setScrollHintProps] = useSpring(() => ({
    opacity: 1,
  }))

  const [navBarProps, setNavBarProps] = useSpring(() => ({
    opacity: 0,
    depthsOpacity: 0,
  }))

  const [footerProps, setFooterProps] = useSpring(() => ({
    opacity: 0,
    transform: `blur(${revealState.footer ? 2 : 0}px)`,
  }))

  const rawHandler = () => {
    // setPos(window.pageYOffset)
    if (!isDiving && window.pageYOffset > diveThreshold) {
      console.log("%csetting diving to: ", "color: #ff00ff", true)
      console.log(window.pageYOffset)
      setIsDiving(true)
    } else if (isDiving && window.pageYOffset <= diveThreshold) {
      console.log("%csetting diving to: ", "color: #ff00ff", false)
      setIsDiving(false)
    }

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
      headerTransform: `translate3d(${-velocities.services.header *
        window.pageYOffset}px,0px,0px)`,
    })
  }

  const handleScroll = e => {
    window.requestAnimationFrame(rawHandler)
  }

  // const debouncedHandle = debounce(handleScroll, 20)
  const debouncedHandle = handleScroll

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [isDiving]) // if we dont do this handleScroll will only evaluate pos.current to its initial 0 from each render

  console.log("%cIndex rendered!", "color: red")

  return (
    <MainTainr>
      <NavBar
        style={{ opacity: navBarProps.opacity }}
        handleHomeClick={e => {
          e.preventDefault()
          console.log("%coverriden title clicked", "color: teal")
          window.scrollTo({ top: 0, behavior: `smooth` })
        }}
      />
      <DepthsGradient style={{ opacity: navBarProps.depthsOpacity }} />
      <VisibilitySensor
        onChange={v => {
          console.log("Hero visibility changed...", v)
          // setRevealed({
          //   hero: v,
          // })
          setHeroProps({
            linkOpacity: v ? 1 : 0,
          })

          // hide navbar when hero visible when not
          setNavBarProps({
            opacity: v ? 0 : 1,
            depthsOpacity: v ? 0 : 1,
            config: { ...config.stiff, duration: 1200 },
          })
          // setNavBarProps({
          //   opacity: v ? 0 : 1,
          //   transform: `translate3d(0,${v ? -100 : 0}px,0)`,
          //   config: { ...config.stiff, duration: 600 },
          // })
        }}
      >
        <Hero
          titleProps={{ style: { transform: heroProps.titleTransform } }}
          curtainProps={{ opacity: heroProps.curtainOpacity }}
          linkTainrProps={{
            opacity: heroProps.linkOpacity,
            transform: heroProps.linkTransform,
          }}
          scrollHintProps={{ ...scrollHintProps }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        active={isDiving}
        onChange={v => {
          console.log("About visibility changed...", {
            visibility: v,
            isDiving,
          })
          setRevealProps({
            aboutCurtainOpacity: v && isDiving ? 0 : 1,
          })
          setScrollHintProps({ opacity: v ? 0 : 1 })
          // setNavBarProps({
          //   opacity: v ? 1 : 0,
          //   depthsOpacity: v ? 1 : 0,
          //   config: { ...config.stiff, duration: 1600 },
          // })
          // if (v) {
          //   setBorderProps({opacity: borderProps.opacity.interpolate(v => (v === 0 ? 1 : 0))})
          // }
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
        {/* we want the link clickable always... */}
        <Interested
          containrProps={{ style: { zIndex: 1000 } }}
          linkProps={{ buttonStyle: { zIndex: 1000 } }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        delayedCall
        onChange={v => {
          console.log("%cFooter visibility changed...", "color: #ff00ff", v)
          if (v) {
            // setRevealProps({
            //   footerOpacity: 1,
            //   delay: 1000,
            //   config: { ...config.slow, duration: 1000 },
            // })
            setFooterProps({
              opacity: 1,
              delay: 1000,
              config: { ...config.molasses, duration: 3000 },
            })
          }
        }}
      >
        <ADiv
          style={{
            position: `absolute`,
            width: `100%`,
            bottom: `25px`,
            ...footerProps,
          }}
        >
          {/* zIndex set so its not obfuscated by gradient */}
          <Footer
            hrProps={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
            p0Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
            p1Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
          />
        </ADiv>
      </VisibilitySensor>
      {/* <NavBar
        style={{ ...navBarProps }}
        handleTitleClick={e => {
          console.log("%coverridden: title clicked...", "color: green")
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      /> */}
    </MainTainr>
  )
}
