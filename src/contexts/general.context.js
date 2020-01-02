import { createContext } from "react"

export default createContext({
  navBarVisible: false,
  toggleNavBar: show => {}, // interface functions mostly here for IDE autocomplete...
})
