import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     131.92% 30.8% at 30.31% 34.18%,
//     rgba(25, 31, 29, 0.7) 0%,
//     #191f1d 100%
//   );
//   height: 667px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `
const Gradient = styled(animated.div)`
  background: radial-gradient(
    42.92% 32.8% at 50.31% 54.18%,
    rgba(25, 31, 29, 0.7) 0%,
    #191f1d 100%
  );
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   max-width: 450px;
//   position: absolute;
//   top: 0px;
//   right: 0px;
// `

const ImageTainr = styled(animated.div)`
  z-index: -1;
  position: absolute;
  height: 120%;
  width: 100%;
  top: 0px;
  right: 0px;
  min-height: 700px;
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
        imgStyle={{ objectPosition: "0% 0%" }}
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
