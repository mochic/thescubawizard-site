import React, { useLayoutEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

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
        style={{ minHeight: `900px` }}
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
  background: blue;
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
  top: 0;
  left: 0;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
`

// position relative is super important for anchoring our absolute pos stuff!
const MainTainr = styled(animated.div)`
  height: 1000px;
  position: relative;
  margin: 0;
  padding: 0 50px 0 50px;
  background: green;
`

const TitleTainr = styled(animated.div)`
  margin: auto;
  padding: 70% 0 0 0;
  display: inline-block;
  background: red;
  width: 100%;
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
  margin-bottom: 10px;
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
  const [hintVisible, setHintVisible] = useState(false)

  const hintProps = useSpring({
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    to: {
      opacity: hintVisible ? 1 : 0,
      transform: hintVisible ? `translate3d(0,0px,0)` : `translate3d(0,40px,0)`,
    },
    config: config.molasses,
  })

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (hintVisible) {
        setHintVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    setTimeout(() => setHintVisible(true), 1500)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <>
      <MainTainr>
        <TitleTainr>
          <TitleChunk0>the</TitleChunk0>
          <TitleChunk1>scuba</TitleChunk1>
          <TitleChunk2>wizard</TitleChunk2>
          <Hr />
        </TitleTainr>
        <ScheduleTainr>
          Schedule a chat.
          <ArrowTainr>
            <ArrowThing fill={`#979797`} />
          </ArrowTainr>
        </ScheduleTainr>
        <BackTainr>
          <ImageTainr>
            <Image />
          </ImageTainr>
          <RevealingTainr />
        </BackTainr>
      </MainTainr>
      <Hint style={hintProps}>Scroll for more.</Hint>
    </>
  )
}
