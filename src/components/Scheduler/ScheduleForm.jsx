import React, { useContext, useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, useTransition } from "react-spring"

import { H2, Input, P } from "../Shared"

import SubmissionContext from "../../contexts/submission.context"

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

const ErrorP = styled(animated.p)`
  color: #e20000;
  font-size: 14px;
`

const ErrorSpan = styled(animated.span)``

const Tainr = styled(animated.div)``

const ValidatingFormInput = ({ formatter, validator, ...props }) => {
  return <Tainr></Tainr>
}

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
          placeholder={`Phone number`}
          autoComplete="tel"
          style={{
            ...phoneInputProps,
            borderBottom: errors.phone ? `1px solid #e20000` : null,
          }}
          ref={phoneRef}
          disabled={isSubmitting}
        />
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
          placeholder={`Email address`}
          autoComplete="email"
          style={{
            ...emailInputProps,
            borderBottom: errors.email ? `1px solid #e20000` : null,
          }}
          ref={emailRef}
          disabled={isSubmitting}
        />
      </InputsTainr>
      <P>so we can schedule a chat.</P>
      <ErrorP
        style={{
          visibility: errors.email || errors.phone ? `visible` : `hidden`,
        }}
      >
        Please enter a valid phone number or email address.
      </ErrorP>
      <Input
        value={isSubmitting ? `scheduling...` : `schedule`}
        type="submit"
        style={{
          ...submitProps,
        }}
      />
    </Form>
  )
}
