import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

// const FooterTainr = styled(animated.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 0 20px 0;
//   padding: 0;

//   @media ${devices.laptop} {
//     flex-direction: row;
//   }
// `

const FooterTainr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 0;
`

const AP = styled(animated.p)`
  color: #ffffff;
  font-family: open sans;
  font-size: 10px;
  margin: 0;
  padding: 0;
  mix-blend-mode: overlay;
`

const AHr = styled(animated.hr)`
  border: 0.5 solid #ffffff;
  width: 50px;
  mix-blend-mode: overlay;
`

export default ({ hrProps, p0Props, p1Props, ...props }) => {
  return (
    <FooterTainr {...props}>
      <AP {...p0Props}>the scuba wizard</AP>
      <AHr {...hrProps} />
      <AP {...p1Props}>a seattle dive operation</AP>
    </FooterTainr>
  )
}
