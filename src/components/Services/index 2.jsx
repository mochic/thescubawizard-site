import React, { useRef, useState } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, config } from "react-spring"
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
  padding: 50px 50px 50px 50px;
  font-family: roboto;
`

export default () => {
  const [revealed, setRevealed] = useState(false)

  const service0Props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: revealed ? 1 : 0,
      transform: revealed ? `translate3d(0,0px,0)` : `translate3d(0,20px,0)`,
    },
    config: config.wobbly,
  })

  const service1Props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: revealed ? 1 : 0,
      transform: revealed ? `translate3d(0,0px,0)` : `translate3d(0,20px,0)`,
    },
    config: config.wobbly,
  })

  const service2Props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: revealed ? 1 : 0,
      transform: revealed ? `translate3d(0,0px,0)` : `translate3d(0,20px,0)`,
    },
    config: config.wobbly,
  })

  console.log("%cservices revealed state: ", "color: yellow", revealed)

  return (
    <VisibilitySensor
      onChange={visible => {
        if (visible) {
          setRevealed(visible)
        }
      }}
    >
      <>
        <ServiceTainr style={service0Props}>
          <Service
            name={`Hull Cleaning`}
            description={`A prettier hull means lower long-term fuel costs.`}
          >
            <HullCleaning />
          </Service>
        </ServiceTainr>
        <ServiceTainr style={service1Props}>
          <Service
            name={`Zinc Replacement`}
            description={`Prevent galvanic corrosion damage.`}
          >
            <ZincReplacement />
          </Service>
        </ServiceTainr>
        <ServiceTainr style={service2Props}>
          <Service
            name={`Lost Item Recovery`}
            description={`Dropped your phone it in the Puget Sound?`}
          >
            <LostRecovery />
          </Service>
        </ServiceTainr>
      </>
    </VisibilitySensor>
  )
}
