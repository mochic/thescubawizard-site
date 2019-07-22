import React, { useContext, useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, useTransition } from "react-spring"

import { H2, Input, P, ErrorP } from "../Shared"

import SubmissionContext from "./contexts/submission.context"

const Form = styled(animated.form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const InputsTainr = styled(animated.div)`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-around;
  flex-direction: column;
`

export default () => {
  const { errors, submit, isSubmitting } = useContext(SubmissionContext)

  console.log(errors, submit, isSubmitting)

  const phoneRef = useRef()
  const emailRef = useRef()

  const phoneInputProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const emailInputProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const submitProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const phoneErrorTransition = useTransition(errors.phone, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const emailErrorTransition = useTransition(errors.email, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const formErrorTransition = useTransition(
    errors.email &&
      errors.phone &&
      `Please enter a valid phone number or email address.`,
    null,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  )

  const handleSubmit = async (phone, email) => {
    try {
      let result = await submit(phone, email)
      console.log(`%capi result`, `color: teal`, result)
    } catch (err) {
      console.log(`%capi error`, `color: red`, err)
    }
  }

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(phoneRef.current.value, emailRef.current.value)
      }}
    >
      <H2>Interested in hiring me for that next dive job?</H2>
      <P>Let me know your</P>
      <InputsTainr>
        <Input
          key="phone-input"
          type="tel"
          name="phone"
          placeholder={phoneInputProps.opacity.interpolate(v =>
            v > 0.5 ? `phone number` : ``
          )}
          autoComplete="tel"
          style={phoneInputProps}
          ref={phoneRef}
          disabled={isSubmitting}
        />
        {phoneErrorTransition.map(({ item, props }) => {
          return item && <ErrorP style={props}>{item}</ErrorP>
        })}
        <P
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            marginTop: `16px`,
            marginBottom: `16px`,
          }}
        >
          or
        </P>
        <Input
          key="email-input"
          type="email"
          name="email"
          placeholder={emailInputProps.opacity.interpolate(v =>
            v > 0.5 ? `email address` : ``
          )}
          autoComplete="email"
          style={emailInputProps}
          ref={emailRef}
          disabled={isSubmitting}
        />
        {emailErrorTransition.map(({ item, props }) => {
          return item && <ErrorP style={props}>{item}</ErrorP>
        })}
      </InputsTainr>
      <P>so we can schedule a chat.</P>
      <Input
        value={isSubmitting ? `scheduling...` : `schedule`}
        type="submit"
        style={{
          ...submitProps,
        }}
      />
      {formErrorTransition.map(({ item, props }) => {
        return item && <ErrorP style={props}>{item}</ErrorP>
      })}
    </Form>
  )
}
