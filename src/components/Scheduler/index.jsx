import React, { useContext } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import SubmissionContext from "../../contexts/submission.context"

import HeaderSVG from "./HeaderSVG"

import Scheduled from "./Scheduled"
import ScheduleForm from "./ScheduleForm"

import devices from "../../devices"

const HTainr = styled(animated.div)`
  background: none;
  overflow: hidden;
  min-width: 50px;
  min-height: 50px;
  text-align: right;
  margin-bottom: 25%;
  padding-right: 25px;
`

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
`

const SubmissionSwitch = () => {
  const { submitted } = useContext(SubmissionContext)
  return submitted.phone || submitted.email ? <Scheduled /> : <ScheduleForm />
}

export default () => {
  return (
    <>
      <HTainr>
        <HeaderSVG />
      </HTainr>
      <SwitchTainr>
        <SubmissionSwitch />
      </SwitchTainr>
    </>
  )
}
