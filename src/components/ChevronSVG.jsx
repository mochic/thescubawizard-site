import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={8} height={5} viewBox="0 0 8 5" fill="none" {...props}>
      <path
        d="M3.646 4.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L4 3.293 1.172.464a.5.5 0 10-.708.708l3.182 3.182zM3.5 3v1h1V3h-1z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
