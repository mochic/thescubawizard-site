import React from "react"

import styled, { keyframes, css } from "styled-components"
import { animated, useSpring } from "react-spring"

import VisibilitySensor from "react-visibility-sensor"

import ServicesImage from "./ServicesImage"

// import { AHr } from "./Shared"

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

const ContentTainr = styled.div`
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

// // use media queries to scale this
// const MainHeight = 900
// const MainTainr = styled.div`
//   height: ${MainHeight}px;
//   width: 100%;
//   position: relative;
//   z-index: 1;
//   overflow: hidden;
// `

const MainTainr = styled.div`
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

// for media queries
const ImageTainr = styled(animated.div)`
  min-width: 320px;
  width: 100%;
  height: 900px;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
`

const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 260px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;

  @media ${devices.laptop} {
    font-size: 260px;
  }
`

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

export default () => {
  const [props, setProps, stop] = useSpring(() => ({
    contentOpacity: 0.3,
  }))

  return (
    <VisibilitySensor
      partialVisibility
      top={{ offset: 100 }}
      onChange={v => {
        console.log("promise visibility changed!", v)
        if (v) {
          setProps({ contentOpacity: 1 })
        } else {
          setProps({ contentOpacity: 0.3 })
        }
      }}
    >
      <MainTainr>
        <AH2
          style={{
            position: `absolute`,
            top: `10%`,
            left: `45%`,
            fontSize: `200px`,
          }}
        >
          services
        </AH2>
        <ContentTainr style={{ opacity: props.contentOpacity }}>
          <AH3 style={{ textAlign: `center` }}>We've got your back.</AH3>
          <AHr />
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
                // transform: `translate3d(${scrollPos * 0.015}px, 0, 0)`,
              },
            }}
          />
        </ImageTainr>
      </MainTainr>
    </VisibilitySensor>
  )
}
