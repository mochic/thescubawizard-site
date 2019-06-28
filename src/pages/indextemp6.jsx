import React, { useRef, useState, useEffect, useCallback } from "react"

import styled, { keyframes } from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import debounce from "lodash/debounce"
import Particles from "react-particles-js"

import VisibilitySensor from "react-visibility-sensor"

import Logo from "../components/Logo"
// import LandingPage from "../components/LandingFinal3"
import Scheduler from "../components/SchedulerFinal2"
import SEO from "../components/SEO"

import { FaChevronDown } from "react-icons/fa"

// define the size of the containr elsewhere and also add right left padding on each page
const Page = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 100vh;
  width: 100vw;
  z-index: 1;
`

const LandingPage = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

// with the way we style things i'm worried we'll negatively impact seo making it a h1...
// const Title = styled(animated.div)`
//   color: #27a77d;
//   font-family: inconsolata;
//   font-weight: 900;
//   font-size: 96px;
//   line-height: 200px;
//   opacity: 0.9;
//   z-index: -1;
//   padding: 42px 0 0 32px;
//   margin: 0;
// `
const Title = styled(animated.div)`
  color: #6ba770;
  font-family: inconsolata;
  font-weight: 900;
  font-size: 96px;
  line-height: 200px;
  opacity: 0.9;
  z-index: -1;
  padding: 42px 0 0 32px;
  margin: 0;
  mix-blend-mode: screen;
`

const LogoContainr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
`

const Containr = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Header = styled(animated.h1)`
  color: #f2f2f2;
  font-family: Inconsolata;
  font-weight: 300;
  font-size: 24px;
  line-height: 25px;
`

const Divider = styled(animated.hr)`
  border-top: 1px solid #f2f2f2;
  width: 100%;
`

const BlurHeader = ({ children, props }) => {
  return (
    <Containr style={props}>
      <Header>{children}</Header>
      <Divider />
    </Containr>
  )
}

const MainTainr = styled.div`
  width: 100vw;
  overflow: hidden;
`

const Particle0 = styled(animated.div)`
  background: black;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  z-index: -1;
`

const ParticlesContainr = styled(animated.div)`
  position: absolute;
  height: 200vh;
  width: 100vw;
  top: 0;
  left: 0;
`

const ParticlesOrSomething = () => {
  return (
    <ParticlesContainr>
      <Particles
        height="812px"
        width="375px"
        params={{
          height: `375px`,
          width: `812px`,
          particles: {
            number: {
              value: 40,
              density: {
                enable: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </ParticlesContainr>
  )
}

// very important for guiding user...telling them what they're doing...etc...animated...?
const HintArrow = styled(animated.div)``

const HintThing = styled(animated.p)``

const Hint = ({ pageKey }) => {
  const pages = [{ key: `home`, hint: `scroll to continue` }]
  const hintTransitions = useTransition(pages, page => page.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })
  return (
    <>
      {hintTransitions.map(({ key, item, props }) => {
        return (
          <HintThing key={key} style={props}>
            {item.hint}
          </HintThing>
        )
      })}
      {/* <HintArrow>hint arrow</HintArrow> */}
    </>
  )
}

const FadeDownKeys = keyframes`
from {
    opacity: 0.6;
    transform: translate3d(0,-14px,0);
} to {
    opacity: 0;
    transform: translate3d(0,0px,0);
}
`

const HintContainer = styled(animated.div)`
  position: fixed;
  top: 90%;
  width: 100%;
  text-align: center;
  color: #f2f2f2;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 22px;
  animation: ${FadeDownKeys} 3s ease-in-out infinite;
`

const TitleChunk = styled(animated.div)`
  color: #6ba770;
  font-family: inconsolata;
  font-weight: 900;
  font-size: 96px;
  line-height: 1;
  opacity: 0.9;
  padding: 42px 0 0 32px;
  margin: 0;
  mix-blend-mode: screen;
`

const TitleContainr = styled(animated.div)`
  z-index: -1;
  height: 85%;
`

export default () => {
  const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }))

  const onScroll = useCallback(e => {
    set({ scrollTop: window.scrollY })
    console.log(window.scrollY * 0.05)
  }, [])

  const { logoBlurOffset } = useSpring({
    from: { logoBlurOffset: 20 },
    to: { flogoBlurOffset: 2 },
    config: { ...config.wobbly, duration: 1500 },
  })

  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(2px)` },
    config: { ...config.wobbly, duration: 1500 },
    delay: 500,
  })

  const [hVis, setHVis] = useState(false)
  const onHVisChange = useCallback(e => {
    if (e) {
      setHVis(true)
    }
  }, [])

  // const onHVisChange = e => {
  //   setHVis(true)
  // }

  const scheduleHeaderProps = useSpring({
    from: { opacity: 0, filter: `blur(20px)` },
    to: { opacity: 1, filter: hVis ? `blur(0px)` : `blur(20px)` },
    config: { ...config.wobbly, friction: 1, duration: 1000 },
  })

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  console.log("rendered")

  // return (
  //   <MainTainr onScroll={onScroll}>
  //     {/* <Particle0 style={{ position: `fixed`, top: `100px`, left: `100px` }} /> */}
  //     <LandingPage>
  //       <Title style={{ gridArea: `2 / 2 / auto / auto` }}>
  //         the
  //         <br />
  //         scuba
  //         <br />
  //         wizard
  //       </Title>
  //       <LogoContainr style={logoProps}>
  //         <Logo />
  //       </LogoContainr>
  //       {/* <ParticlesOrSomething /> */}
  //     </LandingPage>
  //     <VisibilitySensor onChange={onHVisChange}>
  //       <BlurHeader props={scheduleHeaderProps}>schedule a chat.</BlurHeader>
  //     </VisibilitySensor>
  //     <Page>
  //       <Scheduler />
  //     </Page>
  //     <HintContainer>
  //       <Hint />
  //     </HintContainer>
  //   </MainTainr>
  // )
  return (
    <MainTainr onScroll={onScroll}>
      <LandingPage>
        <TitleContainr style={{ gridArea: `2 / 2 / auto / auto` }}>
          <TitleChunk>the</TitleChunk>
          <TitleChunk>scuba</TitleChunk>
          <TitleChunk>wizard</TitleChunk>
        </TitleContainr>
        <LogoContainr style={logoProps}>
          <Logo />
        </LogoContainr>
      </LandingPage>
      <VisibilitySensor onChange={onHVisChange}>
        <BlurHeader props={scheduleHeaderProps}>schedule a chat.</BlurHeader>
      </VisibilitySensor>
      <Page>
        <Scheduler />
      </Page>
      <HintContainer>
        <Hint />
      </HintContainer>
    </MainTainr>
  )
}
