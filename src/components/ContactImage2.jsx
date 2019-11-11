import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

const Gradient = styled(animated.div)`
  background: linear-gradient(
    254.29deg,
    rgba(46, 144, 111, 0.3) 37.97%,
    #191f1d 75.64%
  );
  height: 800px;
  width: 1180px;
  position: relative;
  overflow: hidden;
`

const ImageTainr = styled(animated.div)`
  z-index: -2;
  position: absolute;
  top: 0px;
  right: 0px;
`

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 72px;
  line-height: 164.3%;
  z-index: -1;
  position: absolute;
  top: 0px;
  right: 50px;
  color: #ffe9c9;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "140219-N-BJ254-058.jpg" }) {
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
        imgStyle={{ objectFit: "cover", objectPosition: "top left" }}
        style={{ height: `800px`, width: `1180px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default ({
  imageTainrProps,
  containrProps,
  gradientProps,
  headerProps,
}) => {
  return (
    <Containr {...containrProps}>
      <Gradient {...gradientProps}>
        <ImageTainr {...imageTainrProps}>
          <Image />
        </ImageTainr>
      </Gradient>
      <AH3 {...headerProps}>schedule</AH3>
    </Containr>
  )
}
