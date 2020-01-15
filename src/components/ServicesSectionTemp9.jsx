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

const MainTainr = styled.div`
  display: grid;
  position: relative; /* very important for absolute positioned image */
  height: 700px;
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
  top: -200px;
  right: 0px;
  z-index: -1;
`

const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 200px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;
  width: 100%;
  word-break: break-all;

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

const Curtain = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: #191f1d;
  position: absolute;
  z-index: 0;
`

// services list
const WeirdLiLabel = styled(animated.p)`
  font-size: 50px;
  font-family: playfair display;
  color: #ffffff;
  mix-blend-mode: overlay;
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0.1;
  top: -24px;
`

const WeirdLi = styled(animated.li)`
  font-family: open sans;
  font-size: 16px;
  font-weight: normal;
  color: white;
  position: relative;
  margin: 0 0 50px 0;
`

// const WeirdUl = styled(animated.ul)`
//   list-style-type: none;
//   align-self: flex-start;
//   padding: 0;
//   margin: 16px 0 0 20px;
// `

const WeirdUl = styled(animated.ul)`
  list-style-type: none;
  padding: 0;
  margin: 16px 0 0 20px;
`

const InnerContenTainr = styled.div`
  background: blue;
`

const WeirdList = ({ items }) => {
  return (
    <WeirdUl>
      {items.map((v, i) => {
        return (
          <WeirdLi key={`weird-li-${i}`}>
            <WeirdLiLabel>{`0${i + 1}`}</WeirdLiLabel>
            {v}
          </WeirdLi>
        )
      })}
    </WeirdUl>
  )
}

export default ({
  headerProps,
  contentProps,
  curtainProps,
  imageProps,
  h2Props0,
  h2Props1,
}) => {
  return (
    <MainTainr>
      <ContentTainr style={{ ...contentProps }}>
        <AH3 style={{ textAlign: `center` }}>We've got your back.</AH3>
        <AHr />
        <InnerContenTainr>
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
          <WeirdList
            items={[`Hull cleaning`, `Anode replacement`, `Lost item recovery`]}
          />
        </InnerContenTainr>
      </ContentTainr>
      <Curtain style={{ ...curtainProps }} />
      <AH2
        style={{
          position: `absolute`,
          // top: `5%`,
          // right: `-200px`,
          fontSize: `200px`,
          minWidth: `300px`,
          ...headerProps,
        }}
      >
        services
      </AH2>
      <ImageTainr {...imageProps}>
        <ServicesImage />
      </ImageTainr>
    </MainTainr>
  )
}
