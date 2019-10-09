import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { animated } from "react-spring"

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
        style={{ minHeight: `700px`, maxHeight: `700px`, maxWidth: `500px` }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Statement = styled(animated.div)``

const Header = styled(animated.h1)`
  font-family: playfair display;
  font-size: 32px;
  font-weight: bold;
  color: #ffe9c9;
`

const P = styled(animated.p)`
  font-family: open-sans;
  font-size: 18px;
  color: white;
`

const Hr = styled(animated.hr)`
  border-color: #ffe9c9;
  margin: 50px 0 0 0;
`

const RevealingTainr = styled(animated.div)`
  height: 700px;
  width: 500px;
  background: radial-gradient(
    58.27% 43.03% at 36.13% 50%,
    rgba(87, 161, 134, 0.5) 0%,
    #191f1d 100%
  );
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
`

const ImageTainr = styled(animated.div)`
  z-index: -1;
  margin: auto;
`

const BackTainr = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const MainTainr = styled(animated.div)`
  height: 700px;
  position: relative;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
  background: #191f1d;
  z-index: -1;
`

const ContentTainr = styled(animated.div)`
  padding: 0;
  margin: 0;
  width: 250px;
  grid-row-start: 4;
  grid-column-start: 8;
`

export default () => {
  return (
    <>
      <MainTainr>
        <ContentTainr>
          <Header>Not your everyday dive service</Header>
          <Hr />
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
