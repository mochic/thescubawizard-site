import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "diver-83508_1280.jpg" }) {
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
        imgStyle={{ objectPosition: "20% 20%" }}
        style={{ minHeight: `700px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Statement = styled(animated.div)``

const Header = styled(animated.h1)`
  font-family: open-sans;
  font-size: 32px;
  font-weight: bold;
  color: white;
`

const P = styled(animated.p)`
  font-family: open-sans;
  font-size: 18px;
  color: white;
`

const Divider = styled(animated.div)`
  height: 1px;
  width: 100%;
  border: none;
  border-bottom: 1px solid white;
`

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 50px 0 0 0;
`

const RevealingTainr = styled(animated.div)`
  height: 900px;
  width: 100%;
  background: radial-gradient(
    68.37% 36.15% at 50% 50%,
    rgba(87, 161, 134, 0.5) 0%,
    #191f1d 100%
  );
  opacity: 0.9;
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
  height: 900px;
  position: relative;
`

const ContentTainr = styled(animated.div)`
  margin-left: 12%;
  margin-right: 12%;
`

export default () => {
  return (
    <>
      <MainTainr>
        <ContentTainr>
          <Header>Not your everyday dive service</Header>
          <Divider />
          <P>
            We’re dedicated to delivering a quality dive service to the Pacific
            Northwest area. With us you wont have to worry about stuff? You
            shouldnt need to take time out of your busy work schedule.
          </P>
        </ContentTainr>
        <BackTainr>
          <ImageTainr>
            <Image />
          </ImageTainr>
          <RevealingTainr />
        </BackTainr>
      </MainTainr>
    </>
  )
}
