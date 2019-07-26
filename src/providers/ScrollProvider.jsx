import React, { useState } from "react"

import ScrollContext from "../contexts/scroll.context"

export default ({ children }) => {
  const updateScroll = pos => {
    setScroll({ ...scroll, pos })
  }

  const scrollState = {
    pos: 0,
    updateScroll,
  }
  const [scroll, setScroll] = useState(scrollState)

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  )
}
