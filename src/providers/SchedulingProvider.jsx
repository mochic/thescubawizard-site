import React, { useState } from "react"

import SchedulingContext from "../contexts/scheduling.context"
import submitToAPI from "../api"
import { processPhoneNumber } from "../utils"

export default ({ children }) => {
  const submit = async (emailAddress, phoneNumber) => {
    setScheduling(prevState => ({
      ...prevState,
      isSubmitting: true,
    }))
    console.log("submitting to api:", { phoneNumber, emailAddress })

    let [submittedToAPI, apiErrored] = await submitToAPI(
      emailAddress,
      processPhoneNumber(phoneNumber)
    )
    console.log("api response:", submittedToAPI, apiErrored)

    setScheduling(prevState => ({
      ...prevState,
      submitted: { ...submittedToAPI },
      errors: {
        api: `An expected error occurred when submitting your values to our api.`,
      },
      isSubmitting: false,
    }))
    console.log("submitted!")
  }

  const resetSubmission = () => {
    setScheduling(schedulingState)
    console.log("reset submission")
  }

  const schedulingState = {
    isSubmitting: false,
    submitted: {},
    errors: {},
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
