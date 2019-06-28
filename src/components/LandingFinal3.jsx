import React, { useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

const Page = styled(animated.div)`
  height: 20vh;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const TitleContainr = styled(animated.div)`
  display: inline-block;
  grid-area: 12 / 12 / auto / auto;
`

const Containr = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`

const Title = styled(animated.h1)`
  color: #f2f2f2;
  margin: 0;
  padding: 0;
  font-size: 24px;
  grid-area: 2 / 2 / auto / auto;
  position: sticky;
  top: 0px;
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
    <Page style={{ opacity: c0Opacity, filter }}>
      {/* <Title>
        the
        <br />
        scuba
        <br />
        wizard
      </Title> */}
    </Page>
  )
}
