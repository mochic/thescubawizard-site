import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

const Gradient = styled(animated.div)`
  background: radial-gradient(
    54.92% 32.8% at 63.31% 57.18%,
    rgba(25, 31, 29, 0.7) 0%,
    #191f1d 100%
  );
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
  position: absolute;
  height: 120%;
  width: 100%;
  min-height: 700px;
  top: 0px;
  left: 0px;

  @media ${devices.laptop} {
    left: 0px;
  }
`

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
`

// it's actually important for us to use images that are wider than tall...for our weird scaling issues design stuffs...
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
        imgStyle={{ objectPosition: "50% 50%" }}
        style={{ minWidth: `450px`, height: `100%` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default ({ imageTainrProps, containrProps, gradientProps }) => {
  return (
    <Containr {...containrProps}>
      <Gradient {...gradientProps}>
        <ImageTainr {...imageTainrProps}>
          <Image />
        </ImageTainr>
      </Gradient>
    </Containr>
  )
}
