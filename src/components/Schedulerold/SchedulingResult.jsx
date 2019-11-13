import React, { useRef, useContext } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring } from "react-spring"

import { P, H2, TextButton } from "../Shared"

import SchedulingContext from "../../contexts/scheduling.context"

const SuccessH2 = styled(animated.h2)``

const SuccessP = styled(animated.p)``

const ErrorH2 = styled(animated.h2)``

const ErrorP = styled(animated.p)``

export default () => {
  const {
    submitted: { emailAddress, phoneNumber },
    resetSubmission,
  } = useContext(SchedulingContext)

  const handleClick = e => {
    e.preventDefault()
    resetSubmission()
  }

  let message
  if (emailAddress) {
    message = `Great! I'll send you an email at ${emailAddress} in ~ one to two business days.`
    console.log("%cemail success", "color: seagreen", { emailAddress })
  } else if (phoneNumber) {
    message = `Great! I'll try to call you at ${phoneNumber} between 9 am to 5pm PDT the next business day.`
    console.log("%cphone success", "color: seagreen", { phoneNumber })
  } else {
    message = `Somehow we got here without submitting any of your information...
    This is probably a bug and not your fault at all :(.
    Please resubmit if you want try again.`
    console.log("%cscheduling failure", "color: red", {
      phoneNumber,
      emailAddress,
    })
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
    <>
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
    </>
  )
}
