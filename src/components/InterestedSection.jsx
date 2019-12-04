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
import VisibilitySensor from "react-visibility-sensor"

import FancyLink from "./FancyLink"

const AnimatedH2 = styled(animated.h2)`
  color: #ffe9c9;
  font-family: playfair display;
  font-size: 48px;
  margin: 0;
  padding: 0 0 30px 0;
  font-weight: 700;
  text-align: center;
`

const P = styled(animated.p)`
  font-size: 16px;
  font-family: open sans;
  color: white;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const Gradient = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    127.87% 41.37% at 59.13% 52.4%,
    rgba(80, 133, 95, 0.25) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
`

// position relative is super important for anchoring our absolute pos stuff!
// z-index for clickable buttons is really important!
const MainTainr = styled(animated.div)`
  height: 600px;
  width: 100%;
  position: relative;
  background: #191f1d;
  z-index: 0;
  overflow: visible;
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
          relativePath: { eq: "deep-diving-deep-diving-gear-diver-54306.jpg" }
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

const PTainer = styled(animated.div)``

const LinkTainr = styled(animated.div)`
  z-index: 1000;
`

export default () => {
  // need outer container to position lazy loading background image
  const [revealed, setRevealed] = useState(false)

  const statementSpringRef = useRef()
  const statementProps = useSpring({
    ref: statementSpringRef,
    from: { opacity: 0 },
    to: { opacity: revealed ? 1 : 0 },
  })

  const linkSpringRef = useRef()
  const linkProps = useSpring({
    ref: linkSpringRef,
    from: {
      textOpacity: 0,
      arrowOpacity: 0,
      arrowTransform: `translate3d(-20px,0,0)`,
    },
    to: {
      textOpacity: revealed ? 1 : 0,
      arrowOpacity: revealed ? 1 : 0,
      arrowTransform: revealed
        ? `translate3d(0px,0,0)`
        : `translate3d(-20px,0,0)`,
    },
  })

  const headerSpringRef = useRef()
  const headerProps = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: revealed ? 1 : 0.5 },
    ref: headerSpringRef,
  })

  const puncSpringRef = useRef()
  const puncProps = useSpring({
    from: { opacity: 0.5, transform: `translate3d(0,3px,0)` },
    to: {
      opacity: revealed ? 1 : 0,
      transform: `translate3d(0,${revealed ? `0px` : `3px`},0)`,
    },
    ref: puncSpringRef,
    config: config.wobbly,
  })

  // https://github.com/react-spring/react-spring/issues/574
  useChain(
    [
      { current: headerSpringRef.current },
      { current: puncSpringRef.current },
      { current: statementSpringRef.current },
      { current: linkSpringRef.current },
    ],
    [0, 0.1, 0.6, 0.9],
    1000
  )

  //   useChain([pTransitionRef, linkTransitionRef], [0, 0.5], 1000)
  console.log("%cinterested rendered!", "color: teal")
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 500 }}
      onChange={v => {
        console.log("%cinterested visibility changed!", "color: green", v)
        if (v) {
          setRevealed(true)
        } else {
          setRevealed(false)
        }
        // setPuncProps({ opacity: 1 })
      }}
    >
      <MainTainr>
        <ContentTainr>
          <AnimatedH2 style={headerProps}>
            Interested
            <P
              style={{
                fontFamily: `playfair display`,
                fontSize: `48px`,
                display: `inline-block`,
                fontWeight: 700,
                color: `#ffe9c9`,
                margin: `0 0 0 2px`,
                padding: 0,
                ...puncProps,
              }}
            >
              ?
            </P>
          </AnimatedH2>
          <PTainer>
            <P style={statementProps}>
              Scheduling a chat takes less than a minute.
            </P>
          </PTainer>
          <LinkTainr>
            <FancyLink
              to={"/schedule"}
              textStyle={{ opacity: linkProps.textOpacity }}
              buttonStyle={{
                opacity: linkProps.arrowOpacity,
                transform: linkProps.arrowTransform,
              }}
            >
              Get started today!
            </FancyLink>
          </LinkTainr>
        </ContentTainr>
        <BackTainr>
          <ImageTainr>
            <Image />
          </ImageTainr>
          <Gradient />
        </BackTainr>
      </MainTainr>
    </VisibilitySensor>
  )
}
