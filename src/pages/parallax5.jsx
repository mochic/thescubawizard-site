import React, { useLayoutEffect, useState } from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring, useTransition, config } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import smoothscroll from "smoothscroll-polyfill"

import HeroImage from "../components/HeroImageParallax"
import AboutImage from "../components/AboutImageParallax5"
import Interested from "../components/InterestedParallax"

import AboutThing from "../components/AboutThingParallax1"

import TitleSVG from "../components/TitleSVG"

import devices from "../devices"

smoothscroll.polyfill()

const HeroTainr = styled(animated.div)`
  background: #191f1d;
`

const Hero = ({ outerProps, innerProps, titleProps, titleSVGProps }) => {
  const [visible, setVisible] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    console.log("%ctitle clicked!", "color: red")
    if (!visible) {
      window.scrollTo({ top: 0, behavior: `smooth` })
      console.log("%cscrolling to top!", "color: green")
    }
  }

  return (
    <VisibilitySensor
      partialVisibility="top"
      onChange={v => {
        if (visible !== v) {
          setVisible(v)
          console.log("%chero visibility changed", "color: purple", v)
        }
      }}
    >
      <HeroTainr {...outerProps}>
        <HeroImage {...innerProps} />
        <div onClick={handleClick} {...titleProps}>
          <TitleSVG {...titleSVGProps} />
        </div>
      </HeroTainr>
    </VisibilitySensor>
  )
}

// const AboutTainr = styled(animated.div)`
//   background: red;
//   color: white;
//   font-family: open sans;
//   font-weight: 300;
//   font-size: 18px;
//   position: absolute;
//   height: 885px;
// `

// const AboutTainr = styled(animated.div)`
//   background: red;
//   color: white;
//   font-family: open sans;
//   font-weight: 300;
//   font-size: 18px;
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   z-index: 2;
//   overflow: hidden;
// `

// const AboutTainr = styled(animated.div)`
//   background: red;
//   color: white;
//   font-family: open sans;
//   font-weight: 300;
//   font-size: 18px;
//   height: 100%;
//   width: 100%;
//   z-index: 2;
//   overflow: hidden;
// `

// const DriftAnimation = keyframes`
//     0% { transform: translate3d(0px,0px,0) scale(1) }
//     100% { transform: translate3d(-200px,40px,0) scale(1.1) }
// `

// const AH3 = styled(animated.h3)`
//   font-family: playfair display;
//   font-size: 36px;
//   font-weight: 700;
//   color: #ffe9c9;
//   line-height: 150%;
//   backdrop-filter: blur(4px);
// `

// const AP = styled(animated.p)`
//   font-family: open sans;
//   font-size: 18px;
//   font-weight: 600;
//   color: white;
//   line-height: 200%;
// `

// const AboutContentTainr = styled(animated.div)`
//   padding: 0;
//   margin: auto;
//   width: 250px;
//   display: flex;
//   flex-direction: column;

//   @media (${devices.tablet}) {
//     flex-direction: row;
//   }
// `

// const About = ({ innerProps, outerProps, imageTainrProps, contentProps }) => {
//   const [visible, setVisible] = useState(false)

//   //   const imageProps = useSpring({
//   //     from: { opacity: 0 },
//   //     to: { opacity: visible ? 1 : 0 },
//   //     config: config.gentle,
//   //   })

//   //   const imageDrift = css`
//   //     animation: ${DriftAnimation} 2s ease-in;
//   //   `

//   return (
//     <VisibilitySensor
//       partialVisibility="top"
//       onChange={v => {
//         if (!visible && v) {
//           setVisible(true)
//           console.log("%cabout fully revealed!", "color: green")
//         }
//       }}
//     >
//       <AboutTainr {...outerProps}>
//         <div {...innerProps}>
//           <AboutContentTainr {...contentProps}>
//             <AH3>
//               Not your everyday
//               <br />
//               dive service.
//             </AH3>
//             <AP>
//               We’re dedicated to delivering a quality dive service to the
//               Pacific Northwest area. With us you wont have to worry about
//               stuff? You shouldnt need to take time out of your busy work
//               schedule.
//             </AP>
//           </AboutContentTainr>
//           <AboutImage imageTainrProps={imageTainrProps} />
//         </div>
//       </AboutTainr>
//     </VisibilitySensor>
//   )
// }

const MainTainr = styled(animated.div)`
  background: green;
  position: relative;
  height: calc(100vh + ${885}px);
`

const OuterHeroTainr = styled(animated.div)`
  max-height: 600px;
  overflow: hidden;
`

const AboutHeight = 500

const OuterAboutTainr = styled(animated.div)`
  min-height: 900px;
  max-height: 1100px;
  overflow: hidden;
  background: yellow;
`

export default () => {
  const [pos, setPos] = useState(0)

  const [heroVisible, setHeroVisible] = useState(false)

  const handleScroll = e => {
    setPos(window.pageYOffset)
    console.log("%cscrolling!", "color: red", window.pageYOffset)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const titleTop = 300 - pos * 1.5
  const titleTopPadding = 20
  console.log("titleTop", titleTop)

  const aboutVelocity = 0.6
  const aboutPos = aboutVelocity * pos
  const aboutOpacity = pos / 100

  const aboutImageVelocity = 0.05
  const aboutImagePos = aboutImageVelocity * pos

  const titleRate = 0.6 / 300
  const titleScaleCalc = 1.6 - pos * titleRate
  const titleScale = titleScaleCalc > 1.0 ? titleScaleCalc : 1.0

  const contentOffset = [0, pos / 0.5, 0]

  return (
    <MainTainr>
      <OuterHeroTainr>
        <Hero
          outerProps={{
            style: {
              position: `relative`,
            },
          }}
          innerProps={{
            style: {
              opacity: pos > 100 ? 80 / pos : 1,
            },
          }}
          titleProps={{
            style: {
              position: `fixed`,
              zIndex: 1000,
              top: `${
                titleTop > titleTopPadding ? titleTop : titleTopPadding
              }px`,
              width: `100%`,
              textAlign: `center`,
            },
          }}
          titleSVGProps={{ style: { transform: `scale(${titleScale})` } }}
        />
      </OuterHeroTainr>
      {/* about block so page accounts for about*/}
      <OuterAboutTainr>
        <AboutThing
          //   outerProps={{
          //     style: {
          //       top: `calc(100vh - ${aboutPos}px)`,
          //     },
          //   }}
          imageTainrProps={{
            style: {
              left: `-${aboutImagePos}px`,
              opacity: aboutOpacity,
            },
          }}
          contentOffset={contentOffset}
          // contentProps={{
          //   style: { bottom: `${contentPos}px` },
          // }}
        />
      </OuterAboutTainr>
      <div>
        <Interested />
      </div>
    </MainTainr>
  )
}
