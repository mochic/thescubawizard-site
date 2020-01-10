import React, { useContext, useCallback, useRef, useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { Input } from "../Shared"
import FancyInput from "./FancyInput3"

import ScheduleArrow from "./ScheduleArrow"

import SchedulingContext from "../../contexts/scheduling.context"

import { validateEmail, validatePhone, phoneFormatter } from "../../utils"

const Form = styled(animated.form)`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  align-items: center;
`

export default () => {
  const { submit, isSubmitting, submitted } = useContext(SchedulingContext)

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
      setValues({ emailAddress: ``, phoneNumber: `` }) // reset form
    } catch (err) {
      console.log(`%capi error`, `color: red`, err)
    }
  }

  return (
    <Form id="scheduling-form" onSubmit={handleSubmit} noValidate>
      <FancyInput
        type="tel"
        autoComplete="tel"
        placeholder="Phone number"
        value={values.phoneNumber}
        error={errors.phoneNumber}
        onBlur={handlePhoneBlur}
        onChange={handlePhoneChange}
        disabled={isSubmitting}
        tainrStyle={{ width: `100%`, maxWidth: `480px` }}
      />
      <FancyInput
        type="email"
        autoComplete="email"
        placeholder="Email address"
        value={values.emailAddress}
        error={errors.emailAddress}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        disabled={isSubmitting}
        tainrStyle={{ width: `100%`, maxWidth: `480px` }}
      />
    </Form>
  )
}
