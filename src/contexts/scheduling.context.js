import { createContext } from "react"

export default createContext({
  isSubmitting: false,
  submitted: {},
  errors: {},
  submit: () => {}, // interface functions mostly here for IDE autocomplete...
  resetSubmission: () => {},
})
