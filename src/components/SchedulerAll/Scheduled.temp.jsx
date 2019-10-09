import React, { useContext } from "react"

import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import PropTypes from "prop-types"

import SchedulingContext from "../../contexts/scheduling.context"

import { phoneFormatter } from "../../utils"

const P = styled(animated.p)``

const H2 = styled(animated.h2)`
  font-family: gilda display;
  grid-area: heading;
  color: #506a61;
  font-size: 450%;
  margin: 0;
  padding: 0;
`

const Button = styled(animated.button)``

const StatementTainr = styled(animated.div)``

const Scheduled = () => {
  const {
    submitted: { emailAddress, phoneNumber },
    resetSubmission,
  } = useContext(SchedulingContext)

  let formattedPhoneNumber
  if (phoneNumber) {
    formattedPhoneNumber = phoneFormatter(phoneNumber, ``)
  }

  console.log("rendering scheduled with: ", {
    emailAddress,
    phoneNumber,
    formattedPhoneNumber,
  })

  return (
    <>
      <H2
        style={{
          textDecoration:
            formattedPhoneNumber || emailAddress ? `none` : `line-through`,
        }}
      >
        scheduled
      </H2>
      {formattedPhoneNumber || emailAddress ? (
        <StatementTainr>
          <P>Great!</P>
          <P>I'll try to contact you at</P>
          <P>{formattedPhoneNumber || emailAddress}</P>
          <P>in the next two to three business days.</P>
        </StatementTainr>
      ) : (
        <StatementTainr>
          <P>There was an issue scheduling a chat.</P>
        </StatementTainr>
      )}
      <Button
        onClick={e => {
          e.preventDefault()
          resetSubmission()
        }}
      >
        reschedule
      </Button>
    </>
  )
}

export default Scheduled
