import styled from "styled-components"
import { animated } from "react-spring"

export const Containr = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`
