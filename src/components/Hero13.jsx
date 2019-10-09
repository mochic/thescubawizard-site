import React, { useLayoutEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import VisibilitySensor from "react-visibility-sensor"

import FancyLink from "./FancyLink"

import devices from "../devices"

const Image = () => (
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
        imgStyle={{ objectPosition: "0% 0%" }}
        style={{
          minHeight: `100vh`,
        }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const RevealingTainr = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(25, 31, 29, 0.9) 84.54%,
    #191f1d 94.4%
  );
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
  width: 100%;
`

const MainTainr = styled(animated.div)`
  height: 100vh;
  position: relative;
`

const ContentTainr = styled(animated.div)`
  padding: 250px 0 0 0;
  margin: 0 auto;
  width: 250px;

  @media ${devices.laptop} {
    padding: 350px 0 0 0;
  }
`

const TitleTainr = styled(animated.div)`
  display: flex;
  justify-content: space-around;
`

// TODO: create more SEO friendly h1 version
const TitleChunk0 = styled(animated.span)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 26px;
  font-weight: normal;
  line-height: 100%;
  color: #ffffff;
  font-weight: 300;
`

const TitleChunk1 = styled(animated.span)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 26px;
  font-weight: 800;
  line-height: 100%;
  color: #ffe9c9;
`

const TitleChunk2 = styled(animated.span)`
  text-transform: uppercase;
  font-family: open sans;
  font-size: 26px;
  font-weight: 300;
  line-height: 100%;
  color: #ffffff;
`

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 50px 0 50px 0;
`

const Hint = styled(animated.div)`
  width: 100%;
  position: fixed;
  text-align: center;
  bottom: 7%;
  color: #979797;
  font-family: playfair display;
  font-size: 16px;
`

export default () => {
  const [visibility, setVisibility] = useState({
    hint: false,
    page: false,
  })

  const hintProps = useSpring({
    from: { opacity: 0, transform: `translate3d(0,40px,0)` },
    to: {
      opacity: visibility.hint ? 1 : 0,
      transform: visibility.hint
        ? `translate3d(0,0px,0)`
        : `translate3d(0,40px,0)`,
    },
    config: config.molasses,
  })

  const showHint = () => {
    console.log("%chero visibility: ", "color: green", visibility)
    if (visibility.page && !visibility.hint) {
      console.log("%cshowing hint!", "color: red")
      setVisibility({ ...visibility, hint: true })
    }
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (visibility.hint) {
        setVisibility({
          ...visibility,
          hint: false,
        })
      }
    }

    if (visibility.page && !visibility.hint) {
      console.log("%cscheduling hint show", "color: blue")
      setTimeout(showHint, 1500)
    }

    // window.addEventListener("scroll", handleScroll)

    // return () => window.removeEventListener("scroll", handleScroll)
  })
  console.log("%chero rendered", "color: teal", visibility)
  return (
    <>
      <VisibilitySensor
        partialVisibility="top"
        onChange={visible => {
          if (visible !== visibility.page) {
            console.log("%chero visibility changed: ", "color: orange", visible)
            setVisibility({
              hint: false,
              page: visible,
            })
          }

          console.log("%chero visibility", "color: pink", visibility)
        }}
      >
        <MainTainr>
          <ContentTainr>
            <TitleTainr>
              <TitleChunk0>the</TitleChunk0>
              <TitleChunk1>scuba</TitleChunk1>
              <TitleChunk2>wizard</TitleChunk2>
            </TitleTainr>
            <Hr />
            <FancyLink
              to={"/contact"}
              textStyle={{ color: "#c3c3c3" }}
              arrowProps={{ fill: "#c3c3c3" }}
            >
              Schedule a chat.
            </FancyLink>
          </ContentTainr>
          <BackTainr>
            <ImageTainr>
              <Image />
            </ImageTainr>
            <RevealingTainr />
          </BackTainr>
        </MainTainr>
      </VisibilitySensor>
      <Hint style={hintProps}>Scroll for more.</Hint>
    </>
  )
}
