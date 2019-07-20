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
  font-size: 130%;
  color: #ffe9c9;
  line-height: 1;
  margin-bottom: 30px;
`

export const P = styled(animated.p)`
  line-height: 1;
  font-family: montserrat alternates;
  font-weight: 300;
  color: #c4c4c4;
  margin: 0;
  padding: 0;
`

export const SuccessP = styled(animated.p)`
  color: #00ffab;
  font-size: 70%;
`

export const ErrorP = styled(animated.p)`
  color: #ff3333;
  font-size: 70%;
`

const ButtonColors = {
  onColor: {
    background: `#ffe7d0`,
    color: `#0a0a0a`,
  },
  offColor: {
    background: `#656565`,
    color: `#0a0a0a`,
  },
}

export const Button = styled(animated.button)`
  padding: 6px;
  background: ${props =>
    props.offColor
      ? ButtonColors.offColor.background
      : ButtonColors.onColor.background};
  color: ${props =>
    props.offColor ? ButtonColors.offColor.color : ButtonColors.onColor.color};
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.offColor
        ? ButtonColors.offColor.color
        : ButtonColors.onColor.color};
  margin-top: 16%;
`

// -placeholder-shown wont work on edge
// but we dont reallllly care that much?
export const Input = styled(animated.input)`
  outline: 0;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #656565;
  text-align: center;
  font-family: montserrat alternates;
  font-weight: 400;
  color: #c4c4c4;
  padding: 5px 5px 5px 5px;

  &[type="submit"] {
    padding: 6px;
    background: #ffe7d0;
    color: #0a0a0a;
    border-radius: 5px;
    margin-top: 16%;
  }

  input:not(:placeholder-shown) {
    border-bottom: 1px solid #c4c4c4;
  }

  &::placeholder {
    color: #656565;
  }
  &::-webkit-input-placeholder {
    color: #656565;
  }
  &:-ms-input-placeholder {
    color: #656565;
  }

  &:not([type="submit"]):focus {
    color: #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
  }

  &:focus::placeholder {
    opacity: 0;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
  &:focus:-ms-input-placeholder {
    opacity: 0;
  }
`
