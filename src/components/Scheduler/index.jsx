import React, { useContext } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import SchedulingContext from "../../contexts/scheduling.context"

import Scheduled from "./Scheduled"
import SchedulingForm from "./SchedulingForm"

import devices from "../../devices"

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Containr = styled.div`
  max-width: 300px;
  width: 100%;
`

export default () => {
  const { submitted } = useContext(SchedulingContext)

  return (
    <>
      <SwitchTainr>
        <Containr>
          {submitted.phoneNumber || submitted.emailAddress ? (
            <Scheduled />
          ) : (
            <SchedulingForm />
          )}
        </Containr>
      </SwitchTainr>
    </>
  )
}
