import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     50.92% 44.8% at 34.31% 51.18%,
//     rgba(25, 31, 29, 0.7) 0%,
//     #191f1d 100%
//   );
//   height: 667px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     140.92% 25.8% at 49.31% 34.18%,
//     rgba(25, 31, 29, 0.7) 0%,
//     #191f1d 100%
//   );
//   height: 667px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `

// our widget's min size is 700px
// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     38.45% 38.02% at 50.05% 49.94%,
//     rgba(25, 31, 29, 0.76) 0%,
//     #191f1d 100%
//   );
//   height: 700px;
//   width: 600px;
//   position: relative;
//   overflow: hidden;
// `

// min-width: 700px
// min-height: 800px or something...
// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     38.45% 38.02% at 50.05% 49.94%,
//     rgba(25, 31, 29, 0.76) 0%,
//     #191f1d 100%
//   );
//   height: 100%;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
//   min-height: 1000px; /* height is the way...because height is the only fixed part of the element, width is for media queries */
// `

// const Gradient = styled(animated.div)`
//   background: radial-gradient(
//     47.45% 38.02% at 51.05% 49.94%,
//     rgba(25, 31, 29, 0.76) 0%,
//     #191f1d 100%
//   );
//   height: 100%;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
//   min-height: 1000px; /* height is the way...because height is the only fixed part of the element, width is for media queries */
// `

const Gradient = styled(animated.div)`
  background: radial-gradient(
    47.45% 38.02% at 51.05% 49.94%,
    rgba(25, 31, 29, 0.76) 0%,
    #191f1d 100%
  );
  height: 100%;
  width: 101%; /* fixes weird white edge on right hand side on mobile */
  position: relative;
  overflow: hidden;
  min-height: 1000px; /* height is the way...because height is the only fixed part of the element, width is for media queries */
`

const Containr = styled(animated.div)`
  height: 100%;
  width: 100%;
`

const Image = ({ ...outerProps }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "diver-83508_1280-cropped-0-test-3.png" }
        ) {
          childImageSharp {
            fluid(grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
          style={{
            height: `100%`,
            width: `100%`,
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )
    }}
  />
)

// don't set height to 100%, we're using a janky temp hack to make our image not look terrible...
// we're going to crop our images eventually anyway....so this is fine for now...?
const ImageTainr = styled(animated.div)`
  z-index: -1;
  position: absolute;
  width: 100%;
  min-width: 600px;

  top: 0px;
  left: -100px;

  @media ${devices.tablet} {
    left: 0px;
  }

  @media ${devices.laptop} {
    top: -30%;
  }
`

export default ({ imageTainrProps, containrProps }) => {
  return (
    <Containr {...containrProps}>
      <Gradient>
        <ImageTainr>
          <Image outerProps={imageTainrProps} />
        </ImageTainr>
      </Gradient>
    </Containr>
  )
}