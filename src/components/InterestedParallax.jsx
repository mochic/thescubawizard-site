import React, { useState, useRef } from "react"

import { StaticQuery, graphql, Link as _Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  animated,
  useSpring,
  useTransition,
  useChain,
  config,
} from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import ArrowThing from "./ArrowThing"

import FancyLink from "./FancyLink"

const AnimatedH2 = styled(animated.h2)`
  color: #ffe9c9;
  font-family: playfair display;
  font-size: 48px;
  margin: 0;
  padding: 0 0 10px 0;
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
const MainTainr = styled(animated.div)`
  height: 500px;
  width: 100%;
  position: relative;
  background: #191f1d;
  z-index: -1;
  overflow: visible;
`

const ContentTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 250px;
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

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 10px 0 20px 0;
`

const PTainer = styled(animated.div)``

const LinkTainr = styled(animated.div)``

export default () => {
  // need outer container to position lazy loading background image
  const [revealed, setRevealed] = useState(false)

  const pTransitionRef = useRef()
  const pTransition = useTransition(revealed, null, {
    from: { opacity: 0, transform: `translate3d(0,10px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0, transform: `translate3d(0,0px,0)` },
    config: config.wobbly,
    ref: pTransitionRef,
  })

  const linkTransitionRef = useRef()
  const linkTransition = useTransition(revealed, null, {
    from: {
      textOpacity: 0,
      arrowOpacity: 0,
      arrowTransform: `translate3d(-20px,0,0)`,
    },
    enter: [
      { textOpacity: 1 },
      { arrowTransform: `translate3d(0px,0,0)`, arrowOpacity: 1 },
    ],
    leave: { textOpacity: 0, arrowOpacity: 0 },
    config: config.stiff,
    ref: linkTransitionRef,
  })

  // https://github.com/react-spring/react-spring/issues/574
  useChain(
    [
      { current: pTransitionRef.current },
      { current: linkTransitionRef.current },
    ],
    [0, 0.5],
    1000
  )

  //   useChain([pTransitionRef, linkTransitionRef], [0, 0.5], 1000)

  return (
    <VisibilitySensor
      offset={{ bottom: 40 }}
      onChange={visible => {
        if (visible) setRevealed(true)
      }}
    >
      <MainTainr>
        <ContentTainr>
          <AnimatedH2>Interested?</AnimatedH2>
          <Hr />
          <PTainer>
            {pTransition.map(({ item, key, props }) => {
              return (
                item && (
                  <P key={key} style={props}>
                    Scheduling a chat takes less than a minute.
                  </P>
                )
              )
            })}
          </PTainer>
          <LinkTainr>
            {linkTransition.map(
              ({
                item,
                key,
                props: { textOpacity, arrowOpacity, arrowTransform },
              }) => {
                return (
                  item && (
                    <FancyLink
                      key={key}
                      to={"/contact"}
                      textStyle={{ opacity: textOpacity }}
                      buttonStyle={{
                        opacity: arrowOpacity,
                        transform: arrowTransform,
                      }}
                    >
                      Get started today!
                    </FancyLink>
                  )
                )
              }
            )}
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
