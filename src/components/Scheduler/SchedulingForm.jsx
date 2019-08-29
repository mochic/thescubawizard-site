import React, { useContext, useCallback, useRef, useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { Input } from "../Shared"
import FancyInput from "./FancyInput"

import ScheduleArrow from "./ScheduleArrow"

import SchedulingContext from "../../contexts/scheduling.context"

import { validateEmail, validatePhone, phoneFormatter } from "../../utils"

const Form = styled(animated.form)`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const P = styled(animated.p)`
  font-family: gilda display;
  color: white;
  margin: 0;
  border: 0;
  margin-bottom: 8%;
`

export default () => {
  const { submit, isSubmitting } = useContext(SchedulingContext)

  const [values, setValues] = useState({
    emailAddress: ``,
    phoneNumber: ``,
  })

  const [errors, setErrors] = useState({
    emailAddress: ``,
    phoneNumber: ``,
  })

  const handleEmailBlur = e => {
    setErrors({ ...errors, emailAddress: validateEmail(values.emailAddress) })
    console.log("%cEmail blur handled.", "color: orange", { values, errors })
  }

  const handleEmailChange = e => {
    setValues({
      ...values,
      emailAddress: e.target.value,
    })
    console.log("%cEmail change handled.", "color: orange", { values })
  }

  const handlePhoneBlur = e => {
    setErrors({ ...errors, phoneNumber: validatePhone(values.phoneNumber) })
    console.log("%cPhone blur handled.", "color: orange", { values, errors })
  }

  const handlePhoneChange = e => {
    setValues({
      ...values,
      phoneNumber: phoneFormatter(e.target.value, values.phoneNumber),
    })
    console.log("%cPhone change handled.", "color: orange", { values })
  }

  const handleSubmit = async e => {
    console.log("%csubmitting...", "color: green")
    e.preventDefault()
    // dont submit again if we're already submitting
    if (isSubmitting) {
      console.log("%calready submitting...", "color: red")
      return
    }

    try {
      await submit(values.emailAddress, values.phoneNumber)
      console.log(`%capi success`, `color: teal`)
    } catch (err) {
      console.log(`%capi error`, `color: red`, err)
    }
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FancyInput
        type="tel"
        autoComplete="tel"
        placeholder="Phone number"
        value={values.phoneNumber}
        error={errors.phoneNumber}
        onBlur={handlePhoneBlur}
        onChange={handlePhoneChange}
        disabled={isSubmitting}
        tainrStyle={{ width: `80%` }}
      />
      {/* <P
        style={{
          fontFamily: `roboto`,
          fontWeight: 300,
          marginTop: `7%`,
          marginBottom: `5%`,
        }}
      >
        or
      </P> */}
      <P
        style={{
          fontFamily: `roboto`,
          fontWeight: 300,
          margin: 0,
        }}
      >
        or
      </P>
      <FancyInput
        type="email"
        autoComplete="email"
        placeholder="Email address"
        value={values.emailAddress}
        error={errors.emailAddress}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        disabled={isSubmitting}
        tainrStyle={{ width: `80%` }}
      />
      <Input
        type="submit"
        value={isSubmitting ? "Scheduling..." : "Schedule a chat"}
        style={{
          marginTop: `25px`,
          padding: `16px 0 8px 0`,
          border: `none`,
          background: `none`,
          color: `#FFE9C9`,
          width: `80%`,
          fontFamily: `roboto`,
          fontWeight: 300,
        }}
      />
      <ScheduleArrow />
    </Form>
  )
}
