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

  const submit = async (_phoneNumber, _emailAddress) => {
    // set to empty string if undefined? could be bad...
    const phoneNumber = _phoneNumber || ""
    const emailAddress = _emailAddress || ""

    // all fields empty
    if (isEmptyString(phoneNumber) && isEmptyString(emailAddress)) {
      setScheduling(prevState => ({
        ...prevState,
        status: STATUS.UNSUBMITTED,
        prevStatus: STATUS.UNSUBMITTED,
        errors: ["Please enter a phone number or email address."],
      }))
    }

    const emailError = schedulingState.fields[0].validator(emailAddress)
    const phoneError = schedulingState.fields[1].validator(phoneNumber)
    // const hasValidField = emailError || phoneError ? true : false
    const hasValidField =
      typeof emailError === "undefined" || typeof phoneError === "undefined"

    setScheduling(prevState => ({
      ...prevState,
      status: hasValidField ? STATUS.SUBMITTING : STATUS.UNSUBMITTED,
      prevStatus: hasValidField ? STATUS.SUBMITTING : STATUS.UNSUBMITTED,
      fields: [
        // emailAddress
        {
          ...prevState.fields[0],
          value: emailAddress,
          errors: emailError ? [emailError] : [],
        },
        // phoneNumber
        {
          ...prevState.fields[1],
          value: phoneNumber,
          errors: phoneError ? [phoneError] : [],
        },
      ],
    }))

    // dont continue if no valid fields...
    if (!hasValidField) {
      console.log("%cNo valid fields...", "color: #ff00ff", hasValidField)
      return
    }

    console.log("Submitting...")
    let [submittedToAPI, apiErrored] = await submitToAPI(
      sanitizeEmail(emailAddress),
      sanitizePhone(phoneNumber)
    )

    console.log("%capi response:", "color: #ff00ff", submittedToAPI, apiErrored)

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
  }

  const resetSubmission = () => {
    console.log("resetting submission")
    setScheduling(({ prevStatus }) => ({ ...schedulingState }))
  }

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
              f.id === `email` ? { ...f, value: f.formatter(v, f.value) } : f
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
              f.id === `phone` ? { ...f, value: f.formatter(v, f.value) } : f
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
