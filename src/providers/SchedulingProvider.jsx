import React, { useState } from "react"

import SchedulingContext from "../contexts/scheduling.context"
import submitToAPI from "../api"
// import { processPhoneNumber } from "../utils"

import {
  isEmptyString,
  emailFormatter,
  phoneFormatter,
  validateEmail,
  validatePhone,
  sanitizeEmail,
  sanitizePhone,
} from "../utils"

export default ({ children }) => {
  const STATES = {
    UNSUBMITTED: "UNSUBMITTED",
    SUBMITTING: "SUBMITTING",
    SUBMITTED: "SUBMITTED",
  }

  const submit = async () => {
    setScheduling(prevState => {
      return {
        ...prevState,
        prevStatus: prevState.status,
        status: STATES.SUBMITTING,
      }
    })

    validateField("phone")
    validateField("email")

    // const filteredFields = scheduling.fields.filter(
    //   ({ errors }) => errors.length === 0
    // )

    let [submittedToAPI, apiErrored] = await submitToAPI(
      emailAddress,
      processPhoneNumber(phoneNumber)
    )
    console.log("api response:", submittedToAPI, apiErrored)

    // setScheduling(prevState => ({
    //   ...prevState,
    //   submitted: { ...submittedToAPI },
    //   errors: {
    //     api: `An expected error occurred when submitting your values to our api.`,
    //   },
    //   isSubmitting: false,
    // }))

    setScheduling(prevState => ({
      ...prevState,
      submitted: { ...submittedToAPI },
      // status: 1,
      // prevStatus: 0,
      errors: {
        api: `An expected error occurred when submitting your values to our api.`,
      },
      isSubmitting: false,
    }))
    console.log("submitted!")
  }

  const resetSubmission = () => {
    setScheduling(({ prevStatus }) => ({ ...schedulingState, prevStatus }))
    console.log("reset submission")
  }

  // const fieldSetterFactory = id => (() => {})
  // const fieldValidateFactory = id => (() => {})

  const schedulingState = {
    status: STATES.UNSUBMITTED,
    previousStatus: null,
    fields: [
      {
        id: "email",
        value: "",
        errors: [],
        formatter: emailFormatter,
        validator: validateEmail,
        setValue: v => {
          setScheduling(prevState => ({
            ...prevState,
            fields: prevState.fields.map(f =>
              f.id === `email` ? { ...f, value: v.formatter(v, f.value) } : f
            ),
          }))
        },
        validate: () => {
          setScheduling(prevState => ({
            ...prevState,
            fields: prevState.fields.map(f =>
              f.id === `email` ? { ...f, errors: [f.validator(f.value)] } : f
            ),
          }))
        },
      },
      {
        id: "phone",
        value: "",
        errors: [],
        formatter: phoneFormatter,
        validator: validatePhone,
        setValue: v => {
          setScheduling(prevState => ({
            ...prevState,
            fields: prevState.fields.map(f =>
              f.id === `phone` ? { ...f, value: v.formatter(v, f.value) } : f
            ),
          }))
        },
        validate: () => {
          setScheduling(prevState => ({
            ...prevState,
            fields: prevState.fields.map(f =>
              f.id === `phone` ? { ...f, errors: [f.validator(f.value)] } : f
            ),
          }))
        },
      },
    ],
    errors: [], // top level errors like api not available, auth errors, etc...
    submit,
    resetSubmission,
  }
  const [scheduling, setScheduling] = useState(schedulingState)

  return (
    <SchedulingContext.Provider value={scheduling}>
      {children}
    </SchedulingContext.Provider>
  )
}
