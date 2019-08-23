import React, { useState } from "react"

import styled from "styled-components"
import { animated, useTransition, useSpring } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

import Service from "./Service"
import HullCleaning from "./Icons/HullCleaning"
import LostRecovery from "./Icons/LostRecovery"
import ZincReplacement from "./Icons/ZincReplacement"

// const ServiceTainr = styled(animated.div)`
//   padding: 50px;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
//     "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
//     sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// `

const ServiceTainr = styled(animated.div)`
  padding: 50px 50px 20px 50px;
  font-family: roboto;
`

export default () => {
  const [revealed, setRevealed] = useState({
    0: false,
    1: false,
    2: false,
  })

  const service0Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed[0] ? 1 : 0 },
  })

  const service1Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed[1] ? 1 : 0 },
  })

  const service2Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: revealed[2] ? 1 : 0 },
  })

  console.log("%cservices revealed state: ", "color: yellow", revealed)

  return (
    <>
      <VisibilitySensor
        onChange={v => {
          if (v) {
            setRevealed({ ...revealed, 0: true })
          }
        }}
      >
        <ServiceTainr style={service0Props}>
          <Service
            name={`Hull Cleaning`}
            description={`A prettier hull means lower long-term fuel costs.`}
          >
            <HullCleaning />
          </Service>
        </ServiceTainr>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={v => {
          if (v) {
            setRevealed({ ...revealed, 1: true })
          }
        }}
      >
        <ServiceTainr style={service1Props}>
          <Service
            name={`Zinc Replacement`}
            description={`Prevent galvanic corrosion damage.`}
          >
            <ZincReplacement />
          </Service>
        </ServiceTainr>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={v => {
          if (v) {
            setRevealed({ ...revealed, 2: true })
          }
        }}
      >
        <ServiceTainr style={service2Props}>
          <Service
            name={`Lost Item Recovery`}
            description={`Dropped your phone it in the Puget Sound?`}
          >
            <LostRecovery />
          </Service>
        </ServiceTainr>
      </VisibilitySensor>
    </>
  )
}
