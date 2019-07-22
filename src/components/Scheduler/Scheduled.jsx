import React, { useRef, useContext } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring } from "react-spring"

import { P, H2, TextButton } from "../Shared"

import SubmissionContext from "./contexts/submission.context"

const Containr = styled(animated.div)``

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
      innerHeight: 0,
    },
    to: {
      innerHeight: 100,
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
      <H2 style={headerProps}>Scheduled!</H2>
      <P
        style={{
          visbility: messageProps.innerHeight.interpolate(v =>
            v === 100 ? `visible` : `hidden`
          ),
        }}
        height={messageProps.innerHeight.interpolate(v => `${v}%`)}
      >
        {message}
      </P>
      <P
        style={{
          width: `100%`,
          display: `flex`,
          justifyContent: `flex-end`,
          marginTop: `10%`,
          ...rescheduleProps,
        }}
      >
        or
        <TextButton onClick={handleClick}>reschedule</TextButton>
      </P>
    </Containr>
  )
}
