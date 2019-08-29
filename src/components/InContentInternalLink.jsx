import React, { useState } from "react"

import { Link as _Link } from "gatsby"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"
import VisibilitySensor from "react-visibility-sensor"

const H3 = styled(animated.h3)`
  color: #ffe9c9;
  text-align: left;
  font-family: gilda display;
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 8px;
`

const P = styled(animated.p)`
  color: white;
  text-align: left;
`

// const Link = styled(_Link)`
//   text-decoration: none;
//   color: #7cad9f;

//   &:visited {
//     color: #506a61;
//   }
// `

const Link = styled(_Link)`
  color: #7cad9f;
  text-align: left;
  text-decoration: none;
  width: 100%;
`

// didnt really kno wut to call this...:/...TODO figure out a better name?
export default ({ heading, statement, link: { label, to } }) => {
  const [visible, setVisible] = useState(false)
  console.log(`%crendered incontent internal link`, "color: #fcba03", {
    to,
    visible,
  })
  const linkChildProps = useSpring({
    from: { transform: `translate3d(-${window.innerWidth / 2}px,0,0)` },
    to: {
      transform: visible
        ? `translate3d(0px,0,0)`
        : `translate3d(-${window.innerWidth / 2}px,0,0)`,
    },
  })

  return (
    <VisibilitySensor
      onChange={visible_ => {
        if (visible_) {
          setVisible(true)
        }
      }}
      partialVisibility={`bottom`}
    >
      <>
        <H3>{heading}</H3>
        {/* <P>{statement}</P> */}
        <Link to={to}>
          <P style={linkChildProps}>
            {`${label} ` + String.fromCharCode(8594)}
          </P>
        </Link>
      </>
    </VisibilitySensor>
  )
}
