import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled, { keyframes } from "styled-components"
import { animated } from "react-spring"

//-1096.03 to 37.97
const Gradient = styled(animated.div)`
  min-height: 800px;
  min-width: 1180px;
  position: relative;
  overflow: hidden;
`

// maybe drift should be proportionate to overall size compared to viewport?
const Drift = keyframes`
    from {
        transform: translate3d(-100px,0,0);
    }

    to {
        transform: translate3d(0px,0,0);
    }
`

const ImageTainr = styled(animated.div)`
  z-index: -2;
  position: absolute;
  animation: ${Drift} 55s ease-out;
  animation-fill-mode: forwards;
`

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
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
        style={{ minHeight: `800px`, minWidth: `1180px` }}
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
