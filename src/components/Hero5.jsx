import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

import ArrowThing from "./ArrowThing"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "5877450937_630ff55938_o.png" }
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
        style={{ minHeight: `1200px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const TitleTainr = styled(animated.h1)`
  z-index: 2;
  width: 80%;
  color: #ffe9c9;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 56px;
  font-family: open sans;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 60%;
`

const ScheduleTainr = styled(animated.div)`
  color: #979797;
  font-family: playfair display;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin-top: 70px;
`

// the scaffold our arrow moves along!
const ArrowTainr = styled(animated.div)``

const RevealingTainr = styled(animated.div)`
  height: 1110px;
  width: 100%;
  background: radial-gradient(
    75.2% 39.24% at 50.13% 39.19%,
    rgba(42, 115, 80, 0.16) 0%,
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
  height: 1200px
  position: relative;
  margin: 0;
  padding: 45% 50px 0 50px;
`

const TitleTainr2 = styled(animated.div)`
  margin: auto;
  padding: 0 0 50px 0;
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
`

export default () => {
  return (
    <>
      <MainTainr>
        <TitleTainr2>
          <TitleChunk0>the</TitleChunk0>
          <TitleChunk1>scuba</TitleChunk1>
          <TitleChunk2>wizard</TitleChunk2>
        </TitleTainr2>
        <Hr />
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
    </>
  )
}
