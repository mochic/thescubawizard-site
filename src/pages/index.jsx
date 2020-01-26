import React, { useLayoutEffect, useState, useRef } from "react"

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

  @media ${devices.laptop} {
    flex-direction: row;
    padding: 0 10px 0 10px;
  }
`

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

// const WeirdLi = styled(animated.li)`
//   font-family: open sans;
//   font-size: 16px;
//   font-weight: normal;
//   color: white;
//   position: relative;
//   margin: 0 0 50px 0;
//   float: left;
// `

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

// const WeirdUl = styled(animated.ul)`
//   list-style-type: none;
//   align-self: flex-start;
//   padding: 0;
//   margin: 16px 0 0 20px;
// `

// const WeirdUl = styled(animated.ul)`
//   list-style-type: none;
//   padding: 0;
//   margin: 16px 0 0 20px;
// `

// const WeirdUl = styled(animated.div)`
//   list-style-type: none;
//   padding: 0;
//   margin: 16px 0 0 20px;
// `

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

const InnerContenTainr = styled.div``

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

  const offsets = {
    services: {
      content: 170,
    },
  }

  const [heroProps, setHeroProps] = useSpring(() => ({
    titleTransform: `translate3d(0px,0px,0)`,
    // titleOpacity: 1,
    linkTransform: `translate3d(0px,0px,0)`,
    linkOpacity: 0,
    curtainOpacity: 1,
    delay: 0,
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

  const [aboutRevealProps, setAboutRevealProps] = useSpring(() => ({
    opacity: 0,
    config: { ...config.molasses, duration: 200 },
  }))

  const [servicesRevealProps, setServicesRevealProps] = useSpring(() => ({
    opacity: 0,
    config: { ...config.molasses, duration: 200 },
  }))

  const [scrollHintProps, setScrollHintProps] = useSpring(() => ({
    opacity: 0,
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
        window.pageYOffset +
        offsets.services.content}px,0px)`,
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
          if (v) {
            setHeroProps({
              curtainOpacity: 0,
              delay: 0,
              config: { ...config.molasses, duration: 600 },
            })
            setHeroProps({
              linkOpacity: 1,
              delay: 750,
              config: { ...config.molasses, duration: 500 },
            })
            setScrollHintProps({
              opacity: 1,
              delay: 2000,
              config: { ...config.molasses, duration: 2000 },
            })
          } else {
            setHeroProps({
              curtainOpacity: 1,
              linkOpacity: 0,
              delay: 0,
              config: { ...config.default, duration: 500 },
            })
            setScrollHintProps({
              opacity: 0,
              delay: 0,
              config: { ...config.molasses, duration: 500 },
            })
          }

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
      {/* <VisibilitySensor
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
          setAboutRevealProps({
            opacity: v ? 1 : 0,
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
          // imageProps={{ style: aboutRevealProps }}
        />
      </VisibilitySensor> */}
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
          setAboutRevealProps({
            opacity: v ? 1 : 0,
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
        <AboutSection>
          <AH2
            style={{
              position: `absolute`,
              top: `5px`,
              // left: `41px`,
              left: `100px`, // to account for animation
              transform: aboutProps.headerTransform,
            }}
          >
            about
          </AH2>
          <ContenTainr style={{ gridArea: `content` }}>
            <AH3>Not your everyday dive service.</AH3>
            <AHr />
            <AP
              style={{
                textAlign: `center`,
                fontFamily: `open sans`,
                fontSize: `16px`,
                fontWeight: 300,
              }}
            >
              We’re dedicated to delivering a quality dive service to the
              Pacific Northwest area. With us you wont have to worry about
              stuff? You shouldnt need to take time out of your busy work
              schedule.
            </AP>
          </ContenTainr>
          <AboutImageTainr>
            <AboutImage />
          </AboutImageTainr>
        </AboutSection>
      </VisibilitySensor>
      {/* <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        onChange={v => {
          console.log("Services visibility changed...", v)
          setRevealProps({
            servicesCurtainOpacity: v ? 0 : 1,
          })
          // todo maybe wrapp all image reveals in same spring to control them better?
          setAboutRevealProps({
            opacity: v ? 0 : 1,
          })
          setServicesRevealProps({
            opacity: v ? 1 : 0,
          })
        }}
      >
        <Services
          contentProps={{ transform: servicesProps.contentTransform }}
          curtainProps={{ opacity: revealProps.servicesCurtainOpacity }}
          imageProps={{ style: servicesRevealProps }}
          headerProps={{ transform: servicesProps.headerTransform }}
          h2Props0={{ transform: servicesProps.h0Transform }}
          h2Props1={{ transform: servicesProps.h1Transform }}
        />
      </VisibilitySensor> */}
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 100 }}
        onChange={v => {
          console.log("Services visibility changed...", v)
          setRevealProps({
            servicesCurtainOpacity: v ? 0 : 1,
          })
          // todo maybe wrapp all image reveals in same spring to control them better?
          setAboutRevealProps({
            opacity: v ? 0 : 1,
          })
          setServicesRevealProps({
            opacity: v ? 1 : 0,
          })
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
              transform: servicesProps.headerTransform,
            }}
          >
            services
          </AServicesAH2>
          <ContenTainr style={{ gridArea: `content` }}>
            <AH3>We've got your back.</AH3>
            <AHr />
            <ADiv>
              <AP
                style={{
                  textAlign: `center`,
                  fontFamily: `open sans`,
                  fontSize: `16px`,
                  fontWeight: 300,
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
        onChange={v => {
          console.log("Interested visibility changed...", v)
          // setRevealProps({ footerOpacity: 1 })
        }}
      >
        <Interested
          containrProps={{ style: { zIndex: 1000 } }}
          linkProps={{ buttonStyle: { zIndex: 1000 } }}
        />
      </VisibilitySensor>
      {/* <VisibilitySensor
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
          <Footer
            hrProps={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
            p0Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
            p1Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
          />
        </ADiv>
      </VisibilitySensor> */}
      <VisibilitySensor
        onChange={v => {
          console.log("Interested visibility changed...", v)
          // setRevealProps({ footerOpacity: 1 })
        }}
      >
        {/* we want the link clickable always... */}
        <InterestedOld
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
