import React, { useState } from "react"

import GeneralContext from "../contexts/general.context"

export default ({ children, initialState }) => {
  const toggleNavBar = show => {
    console.log("%cToggling navbar", "color: green", show)
    setGeneralState(prevState => ({ ...prevState, navBarVisible: show }))
  }

  const generalState = {
    navBarVisible: false,
    toggleNavBar,
    ...initialState, // override with intialState
  }

  const [general, setGeneralState] = useState(generalState)

  return (
    <GeneralContext.Provider value={general}>
      {children}
    </GeneralContext.Provider>
  )
}
