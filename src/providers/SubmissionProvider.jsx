import React, { useState } from "react"

import SubmissionContext from "../contexts/submission.context"
import submitToAPI from "../utils"

export default ({ children }) => {
  const submit = async (phone, email) => {
    setSubmission(prevState => ({
      ...prevState,
      isSubmitting: true,
    }))
    console.log("submitting to api", { phone, email })

    let apiResponse = await submitToAPI(phone, email)
    console.log("api response", apiResponse)

    setSubmission(prevState => ({
      ...prevState,
      ...apiResponse,
      isSubmitting: false,
    }))
    console.log("submitted!")
  }

  const resetSubmission = () => {
    setSubmission(submissionState)
  }

  const submissionState = {
    isSubmitting: false,
    submitted: {},
    errors: {},
    submit,
    resetSubmission,
  }
  const [submission, setSubmission] = useState(submissionState)

  return (
    <SubmissionContext.Provider value={submission}>
      {children}
    </SubmissionContext.Provider>
  )
}
