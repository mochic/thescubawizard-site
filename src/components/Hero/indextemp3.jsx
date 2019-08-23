import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useSpring, useChain, config } from "react-spring"

import HeroImage from "./HeroImage"
import BubbleParticles from "./BubbleParticles"
// import Title from "./TitleSVG"
import devices from "../../devices"

const ParticlesContainr = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;

  /* styling BubbleParticles requires css classNames */
  .bubbles {
    height: 100%;
  }
`

// inner outer container to have a large
// hero image based on our screen size that
// doesn't stretch the rest of our content weirdly...
const OuterHeroImageTainr = styled(animated.div)`
  width: 100%;
  max-height: 100vh !important; /* looks wrong but is very impotant we never want hero to be bigger than screen */
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`

// const InnerHeroImageTainr = styled(animated.div)`
//   height: 100%;
//   width: 200%;

//   @media ${devices.tablet} {
//     height: 100%;
//     width: 100%;
//   }
// `

const InnerHeroImageTainr = styled(animated.div)`
  height: 100%;
  width: 200%;
  max-width: 1600px;
`

// const TitleTainr = styled(animated.div)`
//   display: grid;
//   height: 100%;
//   grid-template-rows: 3fr 1fr 1fr 1fr 2fr;
//   grid-template-areas: "." "titleChunk0" "titleChunk1" "titleChunk2" ".";
//   padding-left: 10%;

//   @media ${devices.mobileL} {
//     padding-left: 20%;
//   }
// `

// const TitleTainr = styled(animated.div)`
//   height: 100%;
//   padding-left: 10%;
//   z-index: 2;

//   @media ${devices.mobileL} {
//     padding-left: 20%;
//   }
// `

const TitleTainr = styled(animated.div)`
  position: absolute;
  bottom: 250px;
  left: 50px;
  z-index: 2;
`

// we're chunking our title so using an h1 might be really bad for SEO
const Title = styled(animated.div)`
  font-size: 4.5em;
  font-family: inconsolata;
  font-weight: 900;
  color: #ffe9c9;
  margin: 0 0 12px 0;
`

const SubTitle = styled(animated.div)`
  font-size: 2.35em;
  font-family: inconsolata;
  font-weight: 900;
  color: white;
`

const Water = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 86%
  );
  top: 0;
  left: 0;
  z-index: 2;
`

export default () => {
  const delay = 1000
  const heroProps = useSpring({
    from: { filter: `blur(20px)` },
    // to: [{ filter: `blur(0px)` }, { filter: `blur(5px)` }],
    to: { filter: `blur(5px)` },
    config: { ...config.stiff, duration: 1500 },
    // delay: 1800,
  })

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,50px,0)`,
      overflow: `hidden`,
    },
    to: { opacity: 1, transform: `translate3d(0,0px,0)` },
    config: config.wobbly,
  })

  return (
    <>
      <ParticlesContainr>
        <BubbleParticles className={`bubbles`} />
      </ParticlesContainr>
      <Water />
      <OuterHeroImageTainr>
        <InnerHeroImageTainr style={heroProps}>
          <HeroImage />
        </InnerHeroImageTainr>
      </OuterHeroImageTainr>
      <TitleTainr style={titleProps}>
        <Title>the</Title>
        <Title>scuba</Title>
        <Title>wizard</Title>
        <SubTitle>dive expert.</SubTitle>
      </TitleTainr>
    </>
  )
}
