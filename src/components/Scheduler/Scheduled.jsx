import React, { useRef, useContext } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring } from "react-spring"

import { P, H2, TextButton } from "../Shared"

import SubmissionContext from "../../contexts/submission.context"

const Containr = styled(animated.div)`
  padding-top: 35%;
`

export default () => {
  const { submitted, resetSubmission } = useContext(SubmissionContext)

  const handleClick = e => {
    e.preventDefault()
    resetSubmission()
  }

  let message
  if (submitted.email) {
    message = `Great! I'll send you an email at ${submitted.email.value} in ~ one to two business days.`
  } else if (submitted.phone) {
    message = `Great! I'll try to call you at: ${submitted.phone.value} between 9 am to 5pm PDT the next business day.`
  } else {
    message = `Somehow we got here without submitting your information.
    This is probably a bug and not your fault at all :(.
    Please resubmit if you want try again.`
  }

  const headerSpringRef = useRef()
  const headerProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: headerSpringRef,
  })

  const messageSpringRef = useRef()
  const messageProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    ref: messageSpringRef,
  })

  const rescheduleSpringRef = useRef()
  const rescheduleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: rescheduleSpringRef,
  })

  useChain([headerSpringRef, messageSpringRef, rescheduleSpringRef])

  return (
    <Containr>
      <H2 style={headerProps}>Success</H2>
      <P style={messageProps}>{message}</P>
      <P
        style={{
          width: `100%`,
          display: `flex`,
          justifyContent: `flex-end`,
          marginTop: `22%`,
          ...rescheduleProps,
        }}
      >
        or
        <TextButton
          style={{
            marginLeft: `8px`,
            marginRight: `10px`,
            borderBotton: `1px solid #656565`,
          }}
          onClick={handleClick}
        >
          reschedule
        </TextButton>
      </P>
    </Containr>
  )
}
