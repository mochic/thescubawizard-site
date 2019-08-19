import React, { useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import Service from "./Service"
import HullCleaning from "./Icons/HullCleaning"
import LostRecovery from "./Icons/LostRecovery"
import ZincReplacement from "./Icons/ZincReplacement"

const ServiceTainr = styled(animated.div)`
  padding: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

export default () => {
  // const [revealed, setRevealed] = useState([])

  //     const

  return (
    <>
      <ServiceTainr>
        <Service
          name={`Hull Cleaning`}
          description={`A prettier hull means lower long-term fuel costs.`}
        >
          <HullCleaning />
        </Service>
      </ServiceTainr>
      <ServiceTainr>
        <Service
          name={`Zinc Replacement`}
          description={
            `Prevent galvanic corrosion damage ` +
            String.fromCharCode(9760) +
            `.`
          }
        >
          <ZincReplacement />
        </Service>
      </ServiceTainr>
      <ServiceTainr>
        <Service
          name={`Lost Item Recovery`}
          description={`Just got an IPhone XS only to drop it in the Puget Sound?`}
        >
          <LostRecovery />
        </Service>
      </ServiceTainr>
    </>
  )
}
