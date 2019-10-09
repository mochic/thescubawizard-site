import React from "react"

const SvgComponent = props => (
  <svg width={66} height={8} fill="none" {...props}>
    <path
      d="M65.354 4.37a.5.5 0 000-.708L62.172.48a.5.5 0 10-.707.707l2.828 2.829-2.828 2.828a.5.5 0 10.707.707l3.182-3.182zM.052 4.515H65v-1H.052v1z"
      fill={props.fill}
    />
  </svg>
)

SvgComponent.defaultProps = {
  fill: "#fff",
}

export default SvgComponent
