import React, { useContext, useState, useEffect, useCallback } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Services from "../components/Services"
import SEO from "../components/SEO"
import InContentInternalLink from "../components/InContentInternalLink"

import VisibilityProvider from "../providers/VisibilityProvider"
import VisibilityContext from "../contexts/visibility.context"
import devices from "../devices"

/*
 * z-index is used to create some kinda of an underwater feel
 * -4 is app-background layer
 * -3 is water background layer
 * -2 is logo layer
 * -1 is water foreground layer
 * 0 is page layer
 */

// const MainTainr = styled.div`
//   overflow: hidden;
//   width: 100vw;
//   margin: auto;
//   background: black;

//   @media ${devices.tablet} {
//     grid-template-columns: auto 48%;
//     grid-template-rows: auto 10%;
//     grid-template-areas:
//       "hero services"
//       "hero footer";
//   }

//   @media ${devices.laptop} {
//     grid-template-columns: auto 432px;
//     grid-template-rows: auto 10%;
//     grid-template-areas:
//       "hero services"
//       "hero footer";
//   }
// `

const MainTainr = styled.div`
  overflow: hidden;
  width: 100vw;
  margin: auto;
  background: black;
`

// max-width, overflow, position are very
// important for making sure the hero doesn't
// leak past the bounds we want
const HeroContainr = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  position: relative;
`

const ScheduleContainr = styled(animated.div)`
  padding: 10% 10% 15% 10%;
  z-index: 2;
  background: #0a0a0a;
  box-sizing: border-box;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

// const ServicesContainr = styled(animated.div)`
//   background: #1d2523;
//   padding: 15px;
// `

const ServicesContainr = styled(animated.div)`
  background: black;
  padding: 15px;
  box-sizing: border-box;
`

const FooterContainr = styled(animated.div)`
  padding: 10px;
  text-align: center;
  z-index: 2;
  background: black;
`

const InlineLinkTainr = styled.div`
  padding: 50px 50px 50px 36px;
`

const Page = styled.div``

const H2 = styled(animated.h2)`
  font-family: gilda display;
  grid-area: heading;
  color: #506a61;
  font-size: 450%;
  margin: 0;
  padding: 0;
  font-weight: 100;
`

export default () => {
  //   const { updateScroll } = useContext(ScrollContext)

  const onScroll = useCallback(e => {
    // console.log(window.scrollY / document.documentElement.clientHeight)
    // updateScroll(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  //   return (
  //     <ScrollProvider>
  //       <MainTainr>
  //         <SEO title={`home`} />
  //         <HeroContainr>
  //           <Hero />
  //         </HeroContainr>
  //         <ServicesContainr>
  //           <H2>services</H2>
  //           <Services />
  //         </ServicesContainr>
  //         <InlineLinkTainr style={{ gridArea: `schedule-link` }}>
  //           <InContentInternalLink
  //             heading="Need help with a dive job?"
  //             statement="Let's talk about it."
  //             link={{ to: `/contact`, label: `Schedule a chat.` }}
  //           />
  //         </InlineLinkTainr>
  //         <FooterContainr>
  //           <Footer />
  //         </FooterContainr>
  //       </MainTainr>
  //     </ScrollProvider>
  //   )
  return (
    <VisibilityProvider>
      <MainTainr>
        <SEO title={`home`} />
        <HeroContainr>
          <Hero />
        </HeroContainr>
        <ServicesContainr>
          <H2 style={{ paddingBottom: `50px` }}>services</H2>
          <Services />
        </ServicesContainr>
        <InlineLinkTainr style={{ gridArea: `schedule-link` }}>
          <InContentInternalLink
            heading="Need help with a dive job?"
            statement="Let's talk about it."
            link={{ to: `/contact`, label: `Schedule a chat.` }}
          />
        </InlineLinkTainr>
      </MainTainr>
    </VisibilityProvider>
  )
}
