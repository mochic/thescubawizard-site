import React, { useLayoutEffect, useState, useRef, useEffect } from "react"

import styled from "styled-components"
import { animated, config, useSpring, useSprings } from "react-spring"

import Hero from "../components/HeroSection"

import debounce from "lodash/debounce"

import About from "../components/AboutSection"

import Services from "../components/ServicesSectionOld"

import Interested from "../components/InterestedSection"
import InterestedOld from "../components/InterestedSectionTemp1"

import Footer from "../components/Footer"

import TitleSVG from "../components/TitleSVGEmbed"

import devices from "../devices"
import shared from "../shared"

import NavBar from "../components/NavBar"

import VisibilitySensor from "react-visibility-sensor"

import AboutImage from "../components/AboutImage"
import ServicesImage from "../components/ServicesImage"
import { ASection, AHr, AH3, AH2, ADiv, AP } from "../components/Shared"

// const ADiv = styled(animated.div)``

const MainTainr = styled(animated.div)`
  position: relative;
  background: #191f1d;
  z-index: -1;
`

// const MainTainr = styled(animated.div)`
//   position: relative;
//   background: #191f1d;
// `

// intelligently scale with js :/
// show header and extra stuff if in tablet/desktop view!
// const AboutHeight = 900
// const AboutTainr = styled(animated.div)`
//   min-height: ${AboutHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// `

// for media queries?
const AboutImageTainr = styled(ADiv)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: overlay;
`

const AboutSection = styled(ASection)`
  display: grid;
  position: relative; /* very important for absolute positioned image */
  height: 900px;
  width: 100%;
  grid-template-areas:
    ". . . "
    ". content ."
    ". . .";
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 250px auto;
  @media ${devices.laptop} {
    grid-template-rows: auto auto 150px;
    grid-template-columns: 8% minmax(auto, 900px) minmax(8%, auto);
  }
`

// const ServicesImageTainr = styled(animated.div)`
//   min-width: 320px;
//   width: 100%;
//   height: 900px;
//   position: absolute;
//   top: -200px;
//   right: 0px;
//   z-index: -1;
// `

// mixblendmode lighten filter opacity(0.5) top 0px right 0px
const ServicesImageTainr = styled(animated.div)`
  min-width: 320px;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
  mix-blend-mode: lighten;
  filter: opacity(0.5);
`

const InterestedImageTainr = styled(animated.div)``

// media queries
const AServicesAH2 = styled(AH2)`
  font-size: 200px;

  @media ${devices.laptop} {
    font-size: 260px;
  }
`

// media queries
// const AboutH3 = styled(AH2)`
//   position: absolute;
// `

const ServicesSection = styled(ASection)`
  display: grid;
  position: relative; /* very important for absolute positioned image */
  height: 900px;
  grid-template-areas:
    ". . . "
    ". content ."
    ". . .";
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 250px auto;
  @media ${devices.laptop} {
    grid-template-rows: auto auto 150px;
    grid-template-columns: 8% minmax(auto, 900px) minmax(8%, auto);
  }
`

const InterestedSection = styled(ASection)`
  display: grid;
  position: relative; /* very important for absolute positioned image */
  height: 900px;
  grid-template-areas:
    ". . . "
    ". content ."
    ". . .";
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 250px auto;
  @media ${devices.laptop} {
    grid-template-rows: auto auto 150px;
    grid-template-columns: 8% minmax(auto, 900px) minmax(8%, auto);
  }
`

const ContenTainr = styled(ADiv)`
  grid-area: content;
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  backdrop-filter: blur(1px);

  @media ${devices.laptop} {
    flex-direction: row;
    padding: 0 10px 0 10px;
  }
`

const DepthsGradient = styled(animated.div)`
  background: radial-gradient(
    119.29% 51.85% at 50.13% 50%,
    rgba(25, 31, 29, 0) 0%,
    #191f1d 100%
  );
  height: 120vh;
  width: 100vw;
  pointer-events: none;
  position: fixed;
  top: 0px;
  left: 0px;

  transform: translate3d(0, -20vh, 0);
  z-index: ${shared.depthsGradientZIndex}; /* hopefully this is enough but not too much... */
`

// services list
const WeirdLiLabel = styled(animated.p)`
  font-size: 50px;
  font-family: playfair display;
  color: #ffffff;
  mix-blend-mode: overlay;
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0.1;
  top: -24px;
`

const WeirdLi = styled(animated.span)`
  font-family: open sans;
  font-size: 16px;
  font-weight: normal;
  color: white;
  position: relative;
  margin: 0 0 50px 0;

  &&::after {
    margin: 10px;
  }
`

const WeirdTainr = styled(animated.div)`
  padding: 0;
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`

const WeirdList = ({ items, propsList }) => {
  const _propsList = propsList || []

  return (
    <WeirdTainr>
      {items.map((v, i) => {
        return (
          <WeirdLi key={`weird-li-${i}`} {..._propsList[i]}>
            <WeirdLiLabel>{`0${i + 1}`}</WeirdLiLabel>
            {v}
          </WeirdLi>
        )
      })}
    </WeirdTainr>
  )
}

// const Depths = styled(animated.div)`
//   color: red;
//   width: 100%;
//   pointer-events: none;
//   height: 100vh;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   overflow: hidden;
//   z-index: 5;
// `

// TODO: grab height from shared store or something...
const AboveDepths = styled(animated.div)`
  background: #191f1d;
  height: 80vh;
  width: 100%;
  z-index: ${shared.heroCurtainZIndex} !important;
  position: absolute;
  top: 0px;
  left: 0px;

  @media ${devices.laptop} {
    height: 100vh;
  }
`

// const Thang = styled(animated.div)`
//   width: 100%;
//   height: 200px;
//   background: green;
//   position: sticky;
//   top: 100px;
// `

export default () => {
  // const [pos, setPos] = useState()

  // const revealState = useState({
  //   hero: false,
  //   about: false,
  //   services: false,
  //   interested: false,
  //   footer: false,
  // })

  // some performance cost to prevent weird situations when we initialize at top but about is slightly showing...
  const diveThreshold = 50 // probs have to do something elaborate to calculate this...

  // on render pageYOffset threshold
  const aboutRevealedThreshold = 300

  const [isDiving, setIsDiving] = useState(false)
  // console.log("%cIndex rendered", "color: #ff00ff", { isDiving })
  // maybe use different based on browser support, etc....
  // const rawHandler = () => {
  //   setPos(window.pageYOffset)
  // }
  // velocities
  // const heroVelocity = 0.8
  // const aboutVelocity = -0.08
  // const servicesVelocity = 0.8

  const [visible, setVisible] = useState({
    hero: false,
    about: false,
    services: false,
    interested: false,
    footer: false,
  })

  const [revealed, setRevealed] = useState({
    hero: false, // best way to handle first render?
    about: false,
    services: false,
    interested: false,
    footer: false,
  })

  const velocities = {
    hero: {
      title: -0.1,
      link: -0.1,
      hint: -0.1,
      curtain: 0.01,
    },
    about: {
      content: -0.2,
      header: -0.3,
    },
    services: {
      content: -0.2,
      header: 0.3,
    },
  }

  const offsets = {
    about: {
      content: { x: 0, y: 0, z: 0 },
      header: { x: 0, y: 0, z: 0 },
    },
    services: {
      content: { x: 0, y: 170, z: 0 },
      header: { x: 0, y: 0, z: 0 },
    },
    interested: {
      content: { x: 0, y: 0, z: 0 },
    },
  }

  // const resolveTransform = () => {
  //   return `transform`
  // }

  const generateTransform = (section, itemName, adjustment) => {
    const _adjustment = adjustment || { x: 0, y: 0, z: 0 }
    const offset = offsets[section][itemName]
    return `translate3d(${offset.x + _adjustment.x}px,${offset.y +
      _adjustment.y}px,${offset.z + _adjustment.z}px)`
  }

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(0px,0px,0)`,
    // titleOpacity: 1,
    //linkOpacity: revealed.hero ? 1 : 0,
    linkOpacity: 0,
    linkTransform: `translate3d(0px,0px,0)`,
    // hintOpacity: revealed.hero ? 1 : 0,
    hintOpacity: 0,
    hintTransform: `translate3d(0px,0px,0)`,
    // curtainOpacity: revealed.hero ? 0 : 1, this wont work with a setter due to the scope when it gets evaluated
    delay: 0,
    // config: { duration: 5000 },
  }))

  // const [heroLinkProps, setHeroLinkProps] = useSpring(() => ({
  //   opacity: 0,
  // }))

  // const [heroHintProps, setHeroHintProps] = useSpring(() => ({
  //   opacity: 0,
  // }))

  const heroLinkProps = useSpring({
    opacity: revealed.hero && !isDiving ? 1 : 0,
    transform:
      revealed.hero && !isDiving
        ? `translate3d(0,0px,0)`
        : `translate3d(0,-10px,0)`,
  })

  const heroHintProps = useSpring({
    opacity: revealed.hero && !isDiving ? 1 : 0,
    transform:
      revealed.hero && !isDiving
        ? `translate3d(0,0px,0)`
        : `translate3d(0,-10px,0)`,
  })

  // if (revealed.hero && !isDiving) {
  //   console.log("%cSetting hero link and hint props...", "color: #ff00ff")
  //   setHeroLinkProps({
  //     opacity: 1,
  //     delay: 1000,
  //     config: { ...config.molasses, duration: 600 },
  //   })
  //   setHeroHintProps({
  //     opacity: 1,
  //     delay: 2000,
  //     config: { ...config.molasses, duration: 1000 },
  //   })
  // }

  // const [blurUpProps, setBlurUpProps] = useSpring(() => ({
  //   interestedLinkFilter: `blur(20px)`
  //   config: {...config.wobbly, duration: 600}
  // }))

  // const [interestedProps, setInterestedProps] = useSpring(() => ({
  //   linkFilter: `blur(20px)`,
  //   config: { ...config.wobbly, duration: 600 },
  // }))

  // const [servicesProps, setServicesProps] = useSpring(() => ({
  //   contentTransform: `translate3d(0px,0px,0)`,
  //   h0Transform: `translate3d(200px, 0px, 0px)`,
  //   h1Transform: `translate3d(-200px, 0px, 0px)`,
  //   headerTransform: `translate3d(-200px,0px,0px)`,
  // }))

  // const [aboutProps, setAboutProps] = useSpring(() => ({
  //   contentTransform: `translate3d(0px,0px,0px)`,
  //   headerTransform: `translate3d(0px,0px,0px)`,
  // }))

  const aboutProps = useSpring({
    headerOpacity: revealed.about ? 1 : 0,
    imageOpacity: revealed.about ? 1 : 0,
    config: {
      ...config.molasses,
      duration: 2000,
      // duration: 20000,
    },
    immediate: !revealed.about,
  })

  const [aboutParallaxProps, setAboutParallaxProps] = useSpring(() => ({
    contentTransform: `translate3d(${offsets.about.content.x}px,${offsets.about.content.y}px,${offsets.about.content.z}px)`,
    headerTransform: `translate3d(${offsets.about.header.x}px,${offsets.about.header.y}px,${offsets.about.header.z}px)`,
    // config: { ...config.wobbly },
  }))

  const [servicesParallaxProps, setServicesParallaxProps] = useSpring(() => ({
    contentTransform: `translate3d(${offsets.services.content.x}px,${offsets.services.content.y}px,${offsets.services.content.z}px)`,
    headerTransform: `translate3d(${offsets.services.header.x}px,${offsets.services.header.y}px,${offsets.services.header.z}px)`,
  }))

  const [interestedParallaxProps, setInterestedParallaxProps] = useSpring(
    () => ({
      contentTransform: `translate3d(${offsets.interested.content.x}px,${offsets.interested.content.y}px,${offsets.interested.content.z}px)`,
    })
  )

  // const [revealProps, setRevealProps] = useSpring(() => ({
  //   aboutCurtainOpacity: 1,
  //   servicesCurtainOpacity: 1,
  //   config: { ...config.stiff, duration: 2000 },
  //   reset: !isDiving,
  // }))

  // const [aboutRevealProps, setAboutRevealProps] = useSpring(() => ({
  //   opacity: 0,
  //   config: { ...config.molasses, duration: 200 },
  // }))

  const [servicesRevealProps, setServicesRevealProps] = useSpring(() => ({
    opacity: 0,
    config: { ...config.molasses, duration: 200 },
  }))

  const [interestedProps, setInterestedProps] = useSpring(() => ({
    contentBlur: 20,
    contentTransform: `translate3d(0px,-100px,0px)`,
  }))

  const [scrollHintProps, setScrollHintProps] = useSpring(() => ({
    opacity: 0,
  }))

  const [navBarProps, setNavBarProps] = useSpring(() => ({
    opacity: 0,
    depthsOpacity: 0,
    bottomDepthsOpacity: 1,
  }))

  // const [footerProps, setFooterProps] = useSpring(() => ({
  //   opacity: 0,
  //   transform: `blur(${revealed.footer ? 2 : 0}px)`,
  // }))

  // const [footerProps, setFooterProps] = useSpring(() => ({
  //   opacity: revealed.footer ? 1 : 0,
  //   // transform: `blur(${revealed.footer ? 2 : 0}px)`,
  // }))

  const [footerProps, setFooterProps] = useSpring(() => ({
    opacity: revealed.footer ? 1 : 0,
  }))

  const rawHandler = () => {
    // setPos(window.pageYOffset)
    // console.log(revealed)
    if (!isDiving && window.pageYOffset > diveThreshold) {
      console.log("%csetting diving to: ", "color: #ff00ff", true)
      console.log(window.pageYOffset)
      setIsDiving(true)
    } else if (isDiving && window.pageYOffset <= diveThreshold) {
      console.log("%csetting diving to: ", "color: #ff00ff", false)
      setIsDiving(false)
    }

    // different logic for hero...parallax-reveal when hero is not fully revealed
    // velocities should really be distance to travel + value to change by
    if (!revealed.hero) {
      console.log("%cHero not revealed...", "color: #ff00ff")
      setHeroProps({
        titleTransform: `translate3d(0px,${velocities.hero.title *
          window.pageYOffset}px,0)`,
        curtainOpacity: velocities.hero.curtain * window.pageYOffset,
        linkTransform: `translate3d(0px,${velocities.hero.link *
          window.pageYOffset}px,0)`,
        hintTransform: `translate3d(0px,${velocities.hero.link *
          window.pageYOffset}px,0)`,
      })
      setNavBarProps({
        opacity: velocities.hero.curtain * window.pageYOffset,
        depthsOpacity: velocities.hero.curtain * window.pageYOffset,
        bottomDepthsOpacity: 1 - velocities.hero.curtain * window.pageYOffset,
      })
    }
    // else {
    //   setHeroProps({
    //     curtainOpacity: velocities.hero.curtain * window.pageYOffset,
    //   })
    // }
    // setHeroProps({
    //   titleTransform: `translate3d(0px,${velocities.hero.title *
    //     window.pageYOffset}px,0)`,
    //   curtainOpacity: velocities.hero.curtain * window.pageYOffset,
    //   linkTransform: `translate3d(0px,${velocities.hero.link}px,0)`,
    // })

    if (revealed.about) {
      // console.log("%cabout parallaxin...", "color: #ff00ff", {
      //   contentTransform: `translate3d(0px,${velocities.about.content *
      //     window.pageYOffset}px,0px)`,
      //   headerTransform: `translate3d(${velocities.about.header *
      //     window.pageYOffset}px,0px,0px)`,
      // })
      const aboutContentTransform = generateTransform("about", "content", {
        x: 0,
        y: velocities.about.content * window.pageYOffset,
        z: 0,
      })
      const aboutHeaderTransform = generateTransform("about", "header", {
        x: velocities.about.header * window.pageYOffset,
        y: 0,
        z: 0,
      })

      // setAboutParallaxProps({
      //   contentTransform: `translate3d(0px,${velocities.about.content *
      //     window.pageYOffset}px,0px)`,
      //   headerTransform: `translate3d(${velocities.about.header *
      //     window.pageYOffset}px,0px,0px)`,
      // })
      setAboutParallaxProps({
        contentTransform: aboutContentTransform,
        headerTransform: aboutHeaderTransform,
      })
    }

    if (revealed.services) {
      const servicesContentTransform = generateTransform(
        "services",
        "content",
        { x: 0, y: velocities.services.content * window.pageYOffset, z: 0 }
      )

      const servicesHeaderTransform = generateTransform("services", "header", {
        x: velocities.services.header * window.pageYOffset,
        y: 0,
        z: 0,
      })

      // console.log("%cschedule parallaxin...", "color: #eb9e34", {
      //   servicesContentTransform,
      //   servicesHeaderTransform,
      // })

      setServicesParallaxProps({
        contentTransform: servicesContentTransform,
        headerTransform: servicesHeaderTransform,
      })
    }

    if (revealed.interested) {
      const interestedContentTransform = generateTransform(
        "interested",
        "content",
        { x: 0, y: velocities.interested.content * window.pageYOffset, z: 0 }
      )

      // console.log(
      //   "%cinterested parallaxin...",
      //   "color: #eb9e34",
      //   interestedContentTransform
      // )

      setInterestedParallaxProps({
        contentTransform: interestedContentTransform,
      })
    }

    // setServicesProps({
    //   contentTransform: `translate3d(0px,${velocities.services.content *
    //     window.pageYOffset +
    //     offsets.services.content}px,0px)`,
    //   h0Transform: `translate3d(${velocities.services.content *
    //     window.pageYOffset}px,0px,0px)`,
    //   h1Transform: `translate3d(${-velocities.services.content *
    //     window.pageYOffset}px,0px,0px)`,
    //   headerTransform: `translate3d(${-velocities.services.header *
    //     window.pageYOffset}px,0px,0px)`,
    // })
  }

  const handleScroll = e => {
    window.requestAnimationFrame(rawHandler)
  }

  // const debouncedHandle = debounce(handleScroll, 20)
  const debouncedHandle = handleScroll

  useEffect(() => {
    console.log("%cwut", "color: #00ff00")
    setIsDiving(window.pageYOffset > diveThreshold)
    setRevealed({ ...revealed, hero: true })
    setHeroProps({
      curtainOpacity: 0,
      // linkOpacity: 1,
      // hintOpacity: 1,
    })
  }, [])

  useLayoutEffect(() => {
    window.addEventListener("scroll", debouncedHandle)

    return () => window.removeEventListener("scroll", debouncedHandle)
  }, [isDiving, revealed]) // if we dont do this handleScroll will only evaluate pos.current to its initial 0 from each render

  console.log("%cIndex rendered!", "color: red", { isDiving, revealed })

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
      {/* <DepthsGradientTop style={{ opacity: navBarProps.depthsOpacity }} />
      <DepthsGradientBottom style={{ opacity: navBarProps.depthsOpacity }} /> */}
      <VisibilitySensor
        delayedCall
        onChange={v => {
          if (revealed.hero !== v) {
            console.log("Hero visibility changed...", v)
            setRevealed({ ...revealed, hero: v, about: false }) // dont want to have both visible as same time ever
          }
        }}
      >
        {/* <Hero
          titleProps={{ style: { transform: heroProps.titleTransform } }}
          curtainProps={{ opacity: heroProps.curtainOpacity }}
          linkTainrProps={{
            opacity: heroProps.linkOpacity,
            transform: heroProps.linkTransform,
          }}
          scrollHintProps={{
            opacity: heroProps.hintOpacity,
            transform: heroProps.hintTransform,
          }}
        /> */}
        <div style={{ position: `relative` }}>
          <Hero
            titleProps={{ style: { transform: heroProps.titleTransform } }}
            // curtainProps={{ opacity: heroProps.curtainOpacity }}
            curtainProps={{ opacity: 0 }}
            linkTainrProps={{ ...heroLinkProps }}
            scrollHintProps={{ ...heroHintProps }}
          />
          <AboveDepths style={{ opacity: heroProps.curtainOpacity }} />
        </div>
      </VisibilitySensor>
      {/* <Thang /> */}
      <VisibilitySensor
        partialVisibility
        active={isDiving}
        onChange={v => {
          if (revealed.about !== v) {
            console.log("About visibility changed...", v)
            setRevealed({ ...revealed, hero: false, about: v }) // might end badly...
          }
        }}
      >
        <AboutSection>
          <AH2
            style={{
              position: `absolute`,
              top: `5px`,
              // left: `41px`,
              left: `100px`, // to account for animation
              transform: aboutParallaxProps.headerTransform,
              opacity: aboutProps.headerOpacity,
            }}
          >
            about
          </AH2>
          <ContenTainr
            style={{
              gridArea: `content`,
              transform: aboutParallaxProps.contentTransform,
            }}
          >
            <AH3>Not your everyday dive service.</AH3>
            <AHr />
            <AP
              style={{
                textAlign: `center`,
                lineHeight: `200%`,
              }}
            >
              We’re dedicated to delivering a quality dive service to the
              Pacific Northwest area. With us you wont have to worry about
              stuff? You shouldnt need to take time out of your busy work
              schedule.
            </AP>
          </ContenTainr>
          <AboutImageTainr style={{ opacity: aboutProps.imageOpacity }}>
            <AboutImage />
          </AboutImageTainr>
        </AboutSection>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        active={isDiving}
        onChange={v => {
          if (revealed.services !== v) {
            console.log("Services visibility changed...", v)
            setRevealed({ ...revealed, services: v })
          }
        }}
      >
        <ServicesSection>
          <AServicesAH2
            style={{
              position: `absolute`,
              // top: `5%`,
              // right: `-200px`,
              fontSize: `200px`,
              minWidth: `300px`,
              transform: servicesParallaxProps.headerTransform,
            }}
          >
            services
          </AServicesAH2>
          <ContenTainr
            style={{
              gridArea: `content`,
              transform: servicesParallaxProps.contentTransform,
            }}
          >
            <AH3>We've got your back.</AH3>
            <AHr />
            <ADiv>
              <AP
                style={{
                  textAlign: `center`,
                  lineHeight: `200%`,
                }}
              >
                We'll work with you to make sure the job gets done right the
                first time. If it takes longer than expected, we promise not the
                leave you high and dry with a half-finished job!
              </AP>
              <WeirdList
                items={[
                  `Hull cleaning`,
                  `Anode replacement`,
                  `Lost item recovery`,
                ]}
              />
            </ADiv>
          </ContenTainr>
          <ServicesImageTainr>
            <ServicesImage />
          </ServicesImageTainr>
        </ServicesSection>
      </VisibilitySensor>
      <VisibilitySensor
        partialVisibility
        onChange={v => {
          if (revealed.interested !== v) {
            console.log("Interested visibility changed...", v)
            setRevealed({ ...revealed, interewsted: v })
          }
        }}
      >
        <Interested
          // containrProps={{ style: { zIndex: 1000 } }}
          contentProps={{
            transform: interestedProps.contentTransform,
            filter: interestedProps.contentBlur.interpolate(
              v => `blur(${v}px)`
            ),
          }}
          // linkProps={{ buttonStyle: { zIndex: 1000 } }}
        />
      </VisibilitySensor>
      <VisibilitySensor
        delayedCall
        partialVisibility
        onChange={v => {
          // different footer logic maybe
          if (v && !revealed.footer) {
            console.log("%cFooter visibility changed...", "color: #00ff00", v)
            // setRevealed({ ...revealed, footer: v })
            setFooterProps({
              opacity: 1,
              delay: 1000,
              config: { ...config.molasses, duration: 500 },
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
    </MainTainr>
  )
}
