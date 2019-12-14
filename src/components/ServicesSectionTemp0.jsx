import React from "react"

import styled, { keyframes, css } from "styled-components"
import { animated, useSpring } from "react-spring"

import VisibilitySensor from "react-visibility-sensor"

import ServicesImage from "./ServicesImage"

import { AHr } from "./Shared"

import devices from "../devices"

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 26px;
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

const ContentTainr = styled(animated.div)`
  padding: 0;
  margin: 50px auto 0px auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.tablet}) {
    flex-direction: row;
  }
`

// use media queries to scale this
const MainHeight = 500
const MainTainr = styled.div`
  height: ${MainHeight}px;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
`

// for media queries
const ImageTainr = styled(animated.div)`
  min-width: 320px;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
`

// const DriftKeys = keyframes`
//   from {
//       transform: translate3d(0px,0px,0)
//   }
//   to {
//       transform: translate3d(-10px,-10px,0)
//   }
// `

export default ({ scrollPos }) => {
  const [props, setProps, stop] = useSpring(() => ({
    contentOpacity: 0.3,
    imageOpacity: 0,
  }))

  return (
    <VisibilitySensor
      partialVisibility
      top={{ offset: 100 }}
      onChange={v => {
        console.log("promise visibility changed!", v)
        if (v) {
          setProps({ contentOpacity: 1, imageOpacity: 1 })
        } else {
          setProps({ contentOpacity: 0.3, imageOpacity: 0 })
        }
      }}
    >
      <MainTainr>
        <ContentTainr style={{ opacity: props.contentOpacity }}>
          <AH3 style={{ textAlign: `center` }}>We've got your back.</AH3>
          <AHr style={{ width: `40%` }} />
          <AP
            style={{
              textAlign: `center`,
              fontFamily: `open sans`,
              fontSize: `16px`,
              fontWeight: 300,
            }}
          >
            We'll work with you to make sure the job gets done right the first
            time. If it takes longer than expected, we promise not the leave you
            high and dry with a half-finished job!
          </AP>
        </ContentTainr>
        <ImageTainr
          style={{
            opacity: props.imageOpacity,
          }}
        >
          <ServicesImage
            imageTainrProps={{
              style: {
                // opacity: scrollPos * 0.08,
                transform: `translate3d(${scrollPos * 0.015}px, 0, 0)`,
              },
            }}
          />
        </ImageTainr>
      </MainTainr>
    </VisibilitySensor>
  )
}
