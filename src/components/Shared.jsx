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
    color: #151515;
  }
`

export const H2 = styled(animated.h2)`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  font-weight: 100;
  font-size: 30px;
  color: #ffe9c9;
  line-height: 1;
  margin-bottom: 30px;
`

export const OnColorP = styled(animated.p)`
  line-height: 1;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 20px;
  color: #c4c4c4;
  margin: 0;
  padding: 0;
`

export const Input = styled(animated.input)`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #656565;
  text-align: center;
  font-family: montserrat alternates;
  font-weight: 400;
  font-size: 20px;
  color: #656565;
  padding: 5px;
`
