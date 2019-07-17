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

import { H2, OnColorP } from "../components/Shared"
import ScheduleForm from "../components/ScheduleForm"

import { submitToAPI } from "../utils"
import devices from "../devices"

const Containr = styled(animated.div)`
  font-family: inconsolata;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 30px;
  background: #0a0a0a;
  width: 100%;

  @media ${devices.desktop} {
    padding-right: 10%;
  }
`

const SchedulingForm = ({ handleSubmit, ...props }) => {
  return <SFormTainr {...props}></SFormTainr>
}

const Input = styled(animated.input)`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #656565;
  text-align: center;
  font-family: Montserrat Alternates;
  font-weight: 400;
  font-size: 20px;
  color: #656565;
  padding: 5px;
`

const SFormTainr = styled(animated.div)`
  background: none;

  @media ${devices.desktop} {
    max-width: 432px;
  }
`

const InputSwitchTainr = styled(animated.div)`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-around;
  flex-direction: column;
`

const InputButton = styled(animated.input)`
  border: 0;
  outline: 0;
  font-family: montserrat alternates;
  font-weight: 400;
  font-size: 20px;
  padding: 6px;
  background: #ffe7d0;
  color: #0a0a0a;
  border-radius: 5px;
  margin-top: 16%;
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

const SubHTainr = styled(animated.div)`
  max-height: 300px;
  min-width: 50px;
  position: absolute;
`

export default ({ initSpringRef }) => {
  const [isScheduling, setScheduling] = useState(false)
  const [inputState, setInputState] = useState(null)

  const schedulingTransition = useTransition(isScheduling, null, {
    from: {
      opacity: 0,
      transform: `translate3d(0,40px,0)`,
    },
    enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0, transform: `translate3d(0,-20px,0)` },
    config: { ...config.stiff, duration: 1000 },
  })
  //   const initProps = useSpring({
  //     from: {},
  //     to: {},
  //     ref: initSpringRef,
  //   })
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
