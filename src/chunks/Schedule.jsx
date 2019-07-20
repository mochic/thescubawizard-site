import React, { useRef, useState } from "react"

import styled from "styled-components"
import {
  animated,
  config,
  useSpring,
  useChain,
  useTransition,
} from "react-spring"

import ScheduleHeaderThin from "../components/ScheduleHeaderThin"

import ScheduleForm from "../components/ScheduleForm"

import devices from "../devices"

const Containr = styled(animated.div)`
  font-family: inconsolata;
  padding: 40px 30px 20px 30px;
  background: #0a0a0a;
  width: 100%;

  @media ${devices.desktop} {
    padding: 40px 10% 20px 10%;
  }
`

const Tainer = styled(animated.div)`
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
`

const HTainr = styled(animated.div)`
  background: none;
  overflow: hidden;
  min-width: 50px;
  text-align: right;
  margin-bottom: 40px;
`

export default () => {
  return (
    <Containr>
      <HTainr>
        <ScheduleHeaderThin />
      </HTainr>
      <Tainer>
        <ScheduleForm />
      </Tainer>
    </Containr>
  )
}
