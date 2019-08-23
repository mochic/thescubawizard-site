import { createContext } from "react"

export default createContext({
  pos: 0,
  updateScroll: pos => {}, // interface functions mostly here for IDE autocomplete...
})
