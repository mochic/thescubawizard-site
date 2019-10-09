import React, { useState } from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated } from "react-spring"

import ArrowThing from "./ArrowThing"

import FancyLink from "./FancyLink"

const AnimatedH2 = styled(animated.h2)`
  color: #ffe9c9;
  font-family: playfair display;
  font-size: 48px;
  margin: 0;
  padding: 0 0 10px 0;
  font-weight: 700;
  text-align: center;
`

const P = styled(animated.p)`
  font-size: 16px;
  font-family: open sans;
  color: white;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const Gradient = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    127.87% 41.37% at 59.13% 52.4%,
    rgba(80, 133, 95, 0.25) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
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
  height: 500px;
  width: 100%;
  position: relative;
  background: #191f1d;
  z-index: -1;
  overflow: visible;
`

const ContentTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 250px;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "deep-diving-deep-diving-gear-diver-54306.jpg" }
        ) {
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ minHeight: `1000px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 30px 0 15px 0;
`

export default () => {
  // need outer container to position lazy loading background image
  return (
    <>
      <MainTainr>
        <ContentTainr>
          <AnimatedH2>Interested?</AnimatedH2>
          <P>Scheduling a chat takes less than a minute.</P>
          <Hr />
          <FancyLink to={"/contact"}>Get started today!</FancyLink>
        </ContentTainr>
        <BackTainr>
          <ImageTainr>
            <Image />
          </ImageTainr>
          <Gradient />
        </BackTainr>
      </MainTainr>
    </>
  )
}
