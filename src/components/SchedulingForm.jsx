import React, { useContext, useRef } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { Input } from "./Shared"

const Form = styled(animated.div)`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const P = styled(animated.p)`
  font-family: gilda display;
  color: white;
  margin: 0;
  border: 0;
  margin-bottom: 5%;
`

const InputLabel = styled(animated.label)`
  color: #656565;
  font-family: roboto;
  font-weight: 300;
  margin-bottom: 12px;
`

const InputTainr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
`

export default () => {
  return (
    <Form>
      <InputTainr>
        <InputLabel
          style={{ alignSelf: `left`, marginBottom: `5px` }}
        >{`Phone number`}</InputLabel>
        <Input type="tel" placeholder="Phone number" />
      </InputTainr>
      <P style={{ marginTop: `7%`, marginBottom: `5%` }}>or</P>
      <InputTainr>
        <InputLabel
          style={{ alignSelf: `left`, marginBottom: `5px` }}
        >{`Email address`}</InputLabel>
        <Input type="email" placeholder="Email address" />
      </InputTainr>
      <Input
        type="submit"
        value="Schedule a chat"
        style={{
          marginTop: `65px`,
          padding: `20px`,
          border: `1px solid #27A77D`,
          background: `#97ffbe17`,
          color: `white`,
        }}
      />
    </Form>
  )
}
