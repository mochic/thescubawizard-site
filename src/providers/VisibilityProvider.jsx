import React, { useState } from "react"

import VisibilityContext from "../contexts/visibility.context"

export default ({ children }) => {
  const updateVisibility = values => {
    setVisibility({ ...visibility, ...values })
  }

  const visibilityState = {
    headerTitle: true,
    updateVisibility,
  }
  const [visibility, setVisibility] = useState(visibilityState)

  return (
    <VisibilityContext.Provider value={visibility}>
      {children}
    </VisibilityContext.Provider>
  )
}
