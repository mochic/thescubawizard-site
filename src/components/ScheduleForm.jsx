import React, { useState, useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, useTransition } from "react-spring"

import schedule from "../utils"

import { H2, Input, OnColorP } from "../components/Shared"

import devices from "../utils"

const Form = styled(animated.form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const InputSwitchTainr = styled(animated.div)`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-around;
  flex-direction: column;
`

const Tainr = styled(animated.div)`
  overflow: hidden;
  max-width: 432px;

  @media ${devices.small} {
    min-height: 500px;
  }
`

const OffColorButton = styled(animated.button)``

const SchedulingSuccess = ({ result, handleClick }) => {
  const phoneProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
  const emailProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
  const resubmitProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <>
      <OnColorP style={phoneProps}>{result.phone}</OnColorP>
      <OnColorP style={emailProps}>{result.email}</OnColorP>
      <OffColorButton style={resubmitProps}>resubmit</OffColorButton>
    </>
  )
}

const InnerTainr = styled(animated.div)``

const TheForm = ({ submitStatus, handleSubmit }) => {
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

  const phoneRef = useRef()
  const emailRef = useRef()

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit({
          phone: phoneRef.current.value,
          email: emailRef.current.value,
        })
      }}
    >
      <H2>Interested in hiring me for that next dive job?</H2>
      <OnColorP>Let me know your</OnColorP>
      <InputSwitchTainr>
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
        />
        <OnColorP
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            marginTop: `16px`,
            marginBottom: `16px`,
          }}
        >
          or
        </OnColorP>
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
        />
      </InputSwitchTainr>
      <OnColorP>so we can schedule a chat.</OnColorP>
      <Input
        value={submitStatus === "pending" ? `scheduling...` : `schedule`}
        type="submit"
        style={{
          ...submitProps,
        }}
      />
    </Form>
  )
}

export default () => {
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitted, setSubmitted] = useState({})
  const [errors, setErrors] = useState({})

  const phoneRef = useRef()
  const emailRef = useRef()

  const { formHeight, formOpacity } = useSpring({
    from: { formHeight: `0%`, formOpacity: 0 },
    to: [{ formHeight: `100%` }, { formOpacity: 1 }],
    delay: 2000, // testing obvs...
  })

  const handleSubmit = async ({ phone, email }) => {
    setSubmitStatus("pending")
    try {
      const result = await schedule({ phone, email })
      setSubmitted(result)
      console.log("submitted", result)
    } catch (err) {
      console.log("errors", err)
      setSubmitStatus(null)
      setErrors(err)
    }
    setSubmitStatus("submitted")
  }

  return (
    <Tainr>
      <InnerTainr
        style={{
          overflow: "hidden",
          height: formHeight,
          opacity: formOpacity,
        }}
      >
        <TheForm submitStatus={submitStatus} handleSubmit={handleSubmit} />
      </InnerTainr>
    </Tainr>
  )
}

const ErrorP = styled(animated.p)`
  color: red;
`

const FormInput = ({ ...props }) => {
  return (
    <>
      <Input />
      <ErrorP>wut</ErrorP>
    </>
  )
}
