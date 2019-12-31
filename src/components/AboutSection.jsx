import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, useTransition, useChain, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import AboutImage from "./AboutImage"

import devices from "../devices"

// import { AHr } from "./Shared"

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 26px;
  font-weight: bold;
  color: #ffe9c9;
  line-height: 150%;
  text-align: center;
`

const AP = styled(animated.p)`
  font-family: open sans;
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 200%;
`

const MainTainr = styled(animated.section)`
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

const ContentTainr = styled(animated.div)`
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

// make chunks go in different directions as u scroll?
const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 260px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;
  width: 100%;
  min-width: 300px;
  word-break: break-word;

  @media ${devices.laptop} {
    font-size: 260px;
  }
`

// we needs teh queries!
const AHr = styled(animated.hr)`
  width: 40%;
  border: 0.5px solid #ffe9c9;
  margin: 0 0 16px 0;

  @media ${devices.laptop} {
    height: 300px;
    width: 0.5px;
    display: inline-block;
    margin: auto 50px auto 50px;
  }
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
  height: 900px;
  width: 100%;
  position: absolute;
  top: -1px; /* fixes weird break in space on mobile S */
  left: 0px;

  @media ${devices.tablet} {
  }

  @media ${devices.laptop} {
  }
`

// think about the images as modals moving along an axis

const Curtain = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: #191f1d;
  position: absolute;
  z-index: 0;
`

export default ({
  contentTainrProps,
  headerProps,
  curtainProps,
  mainTainrStyle,
}) => {
  const [revealProps, setRevealProps] = useSpring(() => ({
    imageOpacity: 0,
    curtainOpacity: 1,
  }))

  // const atLeastTablet = window.matchMedia(devices.tablet)
  // console.log(
  //   "%cAboutSection media query: ",
  //   "color: seagreen",
  //   devices.tablet,
  //   atLeastTablet
  // )

  // const { style: headerStyle, ...headerPropsRest } = headerProps || {} // hacky default value

  console.log("%cAbout Section rendered!", "color: red")

  return (
    <MainTainr style={{ ...mainTainrStyle }}>
      <AH2
        style={{
          position: `absolute`,
          top: `5px`,
          // left: `41px`,
          left: `100px`, // to account for animation
          ...headerProps,
        }}
      >
        about
      </AH2>
      <ContentTainr style={contentTainrProps}>
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
          We’re dedicated to delivering a quality dive service to the Pacific
          Northwest area. With us you wont have to worry about stuff? You
          shouldnt need to take time out of your busy work schedule.
        </AP>
      </ContentTainr>
      <Curtain style={curtainProps} />
      <ImageTainr>
        <AboutImage
          containrProps={{
            style: {
              gridArea: `image`,
              // overflow: `hidden`, // no ideas why...it just screws up everything if an accidental zoom occurs
              margin: `-1px`,
            },
          }}
          imageTainrProps={{
            style: {
              opacity: revealProps.imageOpacity,
              // transform: `translate3d(-${scrollDrift}px, 0, 0)`,
            },
          }}
        />
      </ImageTainr>
    </MainTainr>
  )
}
