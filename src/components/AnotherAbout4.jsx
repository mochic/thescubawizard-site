import React, { useLayoutEffect, useState, useRef } from "react"

import styled from "styled-components"
import { animated, useTransition, useChain, useSpring } from "react-spring"

import debounce from "lodash/debounce"

import AboutImage from "./AboutImageParallax5"

import device from "../devices"

import VisibilitySensor from "react-visibility-sensor"

const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #2d2d2d;
  font-size: 150px;
  z-index: -1;
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

export default ({ scrollPos }) => {
  const [revealed, setRevealed] = useState(false)

  //   const h2Transition = useTransition(revealed, null, {
  //     from: { opacity: 0, transform: `translate3d(0,-100px,0)` },
  //     enter: {
  //       opacity: 1,
  //       transform: `translate3d(0,${Math.min(scrollPos * 0.65, 450)}px,0)`,
  //     },
  //   })

  //   const contentTransition = useTransition(revealed, null, {
  //     from: { opacity: 0 },
  //     enter: {
  //       opacity: 1,
  //     },
  //   })

  const [revealProps, setRevealProps] = useSpring(() => ({
    h2Opacity: 0,
    h2Transform: `translate3d(0,-100px,0)`,
    contentOpacity: 0,
  }))

  // this is inefficient but we'll fix this later...
  setRevealProps({ h2Opacity: 1, contentOpacity: 1 })

  return (
    <VisibilitySensor
      onChange={v => {
        if (v && !revealed) {
          console.log("another about revealed!")
          setRevealed(true)
        }
      }}
    >
      <>
        <AboutContentTainr style={{ opacity: revealProps.contentOpacity }}>
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
          <AboutImage
            imageTainrProps={{
              style: {
                opacity: scrollPos * 0.08,
                transform: `translate3d(${scrollPos * 0.05}px, ${scrollPos *
                  0.09}px, 0)`,
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
            opacity: revealProps.h2Opacity,
            transform: revealProps.h2Transform,
          }}
        >
          <AH2
            style={{
              transform: `rotate(-90deg)`,
            }}
          >
            about
          </AH2>
        </div>
      </>
    </VisibilitySensor>
  )
}
