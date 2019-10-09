import React from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { animated } from "react-spring"

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const Gradient = styled(animated.div)`
  height: 100%;
  width: 100%
  max-height: 900px;
  background: radial-gradient(50% 31.37% at 63.85% 31.85%,#191f1d75 0%,#191F1D 100%);
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
        style={{
          minHeight: `600px`,
          maxHeight: `900px`,
          boxShadow: `inset 10px 10px 189px 31px rgba(0,0,0,1)`,
        }}
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
  height: 100%;
  width: 100%;
  max-height: 700px;
  overflow: hidden;
  position: relative;
  background: #191f1d;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`

const ContentTainr = styled(animated.div)`
  margin: 0 auto;
  width: 250px;
  grid-row-start: 4;
  grid-column-start: 2;
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
        {/* <P>
          We won't leave you high and dry with a 
        </P> */}
      </ContentTainr>
      <ImageThing />
    </MainTainr>
  )
}