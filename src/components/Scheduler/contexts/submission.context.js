import { createContext } from "react"

export default createContext({
  isSubmitting: false,
  submitted: {},
  errors: {},
  submit: () => {},
  resetSubmission: () => {},
})
