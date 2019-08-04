import React, { useState } from "react"

import SchedulingContext from "../contexts/scheduling.context"
import submitToAPI from "../utils"

export default ({ children }) => {
  const submit = async (phoneNumber, emailAddress) => {
    setScheduling(prevState => ({
      ...prevState,
      isSubmitting: true,
    }))
    console.log("submitting to api:", { phoneNumber, emailAddress })

    let apiResponse = await submitToAPI(phoneNumber, emailAddress)
    console.log("api response:", apiResponse)

    setScheduling(prevState => ({
      ...prevState,
      ...apiResponse,
      isSubmitting: false,
    }))
    console.log("submitted!")
  }

  const resetSubmission = () => {
    setScheduling(schedulingState)
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
