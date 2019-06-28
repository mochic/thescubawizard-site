import React, { useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const TitleContainr = styled(animated.div)`
  display: inline-block;
  grid-area: 12 / 12 / auto / auto;
`

const TitleChunkP = styled(animated.p)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  font-size: 84px;
  overflow: hidden;
  line-height: 1.5;
  font-family: "roboto mono";
  font-weight: 300;
  padding-bottom: 20px;
`

const TitleChunkH1 = styled(animated.h1)`
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  font-size: 84px;
  overflow: hidden;
  line-height: 1.5;
  font-family: "roboto mono";
  font-weight: 300;
  padding-bottom: 20px;
`
const HidingContainr = styled(animated.div)`
  overflow: hidden;
`

export default ({
  c0Transform,
  c0Opacity,
  c1Transform,
  c1Opacity,
  c2Transform,
  c2Opacity,
  filter,
}) => {
  return (
    <Page>
      <TitleContainr style={{ filter }}>
        <HidingContainr>
          <TitleChunkP style={{ transform: c0Transform, opacity: c0Opacity }}>
            the
          </TitleChunkP>
        </HidingContainr>
        <HidingContainr>
          <TitleChunkH1 style={{ transform: c1Transform, opacity: c1Opacity }}>
            scuba
          </TitleChunkH1>
        </HidingContainr>
        <HidingContainr>
          <TitleChunkP style={{ transform: c2Transform, opacity: c2Opacity }}>
            wizard
          </TitleChunkP>
        </HidingContainr>
      </TitleContainr>
    </Page>
  )
}
