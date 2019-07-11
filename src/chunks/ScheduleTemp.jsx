import React, { useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import ScheduleHeader from "../components/ScheduleHeader"

import devices from "../devices"

const HeaderTainer = styled(animated.div)`
  background: red;
  margin-bottom: 20px;
`

const Form = styled(animated.form)`
  background: green;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.mobileS} {
    background: blue;
  }
`

const Tainr = styled.div`
  transform: translate3d(0, -100px, 0);
`

export default ({ initSpringRef }) => {
  //   const initProps = useSpring({
  //     from: {},
  //     to: {},
  //     ref: initSpringRef,
  //   })
  return (
    <>
      <HeaderTainer>
        <ScheduleHeader />
      </HeaderTainer>
      <Form>
        <div>how would you like me to get a hold of you?</div>
        <div>phone or email</div>
        <input type="tel" />
        <input type="submit" />
      </Form>
    </>
  )
}
