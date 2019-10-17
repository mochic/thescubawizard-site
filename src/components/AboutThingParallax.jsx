import React, { useLayoutEffect, useState } from "react"

import styled, { css, keyframes } from "styled-components"
import { animated, useSpring, useTransition, config } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import AboutImage from "../components/AboutImageParallax5"

import devices from "../devices"

const AboutTainr = styled(animated.div)`
  background: red;
  color: white;
  font-family: open sans;
  font-weight: 300;
  font-size: 18px;
  height: 100%;
  width: 100%;
  z-index: 2;
  overflow: hidden;
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 36px;
  font-weight: 700;
  color: #ffe9c9;
  line-height: 150%;
  backdrop-filter: blur(4px);
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

  @media (${devices.tablet}) {
    flex-direction: row;
  }
  position: absolute;
  left: 0px;
  z-index: 1;
`

// change bottom value because it makes the most sense to push from the bottom
const About = ({ innerProps, outerProps, imageTainrProps, contentProps }) => {
  const [visible, setVisible] = useState(false)

  //   const imageProps = useSpring({
  //     from: { opacity: 0 },
  //     to: { opacity: visible ? 1 : 0 },
  //     config: config.gentle,
  //   })

  //   const imageDrift = css`
  //     animation: ${DriftAnimation} 2s ease-in;
  //   `
  console.log("%cabout content props:", "color: violet", contentProps)
  return (
    <VisibilitySensor
      partialVisibility="top"
      onChange={v => {
        if (!visible && v) {
          setVisible(true)
          console.log("%cabout top revealed!", "color: green")
        }
      }}
    >
      <AboutTainr {...outerProps}>
        <div {...innerProps}>
          <AboutContentTainr {...contentProps}>
            <AH3>
              Not your everyday
              <br />
              dive service.
            </AH3>
            <AP>
              We’re dedicated to delivering a quality dive service to the
              Pacific Northwest area. With us you wont have to worry about
              stuff? You shouldnt need to take time out of your busy work
              schedule.
            </AP>
          </AboutContentTainr>
          {/* <AboutImage imageTainrProps={imageTainrProps} /> */}
        </div>
      </AboutTainr>
    </VisibilitySensor>
  )
}

export default About
