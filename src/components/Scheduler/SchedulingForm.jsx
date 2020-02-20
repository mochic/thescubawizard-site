import React, {
  useContext,
  // useCallback,
  // useRef,
  // useState,
  // useLayoutEffect,
  // useEffect,
} from "react"

import styled from "styled-components"
import { animated } from "react-spring"

// import { Input } from "../Shared"
import FancyInput from "./FancyInput"

// import ScheduleArrow from "./ScheduleArrow"

import SchedulingContext from "../../contexts/scheduling.context"

// import {
//   validateEmail,
//   validatePhone,
//   phoneFormatter,
//   emailFormatter,
// } from "../../utils"

const Form = styled(animated.form)`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  align-items: center;
`

export default () => {
  const {
    submit,
    fields: [emailAddress, phoneNumber],
    status,
    STATUS,
  } = useContext(SchedulingContext)

  // const phoneInputRef = useRef()
  // const emailInputRef = useRef()

  // const [values, setValues] = useState({
  //   emailAddress: ``,
  //   phoneNumber: ``,
  // })

  // const [errors, setErrors] = useState({
  //   emailAddress: ``,
  //   phoneNumber: ``,
  // })

  const handleEmailBlur = e => {
    console.log("%cEmail blur", "color: orange")
    emailAddress.validate()
  }

  const handleEmailChange = e => {
    console.log("%cEmail change", "color: orange")
    emailAddress.setValue(e.target.value)
  }

  const handlePhoneBlur = e => {
    console.log("%cPhone blur handled.", "color: orange")
    phoneNumber.validate()
  }

  const handlePhoneChange = e => {
    console.log("%cPhone change handled.", "color: orange")
    phoneNumber.setValue(e.target.value)
  }

  const handleSubmit = async e => {
    console.log("%csubmitting...", "color: green")
    e.preventDefault()
    // dont submit again if we're already submitting
    if (status === STATUS.SUBMITTING) {
      console.log("%calready submitting...", "color: red")
      return
    }

    try {
      // this is actually fine...
      await submit(phoneNumber.value, emailAddress.value)
      console.log(`%capi success`, `color: teal`)
    } catch (err) {
      console.log(`%capi error`, `color: red`, err)
    }
  }

  return (
    <Form id="scheduling-form" onSubmit={handleSubmit} noValidate>
      <FancyInput
        // ref={phoneInputRef}
        type="tel"
        autoComplete="tel"
        placeholder="Phone number"
        value={phoneNumber.value}
        error={phoneNumber.errors[0]}
        onBlur={handlePhoneBlur}
        onChange={handlePhoneChange}
        disabled={status === STATUS.SUBMITTING}
        tainrStyle={{ width: `100%`, maxWidth: `480px` }}
      />
      <FancyInput
        // ref={emailInputRef}
        type="email"
        autoComplete="email"
        placeholder="Email address"
        value={emailAddress.value}
        error={emailAddress.errors[0]}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        disabled={status === STATUS.SUBMITTING}
        tainrStyle={{ width: `100%`, maxWidth: `480px` }}
      />
    </Form>
  )
}
