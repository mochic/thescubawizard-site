import { createContext } from "react"

export default createContext({
  heroTitle: true,
  updateVisibility: values => {}, // interface functions mostly here for IDE autocomplete...
})
