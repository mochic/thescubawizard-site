import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled, { keyframes } from "styled-components"
import { animated } from "react-spring"

//-1096.03 to 37.97
const Gradient = styled(animated.div)`
  height: 800px;
  width: 1180px;
  position: relative;
  overflow: hidden;
`

const ImageTainr = styled(animated.div)`
  z-index: -2;
  position: absolute;
`

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
`

const DriftRight = keyframes`
    from {
        transform: translate3d(0px,0,0);
    }

    to {
        transform: translate3d(40px,0,0);
    }
`

const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 72px;
  line-height: 164.3%;
  z-index: -1;
  position: absolute;
  top: 0px;
  right: -110px;
  color: #ffe9c9;
  animation: ${DriftRight} 6s ease-out;
  animation-fill-mode: forwards;
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
  children,
}) => {
  const {
    lg0percent,
    style: gradientStyle,
    ...gradientPropsRest
  } = gradientProps
  console.log(`%ccontact gradientProps:`, "color: blue", gradientProps)
  return (
    <Containr {...containrProps}>
      <Gradient
        style={{
          background: lg0percent.interpolate(
            v =>
              `linear-gradient(254.29deg, rgba(46, 144, 111, 0.3) ${v}%, #191f1d 75.64%)`
          ),
          ...gradientStyle,
        }}
        {...gradientPropsRest}
      >
        <ImageTainr {...imageTainrProps}>
          <Image />
        </ImageTainr>
      </Gradient>
      {children}
    </Containr>
  )
}
