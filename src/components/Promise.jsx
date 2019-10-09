import React from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated } from "react-spring"

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const Gradient = styled(animated.div)`
  height: 1200px;
  width: 100%;
  background: radial-gradient(
    53.33% 30.28% at 50.13% 41.93%,
    rgba(87, 161, 108, 0.5) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0px;
  left: 0px;
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

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "hires_110629-N-XD935-139.jpg" }
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

const ImageThing = () => {
  return (
    <BackTainr>
      <ImageTainr>
        <Image />
      </ImageTainr>
      <Gradient />
    </BackTainr>
  )
}

// position relative is super important for anchoring our absolute pos stuff!
const MainTainr = styled(animated.div)`
  height: 1300px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ContentTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 250px;
`

const Header = styled(animated.h2)`
  font-family: playfair display;
  font-size: 32px;
  font-weight: bold;
  color: #ffe9c9;
`

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 50px 0 0 0;
`

const P = styled(animated.p)`
  color: white;
  font-family: open sans;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  padding: 0;
`

export default () => {
  return (
    <MainTainr>
      <ContentTainr>
        <Header>The whole distance.</Header>
        <Hr />
        <P>
          We'll work with you to make sure the job gets done right the first
          time.
        </P>
      </ContentTainr>
      <ImageThing />
    </MainTainr>
  )
}
