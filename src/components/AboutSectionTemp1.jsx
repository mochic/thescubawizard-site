import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, useTransition, useChain, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import AboutImage from "./AboutImage"

import devices from "../devices"

import { AHr } from "./Shared"

import VisibilitySensor from "react-visibility-sensor"

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

const MainTainr = styled.div`
  min-height: 700px;
  display: grid;
  grid-template-areas:
    ". . . "
    ". content ."
    ". . .";
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 250px auto;

  @media ${devices.laptop} {
  }
`

// we use absolute position because it works really well here
const ContentTainr = styled.div`
  grid-area: content;
  padding: 0;
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`

const ImageTainr = styled(animated.div)`
  min-height: 850px;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  position: absolute;
`

export default ({ scrollPos }) => {
  //   const [revealed, setRevealed] = useState(false)

  const [revealProps, setRevealProps] = useSpring(() => ({
    h2Opacity: 1,
    h2Transform: `translate3d(0,-100px,0)`,
    contentOpacity: 1,
  }))

  const atLeastTablet = window.matchMedia(devices.tablet)
  console.log(
    "%cAboutSection media query: ",
    "color: seagreen",
    devices.tablet,
    atLeastTablet
  )

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 500 }}
      onChange={v => {
        console.log("about vis changed!", v)
        if (v) {
          setRevealProps({
            // h2Opacity: 1,
            contentOpacity: 1,
            // h2Transform: `translate3d(0,0px,0)`,
          })
        } else {
          setRevealProps({ h2Opacity: 1, contentOpacity: 1 })
        }
      }}
    >
      <>
        <MainTainr>
          <ContentTainr>
            <AH3>Not your everyday dive service.</AH3>
            <AHr style={{ width: `40%` }} />
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
          </ContentTainr>
        </MainTainr>
        <ImageTainr>
          <AboutImage
            imageTainrProps={{
              style: {
                // opacity: scrollPos * 0.08,
                transform: `translate3d(${scrollPos * 0.05}px, 0, 0)`,
              },
            }}
          />
        </ImageTainr>
        {/* <div
          style={{
            position: `absolute`,
            left: `10%`,
            top: `100px`,
            zIndex: -1,
            opacity: revealProps.h2Opacity,
            transform: `translate3d(0,${scrollPos * 0.4}px,0)`,
            width: `100%`,
          }}
        >
          <AH2
            style={{
              transform: `rotate(-90deg)`,
              opacity: revealProps.h2Opacity,
            }}
          >
            about
          </AH2>
        </div> */}
      </>
    </VisibilitySensor>
  )
}
