import React from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated } from "react-spring"

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const Gradient = styled(animated.div)`
  height: 700px;
  width: 100%
  max-width: 300px;
  background: radial-gradient(50.13% 45.43% at 50.13% 52.29%, rgba(87, 161, 108, 0.5) 0%, #191F1D 100%);
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
          relativePath: { eq: "hires_110629-N-XD935-139-cropped-0.png" }
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
        style={{ minHeight: `700px`, maxHeight: `700px`, maxWidth: `300px` }}
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
  height: 800px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #191f1d;
  z-index: -1;
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
