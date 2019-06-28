import React, { useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring } from "react-spring"

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`

const Title = styled(animated.h1)`
  position: absolute;
  word-break: normal;
  color: #f2f2f2;
  bottom: 18%;
  left: 14%;
  font-size: 56px;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

export default ({ titleProps }) => {
  return (
    <Page>
      <Title style={titleProps}>
        the
        <br />
        scuba
        <br />
        wizard
      </Title>
    </Page>
  )
}
