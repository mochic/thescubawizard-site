import React from "react"

import smoothscroll from "smoothscroll-polyfill"

// dont run this for ssr
if (typeof window !== "undefined") {
  smoothscroll.polyfill()
}

export default ({ element }) => (
  <div style={{ margin: `auto`, overflow: `hidden`, maxWidth: `1900px` }}>
    {element}
  </div>
)
