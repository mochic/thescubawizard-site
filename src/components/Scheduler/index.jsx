import React, { useContext } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import SubmissionContext from "./contexts/submission.context"
import { SubmissionProvider } from "./Providers"

import HeaderSVG from "./HeaderSVG"

import Scheduled from "./Scheduled"
import ScheduleForm from "./ScheduleForm"

import devices from "../../devices"

const Containr = styled(animated.div)`
  font-family: inconsolata;
  padding: 40px 30px 20px 30px;
  background: #0a0a0a;
  width: 100%;

  @media ${devices.desktop} {
    padding: 40px 10% 20px 10%;
  }
`

const SwitchTainr = styled(animated.div)`
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

const SubmissionSwitch = () => {
  const { submitted } = useContext(SubmissionContext)
  return submitted.phone || submitted.email ? <Scheduled /> : <ScheduleForm />
}

export default () => {
  return (
    <SubmissionProvider>
      <Containr>
        <HTainr>
          <HeaderSVG />
        </HTainr>
        <SwitchTainr>
          <SubmissionSwitch />
        </SwitchTainr>
      </Containr>
    </SubmissionProvider>
  )
}
