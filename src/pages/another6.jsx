import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import debounce from "lodash/debounce"

import HeroImage from "../components/HeroImageParallax2"
// import AboutImage from "../components/AboutImageParallax5"
import AboutImageParallax5 from "../components/AboutImageParallax5"

import TitleSVG from "../components/TitleSVG"

import device from "../devices"

const ADiv = styled(animated.div)``

// for media queries primarily
const HeroTainr = styled(animated.div)`
  overflow: hidden;
  background: yellow;
  position: relative;
  height: 70vh;
`

const AboutTainr = styled(animated.div)`
  min-height: 800px;
  overflow: hidden;
  background: blue;
`

const MainTainr = styled(animated.div)`
  position: relative;
`

// for auto webkit stuff
const AH1 = styled(animated.h1)`
  position: sticky;
  top: 0;
`

// const TitleTainr = styled(animated.div)`
//   z-index: 1000;
//   width: 100%;
//   position: fixed;
//   text-align: center;
//   backdrop-filter: blur(10px);
// `

const TitleTainr = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  position: fixed;
  text-align: center;
`

const BlurringDiv = styled(animated.div)`
  background: linear-gradient(180deg, rgba(25, 31, 29, 0) 0%, #191f1d 128.99%);
  height: 194px;
  width: 100%;
`

// const Depths = styled(animated.div)`
//   position: absolute;
//   background: radial-gradient(
//     122.67% 58.87% at 50.13% 31.34%,
//     rgba(25, 31, 29, 0) 0%,
//     #191f1d 100%
//   );
//   min-height: 500px;
//   width: 100%;
// `

// const Depths = styled(animated.div)`
//   position: absolute;
//   background: #191f1d;
//   min-height: 500px;
//   width: 100%;
// `

// const AboutTainr2 = styled(animated.div)`
//   background: #191f1d;
//   min-height: 900px;
//   width: 100%;
//   position: relative;
// `

const H2 = styled.h2`
  font-family: playfair display;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #2d2d2d;
  font-size: 150px;
  z-index: -1;
`

// intelligently scale with js :/
const AboutHeight = 900
const AboutTainr2 = styled(animated.div)`
  min-height: ${AboutHeight}px;
  width: 100%;
  position: relative;
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 36px;
  font-weight: 700;
  color: #ffe9c9;
  line-height: 150%;
`

const AP = styled(animated.p)`
  font-family: open sans;
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 200%;
`

const AboutContentTainr = styled(animated.div)`
  padding: 0;
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
  }
`

const AboutImageTainr = styled(animated.div)`
  min-height: 850px;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  position: absolute;
`

export default () => {
  const [pos, setPos] = useState()

  // maybe use different based on browser support, etc....
  const rawHandler = () => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset) // window.scrollTop() doesnt work on safari?
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

  //   const heroImageProps = {
  //     style: {
  //       opacity: 1 - pos / 300, // scroll 300px before fading out
  //     },
  //   }

  const heroImageProps = {
    gradientProps: {
      gv: 80 - (pos * 80) / 150,
    },
  }

  const finalHeaderTop = 0
  const headerTopPadding = 300

  const atTop = true

  const titleStyle = {
    top: `${headerTopPadding + finalHeaderTop}px`,
    transform: `translate3d(0,-${
      pos > headerTopPadding ? headerTopPadding : Math.ceil(pos)
    }px,0px)`,
    background: atTop ? `none` : `none`,
    padding: `10px 0 10px 0`,
  }

  const tSVGStyle = {
    transform: `scale(${1.5})`,
  }

  console.log(heroImageProps)
  return (
    <MainTainr>
      <TitleTainr style={titleStyle}>
        <TitleSVG style={tSVGStyle} />
      </TitleTainr>
      <HeroTainr className="hero-tainr">
        <HeroImage {...heroImageProps} />
      </HeroTainr>
      <AboutTainr2>
        <AboutContentTainr style={{ opacity: Math.ceil(pos / 70) }}>
          <AH3>
            Not your everyday
            <br />
            dive service.
          </AH3>
          <AP>
            We’re dedicated to delivering a quality dive service to the Pacific
            Northwest area. With us you wont have to worry about stuff? You
            shouldnt need to take time out of your busy work schedule.
          </AP>
        </AboutContentTainr>
        <AboutImageTainr>
          <AboutImageParallax5
            imageTainrProps={{
              style: {
                opacity: pos * 0.08,
                transform: `translate3d(${pos * 0.05}px, ${pos * 0.09}px, 0)`,
              },
            }}
          />
        </AboutImageTainr>
        <div
          style={{
            position: `absolute`,
            left: `10%`,
            top: `100px`,
            zIndex: -1,
            transform: `translate3d(0,${Math.min(pos * 0.65, 450)}px,0)`,
          }}
        >
          <H2
            style={{
              transform: `rotate(-90deg)`,
            }}
          >
            about
          </H2>
        </div>
      </AboutTainr2>
      {/* <AboutTainr>
        <AboutImageParallax5 />
      </AboutTainr> */}
    </MainTainr>
  )
}
