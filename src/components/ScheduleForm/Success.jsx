import React, { useState } from "react"

import { OnColorP, SuccessP, ErrorP, Button } from "../Shared"

import { useSchedulingFormState } from "../../contexts/SchedulingFormStateContext"

const Tainr = styled(animated.div)``

const SuccessStatement = ({ name, message }) => {
  return (
    <>
      <OnColorP>
        Successfully submitted <SuccessP>{`${name}`}</SuccessP>.
      </OnColorP>
      <OnColorP>{message}</OnColorP>
    </>
  )
}

const ErrorMessage = ({ name, message }) => {
  return (
    <>
      <OnColorP>
        There were issues submitting <ErrorP>{`${name}`}</ErrorP>.
      </OnColorP>
      <OnColorP>{message}</OnColorP>
    </>
  )
}

export default () => {
  const [formState, dispatch] = useSchedulingFormState()

  const handleClick = e => {
    e.preventDefault()
    dispatch({
      type: `RESET`,
    })
  }

  return (
    <Tainr>
      {formState.phone.validation.isValid ? (
        <SuccessStatement name="phone" message={"Success"} />
      ) : (
        <ErrorMessage name="phone" message="Error" />
      )}
      {formState.email.validation.isValid ? (
        <SuccessStatement name="email" message={"Success"} />
      ) : (
        <ErrorMessage name="email" message="Error" />
      )}
      <Button onClick={handleClick} />
    </Tainr>
  )
}
