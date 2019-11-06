import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

const AH3 = styled(animated.h3)``

const AP = styled(animated.p)``

const AInput = styled(animated.input)``

export default () => {
  return (
    <>
      <AH3>contact</AH3>
      <AP>wut</AP>
      <AInput type="text" />
    </>
  )
}
