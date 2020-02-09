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
  const STATUS = {
    UNSUBMITTED: "UNSUBMITTED",
    SUBMITTING: "SUBMITTING",
    SUBMITTED: "SUBMITTED",
  }

  const submit = async () => {
    setScheduling(prevState => {
      // all fields empty
      if (prevState.fields.filter(f => !isEmptyString(f.value)).length < 1) {
        return {
          ...prevState,
          status: STATUS.UNSUBMITTED,
          prevStatus: STATUS.UNSUBMITTED,
          errors: ["Please enter a phone number or email address."],
        }
      }

      return {
        ...prevState,
        prevStatus: prevState.status,
        status: STATUS.SUBMITTING,
        fields: prevState.fields.map(f => {
          return {
            ...f,
            errors: [f.validator(f.value)],
          }
        }),
      }
    })

    // setScheduling(prevState => {
    //   return
    // })
    let [submittedToAPI, apiErrored] = await submitToAPI(
      sanitizeEmail(fieldsemailAddress),
      sanitizePhone(phoneNumber)
    )
    console.log("api response:", submittedToAPI, apiErrored)

    if (apiErrored) {
      setScheduling(prevState => ({
        ...prevState,
        status: STATUS.UNSUBMITTED,
        previousStatus: STATUS.SUBMITTING,
        errors: [
          `An expected error occurred when submitting your values to our api.`,
        ],
      }))
    } else {
      setScheduling(prevState => ({
        ...prevState,
        status: STATUS.SUBMITTED,
        previousStatus: STATUS.SUBMITTING,
      }))
    }
    console.log("submitted!")
  }

  const resetSubmission = () => {
    setScheduling(({ prevStatus }) => ({ ...schedulingState, prevStatus }))
    console.log("reset submission")
  }

  // const fieldSetterFactory = id => (() => {})
  // const fieldValidateFactory = id => (() => {})

  const schedulingState = {
    STATUS,
    status: STATUS.UNSUBMITTED,
    previousStatus: null,
    fields: [
      {
        id: "email",
        type: "email",
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
        type: "tel",
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
