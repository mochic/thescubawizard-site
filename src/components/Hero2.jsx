import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

import ArrowThing from "./ArrowThing"

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "5877450937_630ff55938_o.png" }
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
        style={{ minHeight: `1200px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const HeroImageTainr = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  width: 100%;
`

const RevealingTainr = styled(animated.div)`
  z-index: 1;
  height: 1110px;
  width: 375px;
  background: radial-gradient(
    75.2% 39.24% at 50.13% 39.19%,
    rgba(42, 115, 80, 0.16) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const TitleTainr = styled(animated.h1)`
  z-index: 2;
  width: 80%;
  color: #ffe9c9;
  margin: 0;
  padding: 0;
  padding-left: 12%;
  font-weight: bold;
  font-size: 56px;
  font-family: open sans;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ScheduleTainr = styled(animated.div)`
  color: white;
  font-family: playfair display;
  font-size: 18px;
  width: 100%;
  padding-left: 12%;
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`

// the scaffold our arrow moves along!
const ArrowTainr = styled(animated.div)``

// export default () => {
//   return (
//     <>
//       <TitleTainr>The Scuba Wizard</TitleTainr>
//       <ScheduleTainr>
//         Schedule a chat.{" "}
//         <ArrowTainr>
//           <ArrowThing />
//         </ArrowTainr>
//       </ScheduleTainr>
//       <RevealingTainr />
//       <HeroImageTainr>
//         <HeroImage />
//       </HeroImageTainr>
//     </>
//   )
// }

export default () => {
  return (
    <>
      <RevealingTainr />
      <HeroImageTainr>
        <HeroImage />
      </HeroImageTainr>
    </>
  )
}
