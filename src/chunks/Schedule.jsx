import React, { useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { GridTainr } from "../components/Shared"

import devices from "../devices"

const Header = styled(animated.h1)`
  grid-area: 1 / 1 / auto / auto;
  margin: 0;
  padding: 0;
`

export default ({ initSpringRef }) => {
  //   const initProps = useSpring({
  //     from: {},
  //     to: {},
  //     ref: initSpringRef,
  //   })
  return (
    <GridTainr>
      <Header>schedule a chat.</Header>
    </GridTainr>
  )
}
