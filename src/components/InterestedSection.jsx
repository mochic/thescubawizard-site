import React, { useState, useRef } from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  animated,
  useTransition,
  useChain,
  useSpring,
  config,
} from "react-spring"

import { AH3, AP, ADiv, ASection } from "./Shared"

import VisibilitySensor from "react-visibility-sensor"

import FancyLink from "./FancyLink"

const InterestedH3 = styled(animated.h3)`
  color: #ffe9c9;
  font-family: playfair display;
  font-size: 48px;
  margin: 0;
  padding: 0 0 30px 0;
  font-weight: 700;
  text-align: center;
`

// const P = styled(animated.p)`
//   font-size: 16px;
//   font-family: open sans;
//   color: white;
// `

const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
`

// const Gradient = styled(animated.div)`
//   height: 100%;
//   width: 100%;
//   background: radial-gradient(
//     127.87% 41.37% at 59.13% 52.4%,
//     rgba(80, 133, 95, 0.25) 0%,
//     #191f1d 100%
//   );
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 0;
// `

// const BackTainr = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   overflow: hidden;
//   width: 100%;
// `

// position relative is super important for anchoring our absolute pos stuff!
// z-index for clickable buttons is really important!
// const MainTainr = styled(animated.div)``

const SectionTainr = styled(ASection)`
  height: 600px;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: visible;
  display: grid;
`

const ContentTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 260px;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "deep-diving-deep-diving-gear-diver-54306-2.png" }
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
        style={{ minHeight: `1000px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default ({ linkProps, headerProps, statementProps }) => {
  // need outer container to position lazy loading background image
  // const [revealed, setRevealed] = useState(false)

  // const statementSpringRef = useRef()
  // const statementProps = useSpring({
  //   ref: statementSpringRef,
  //   from: { opacity: 0 },
  //   to: { opacity: revealed ? 1 : 0 },
  // })

  // const linkSpringRef = useRef()
  // const _linkProps = useSpring({
  //   ref: linkSpringRef,
  //   from: {
  //     textOpacity: 0,
  //     arrowOpacity: 0,
  //     arrowTransform: `translate3d(-20px,0,0)`,
  //   },
  //   to: {
  //     textOpacity: revealed ? 1 : 0,
  //     arrowOpacity: revealed ? 1 : 0,
  //     arrowTransform: revealed
  //       ? `translate3d(0px,0,0)`
  //       : `translate3d(-20px,0,0)`,
  //   },
  // })

  // const headerSpringRef = useRef()
  // const headerProps = useSpring({
  //   from: { opacity: 0.5 },
  //   to: { opacity: revealed ? 1 : 0.5 },
  //   ref: headerSpringRef,
  // })

  // const puncSpringRef = useRef()
  // const puncProps = useSpring({
  //   from: { opacity: 0.5, transform: `translate3d(0,3px,0)` },
  //   to: {
  //     opacity: revealed ? 1 : 0,
  //     transform: `translate3d(0,${revealed ? `0px` : `3px`},0)`,
  //   },
  //   ref: puncSpringRef,
  //   config: config.wobbly,
  // })

  // // https://github.com/react-spring/react-spring/issues/574
  // useChain(
  //   [
  //     { current: headerSpringRef.current },
  //     { current: puncSpringRef.current },
  //     { current: statementSpringRef.current },
  //     { current: linkSpringRef.current },
  //   ],
  //   [0, 0.1, 0.6, 0.9],
  //   1000
  // )

  //   useChain([pTransitionRef, linkTransitionRef], [0, 0.5], 1000)
  console.log("%cinterested rendered!", "color: teal")
  return (
    <SectionTainr>
      <ContentTainr>
        <InterestedH3 style={{ ...headerProps }}>Interested?</InterestedH3>
        <div>
          <AP style={{ ...statementProps }}>
            Scheduling a chat takes less than a minute.
          </AP>
        </div>
        <div style={{ zIndex: 1000 }}>
          <FancyLink
            to={"/schedule"}
            textStyle={{
              // opacity: _linkProps.textOpacity,
              fontFamily: `open sans`,
              fontWeight: 300,
              // ...linkProps.textStyle,
            }}
            buttonStyle={
              {
                // opacity: _linkProps.arrowOpacity,
                // transform: _linkProps.arrowTransform,
                // ...linkProps.buttonStyle,
              }
            }
            // containrProps={{ ...linkProps.containrProps }}
          >
            Get started today!
          </FancyLink>
        </div>
      </ContentTainr>
      <ImageTainr>
        <Image />
      </ImageTainr>
    </SectionTainr>
  )
}
