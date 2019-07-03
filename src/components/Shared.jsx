import styled from "styled-components"
import { animated } from "react-spring"

export const Containr = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`

export const GridTainr = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`

export const Link = styled(animated.a)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #2f2f2f;
  }
`
