import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

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

export const H3 = styled(animated.h3)`
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

const ButtonColors = {
  oncolor: {
    background: `#ffe7d0`,
    color: `#0a0a0a`,
  },
  offcolor: {
    background: `#656565`,
    color: `#0a0a0a`,
  },
}

export const Button = styled(animated.button)`
  padding: 6px;
  background: ${props =>
    props.offcolor
      ? ButtonColors.offcolor.background
      : ButtonColors.oncolor.background};
  color: ${props =>
    props.offcolor ? ButtonColors.offcolor.color : ButtonColors.oncolor.color};
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.offcolor
        ? ButtonColors.offcolor.color
        : ButtonColors.oncolor.color};
  margin-top: 16%;
`

export const TextButton = styled(animated.button)`
  border: 0;
  outline: 0;
  background: none;
  color: #656565;
  line-height: 1;
  font-family: montserrat alternates;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-size: 16px;
`

// -placeholder-shown wont work on edge
// but we dont reallllly care that much?
export const Input = styled.input`
  outline: 0;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #656565;
  text-align: center;
  font-family: montserrat alternates;
  font-size: 16px !important; /* less than 16px will trigger terrible safari zoom */
  font-weight: 400;
  color: ${props => (props.error ? "red" : "#c4c4c4")};
  padding: 5px 5px 5px 5px;

  &[type="submit"] {
    padding: 6px;
    background: #ffe7d0;
    color: #0a0a0a;
    border-radius: 5px;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #c4c4c4;
  }

  &::placeholder {
    color: ${props => (props.error ? "red" : "#656565")};
  }
  &::-webkit-input-placeholder {
    color: ${props => (props.error ? "red" : "#656565")};
  }
  &:-ms-input-placeholder {
    color: ${props => (props.error ? "red" : "#656565")};
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

// export const AHr = styled(animated.hr)`
//   width: 100%;
//   border: 0.5px solid #ffe9c9;
//   margin: 0 0 16px 0;
// `

// export const Hr = styled.hr`

// `

export const AH3 = styled(animated.h3)`
  font-family: playfair display;
  font-size: 26px;
  font-weight: bold;
  color: #ffe9c9;
  line-height: 150%;
  text-align: center;
`

export const ADiv = styled(animated.div)``

export const ASection = styled(animated.section)`
  position: relative;
`

// make chunks go in different directions as u scroll?
export const AH2 = styled(animated.h2)`
  font-family: playfair display;
  font-weight: bold;
  font-size: 260px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: overlay;
  width: 100%;
  min-width: 300px;
  word-break: break-word;

  @media ${devices.laptop} {
    font-size: 260px;
  }
`

// we needs teh queries!
export const AHr = styled(animated.hr)`
  width: 40%;
  border: 0.5px solid #ffe9c9;
  margin: 0 0 16px 0;

  @media ${devices.laptop} {
    height: 300px;
    width: 0.5px;
    display: inline-block;
    margin: auto 50px auto 50px;
  }
`

// export const AP = styled(animated.p)`
//   font-family: open sans;
//   font-size: 18px;
//   font-weight: 600;
//   color: white;
//   line-height: 200%;
// `

export const AP = styled(animated.p)`
  font-family: open sans;
  font-size: 16px;
  font-weight: 300;
  color: white;
`

export const ImageTainr = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mix-blend-mode: overlay;
`
