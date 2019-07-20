import React, { useState, useRef } from "react"

import styled from "styled-components"
import { animated, useChain, useSpring, useTransition } from "react-spring"

import schedule from "../utils"

import { H2, Input, P, SuccessP, ErrorP, Button } from "./Shared"

import { StateProvider, useStateValue } from "./State"

import devices from "../devices"

const SCHEDULING_STATES = {
  UNSUBMITED: `UNSUBMITTED`,
  SUBMITTING: `SUBMITTING`,
  SUBMITTED: `SUBMITTED`,
}

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

const SchedulingSuccess = () => {
  const [formState, dispatch] = useStateValue()

  // const phoneProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
  // const emailProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
  // const resubmitProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

  const handleClick = e => {
    e.preventDefault()
    dispatch({ type: `RESET` })
  }

  return (
    <div>
      <P>{formState.submitted.phone}</P>
      <P>{formState.submitted.email}</P>
      <Button offColor onClick={handleClick}>
        resubmit
      </Button>
    </div>
  )
}

const InnerTainr = styled(animated.div)``

// only supports one error at this time...-.-!
// const SchedulingFormInput = ({ value, error, ...props }) => {
//     return <><Input></>
// }

const PhoneInput = ({ ref, errors, ...props }) => {}

const TheForm = () => {
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

  const phoneErrorTransition = useTransition(formState.errors.phone, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const emailErrorTransition = useTransition(formState.errors.email, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const formErrorTransition = useTransition(
    formState.errors.email &&
      formState.errors.phone &&
      `Please enter a valid phone number or email address.`,
    null,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  )

  const handleSubmit = async (phone, email) => {
    dispatch({
      type: `UPDATE`,
      value: { status: SCHEDULING_STATES.SUBMITTING },
    })
    try {
      let result = await schedule(phone, email)
      console.log(`%capi result`, `color: teal`, result)
      dispatch({
        type: `UPDATE`,
        value: {
          ...result,
          status:
            result.submitted.phone || result.submitted.email
              ? SCHEDULING_STATES.SUBMITTED
              : SCHEDULING_STATES.UNSUBMITED,
        },
      })
    } catch (err) {
      console.log(`%capi error`, `color: red`, err)
      dispatch({
        type: `UPDATE`,
        value: { ...err, status: SCHEDULING_STATES.UNSUBMITED },
      })
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
        />
        {emailErrorTransition.map(({ item, props }) => {
          return item && <ErrorP style={props}>{item}</ErrorP>
        })}
      </InputSwitchTainr>
      <P>so we can schedule a chat.</P>
      <Input
        value={
          formState.status === SCHEDULING_STATES.SUBMITTING
            ? `scheduling...`
            : `schedule`
        }
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

const FormSwitch = () => {
  const [{ submitted }] = useStateValue()
  return submitted.phone || submitted.email ? (
    <SchedulingSuccess />
  ) : (
    <TheForm />
  )
}

export default () => {
  const initialState = {
    status: SCHEDULING_STATES.UNSUBMITED,
    errors: {},
    submitted: {},
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        console.log(`%cform state reset`, `color: blue`)
        return { ...initialState }
      case "UPDATE": {
        console.log(`%cform state update`, `color: blue`, {
          ...state,
          ...action.value,
        })
        return { ...state, ...action.value }
      }
      default:
        console.log(`%cunknown action`, `color: blue`, action)
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Tainr>
        <InnerTainr>
          <FormSwitch />
        </InnerTainr>
      </Tainr>
    </StateProvider>
  )
}
