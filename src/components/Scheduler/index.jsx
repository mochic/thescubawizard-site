import React, { useContext } from "react"

import styled from "styled-components"
import { animated, useTransition } from "react-spring"

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

const FormTainr = styled(animated.div)`
  background: red;
`
const ScheduledTainr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 0;
`
export default () => {
  const { submitted } = useContext(SchedulingContext)
  // const formTransition = useTransition(submitted.emailAddress || submitted.phoneNumber, i => i, {})
  return (
    <>
      <SwitchTainr>
        <Containr>
          {submitted.phoneNumber || submitted.emailAddress ? (
            <ScheduledTainr>
              <Scheduled />
            </ScheduledTainr>
          ) : (
            <SchedulingForm />
          )}
        </Containr>
      </SwitchTainr>
    </>
  )
}
