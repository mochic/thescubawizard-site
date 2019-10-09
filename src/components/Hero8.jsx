import React, { useLayoutEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import VisibilitySensor from "react-visibility-sensor"

import ArrowThing from "./ArrowThing"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "5877450937_630ff55938_cropped_1.png" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        imgStyle={{ objectPosition: "0% 0%" }}
        style={{
          minHeight: `900px`,
        }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const ScheduleTainr = styled(animated.div)`
  color: #979797;
  font-family: playfair display;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`

// the scaffold our arrow moves along!
const ArrowTainr = styled(animated.div)``

const RevealingTainr = styled(animated.div)`
  height: 900px;
  width: 100%;
  background: radial-gradient(
    97.71% 43.87% at 50.13% 47.97%,
    rgba(0, 0, 0, 0.25) 0%,
    #191f1d 100%
  );
  opacity: 0.9;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
  width: 100%;
`

// position relative is super important for anchoring our absolute pos stuff!
// const MainTainr = styled(animated.div)`
//   height: 1000px;
//   position: relative;
//   margin: auto;
//   padding: 0 50px 0 50px;
//   background: green;
// `

const MainTainr = styled(animated.div)`
  height: 900px;
  position: relative;
`

const TitleTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 250px;
`

// TODO: create more SEO friendly h1 version
const TitleChunk0 = styled(animated.p)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 26px;
  font-weight: normal;
  line-height: 100%;
  color: #ffffff;
  margin: 0;
  margin-bottom: 6px;
`

const TitleChunk1 = styled(animated.span)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 36px;
  font-weight: 800;
  line-height: 100%;
  color: #ffe9c9;
`

const TitleChunk2 = styled(animated.span)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 36px;
  font-weight: 300;
  line-height: 100%;
  color: #ffffff;
`

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 50px 0 0 0;
`

const Hint = styled(animated.div)`
  width: 100%;
  position: fixed;
  text-align: center;
  bottom: 7%;
  color: #979797;
  font-family: playfair display;
  font-size: 16px;
`

export default () => {
  const [visibility, setVisibility] = useState({
    hint: false,
    page: false,
  })

  const hintProps = useSpring({
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    to: {
      opacity: visibility.hint ? 1 : 0,
      transform: visibility.hint
        ? `translate3d(0,0px,0)`
        : `translate3d(0,40px,0)`,
    },
    config: config.molasses,
  })

  const triggerHint = () => {
    setTimeout(() => {
      console.log("Hero visibility: ", visibility)
      if (visibility.page && !visibility.hint) {
        setVisibility({
          ...visibility,
          hint: true,
        })
      }
    }, 1500)
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (visibility.hint) {
        setVisibility({
          ...visibility,
          hint: false,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })
  console.log("%chero rendered", "color: blue")
  return (
    <>
      <VisibilitySensor
        partialVisibility="top"
        onChange={visible => {
          console.log("%chero visibility changed: ", "color: yellow", visible)

          setVisibility({
            ...visibility,
            page: visible,
          })

          if (visible) {
            triggerHint()
          }
        }}
      >
        <MainTainr>
          <TitleTainr>
            <TitleChunk0>the</TitleChunk0>
            <TitleChunk1>scuba</TitleChunk1>
            <TitleChunk2>wizard</TitleChunk2>
            <Hr />
            <ScheduleTainr>
              Schedule a chat.
              <ArrowTainr>
                <ArrowThing fill={`#979797`} />
              </ArrowTainr>
            </ScheduleTainr>
          </TitleTainr>
          <BackTainr>
            <ImageTainr>
              <Image />
            </ImageTainr>
            <RevealingTainr />
          </BackTainr>
        </MainTainr>
      </VisibilitySensor>
      <Hint style={hintProps}>Scroll for more.</Hint>
    </>
  )
}
