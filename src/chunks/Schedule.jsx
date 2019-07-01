import React, { useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

const Grid = styled(animated.div)`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const Header = styled(animated.h1)``

export default ({ animationRef }) => {
  const animationProps = useSpring({
    ref: animationRef,
  })
  return (
    <Grid>
      <Header>schedule a chat.</Header>
    </Grid>
  )
}
