import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

// const Containr = styled(animated.div)`
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

const Containr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 0;
`

const AP = styled(animated.p)`
  color: #313e3a;
  font-family: open sans;
  font-size: 10px;
  margin: 0;
  padding: 0;
`

// const AHr = styled(animated.hr)`
//   width: 50px;
//   border: 0.5px solid #313e3a;
//   margin: 10px auto 8px auto;

//   // @media ${devices.laptop} {
//   //   height: 300px;
//   //   width: 0.25px;
//   //   display: inline-block;
//   //   margin: auto 50px auto 50px;
//   // }
// `

const AHr = styled(animated.hr)`
  width: 50px;
  border: 0.5px solid #313e3a;
  margin: 10px auto 8px auto;
`

export default ({ containrStyle }) => {
  return (
    <Containr style={{ ...containrStyle }}>
      <AP>the scuba wizard</AP>
      <AHr />
      <AP>a seattle dive operation</AP>
    </Containr>
  )
}
