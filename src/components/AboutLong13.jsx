import React, { useState } from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import VisibilitySensor from "react-visibility-sensor"

import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import device from "../devices"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "diver-83508_1280-cropped-0.png" }
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
        imgStyle={{ objectPosition: "50% 50%" }}
        style={{ minWidth: `450px`, maxWidth: `1095px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Header = styled(animated.h1)`
  font-family: playfair display;
  font-size: 36px;
  font-weight: 700;
  color: #ffe9c9;
  line-height: 150%;
  backdrop-filter: blur(4px);
`

const P = styled(animated.p)`
  font-family: open sans;
  font-size: 18px;
  font-weight: 600;
  color: white;
  line-height: 200%;
`

const Hr = styled(animated.hr)`
  margin: 5px 0 10px 0;
  border-color: #ffe9c9;
`

const RevealingTainr = styled(animated.div)`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    50.92% 44.8% at 34.31% 51.18%,
    rgba(25, 31, 29, 0.7) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const MainTainr = styled(animated.div)`
  height: 100%;
  min-height: 700px;
  position: relative;
  background: #191f1d;
  z-index: -1;
`

const ContentTainr = styled(animated.div)`
  padding: 0;
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
  }
`

const H1 = styled(animated.h1)`
  position: absolute;
  bottom: 5%;
  left: 1.5%;
  color: #2d2d2d;
  font-family: playfair display;
  writing-mode: vertical-lr;
  transform: scale(-1);
  font-size: 150px;
  font-weight: 700;
  z-index: -1;
`

export default () => {
  const [revealed, setRevealed] = useState(false)

  const { width: hrWidth } = useSpring({
    from: { width: 100 },
    to: { width: revealed ? 100 : 0 },
    config: config.stiff,
  })

  const p0Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed ? 1 : 0 },
    config: config.slow,
  })

  const p1Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed ? 1 : 0 },
    config: config.molasses,
  })

  const imageProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed ? 1 : 0 },
    config: config.molasses,
  })

  return (
    <VisibilitySensor
      partialVisibility
      minTopValue={400}
      onChange={visible => {
        if (visible) {
          setRevealed(true)
          console.log("%cabout visible!", "color: purple")
        }
      }}
    >
      <MainTainr>
        {/* <H1>about</H1> */}
        <ContentTainr>
          <Header>
            Not your everyday
            <br />
            dive service.
          </Header>
          <Hr style={{ width: hrWidth.interpolate(v => `${v}%`) }} />
          <P style={{ ...p0Props }}>
            We’re dedicated to delivering a quality dive service to the Pacific
            Northwest area. With us you wont have to worry about stuff? You
            shouldnt need to take time out of your busy work schedule.
          </P>
          <P
            style={{
              color: `#ffe9c9`,
              fontStyle: `italic`,
              margin: `5px 0 0 0 `,
              ...p1Props,
            }}
          >
            "No dive job is too big or too small."
          </P>
          <br />
          <P
            style={{
              color: `#ffe9c9`,
              fontStyle: `italic`,
              margin: `0`,
              ...p1Props,
            }}
          >
            {String.fromCharCode(8212) + ` The Scuba Wizard`}
          </P>
        </ContentTainr>
        <BackTainr>
          <ImageTainr style={{ ...imageProps }}>
            <Image />
          </ImageTainr>
          <RevealingTainr />
        </BackTainr>
      </MainTainr>
    </VisibilitySensor>
  )
}
