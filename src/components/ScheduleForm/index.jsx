import React, { useState, useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, useTransition } from "react-spring"

import schedule from "../utils"

import { H2, Input, OnColorP, SuccessP, ErrorP } from "../components/Shared"

import { StateProvider, useStateValue } from "./State"

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
      <OffColorButton onClick={handleClick} style={resubmitProps}>
        resubmit
      </OffColorButton>
    </>
  )
}

const InnerTainr = styled(animated.div)``

const TheForm = ({ submitStatus }) => {
  const [formState, dispatch] = useStateValue()
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

  const phoneErrorTransition = useTransition(formState.phone, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const emailErrorTransition = useTransition(formState.email, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const handleSubmit = async ({ phone, email }) => {
    dispatch({ type: `SUBMITTING` })
    try {
      const result = await schedule({ phone, email })
      dispatch({ type: `API`, value: result })
    } catch (err) {
      console.log("errors", err)
      dispatch({ type: `ERROR`, value: err })
    }
  }

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
        {phoneErrorTransition.map(({ item, key, props }) => {
          return item.message && <ErrorP style={props}>{item.message}</ErrorP>
        })}
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
        {emailErrorTransition.map(({ item, key, props }) => {
          return item.message && <ErrorP style={props}>{item.message}</ErrorP>
        })}
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

const FormSwitch = () => {
  const [formState, dispatch] = useStateValue()
  return formState.phone.isValid || formState.email.isValid ? (
    <SchedulingSuccess />
  ) : (
    <TheForm />
  )
}

export default () => {
  const phoneRef = useRef()
  const emailRef = useRef()

  const { formHeight, formOpacity } = useSpring({
    from: { formHeight: `0%`, formOpacity: 0 },
    to: [{ formHeight: `100%` }, { formOpacity: 1 }],
    delay: 2000, // testing obvs...
  })

  //   const { notesHeight } = useSpring({
  //     from: { height: `0%`, opacity: 0 },
  //     to: { height: `100%`, opacity: 1 },
  //   })

  const SCHEDULING_STATES = {
    UNSUBMITED: `UNSUBMITTED`,
    SUBMITTING: `SUBMITTING`,
    SUBMITTED: `SUBMITTED`,
  }

  const initialState = {
    status: `UNSUBMITTED`,
    phone: {},
    email: {},
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return { ...initialState }
      case "UPDATE": {
        return { ...state, ...action.value }
      }
      case "SUBMITTING": {
        return { ...state, status: `SUBMITTING` }
      }
      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Tainr>
        <InnerTainr
          height={formHeight}
          style={{
            overflow: "hidden",
            opacity: formOpacity,
          }}
        >
          <FormSwitch />
        </InnerTainr>
      </Tainr>
    </StateProvider>
  )
}

// const FTainr = styled(animated.div)``

// const FormInput = () => {
//   const [errors, useState] = useState([])
//   return (
//     <FTainr>
//       <Input />
//       {errorTransitions.map(({ key, item, props }) => {
//         return <ErrorP></ErrorP>
//       })}
//       <ErrorP>wut</ErrorP>
//     </FTainr>
//   )
// }
