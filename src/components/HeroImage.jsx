import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled, { keyframes } from "styled-components"
import { animated } from "react-spring"

import TitleSVG from "./TitleSVGEmbed"

// const RevealingTainr = styled(animated.div)`
//   height: 100%;
//   width: 100%;
//   background: radial-gradient(
//     102.87% 80.01% at 59.07% 14.02%,
//     rgba(25, 31, 29, 0.9) 0%,
//     #191f1d 100%
//   );
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: 0;
// `

const Drift = keyframes`
from {
    transform: translate3d(0,0px,0);
}

to {
    transform: translate3d(0,-40px,0);
}
`

const defaultGV = 80
const RevealingTainr = styled.div`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    102.87% ${({ gv }) => (gv ? gv : defaultGV)}% at 59.07% 14.02%,
    rgba(25, 31, 29, 0.9) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  pointer-events: none;
`

// const ImageTainr = styled(animated.div)`
//   z-index: -1;
//   animation: ${Drift} 55s ease-out;
// `

const ImageTainr = styled(animated.div)`
  z-index: -1;
  transform: translate3d(
    0,
    0,
    0
  ); /* somehow this fixes the filter thing on chrome...weird...todo investigate... */
`

const Containr = styled(animated.div)``

const Image = ({ style, imgStyle }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "5877450937_630ff55938_cropped_1.png" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        imgStyle={{ objectPosition: "0% 0%", ...imgStyle }}
        style={{
          minHeight: `100vh`,
          ...style,
        }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default ({ outerProps, imageProps, gradientProps, children }) => {
  console.log("%chero image props", "color: orange", {
    outerProps,
    imageProps,
    gradientProps,
  })
  return (
    <Containr {...outerProps}>
      <ImageTainr {...imageProps}>
        {/* <Image imgStyle={{ position: `absolute`, top: `0px`, left: `0px` }} /> */}
        <Image />
        {children}
      </ImageTainr>
      <RevealingTainr {...gradientProps} />
    </Containr>
  )
}
