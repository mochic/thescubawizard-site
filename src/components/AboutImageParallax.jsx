import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

const Gradient = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    50.92% 44.8% at 34.31% 51.18%,
    rgba(25, 31, 29, 0.7) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
  max-width: 450px;
`

const Containr = styled(animated.div)``

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "diver-83508_1280-cropped-0.png" }
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
        style={{ minWidth: `450px`, maxWidth: `1095px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default ({ imageTainrProps, containrProps }) => {
  return (
    <Containr {...containrProps}>
      <ImageTainr {...imageTainrProps}>
        <Image />
      </ImageTainr>
      <Gradient />
    </Containr>
  )
}
