import React, { useContext, useRef } from "react"

import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from "react-spring"

import SchedulingContext from "../../contexts/scheduling.context"

import Scheduled from "./Scheduled"
import SchedulingForm from "./SchedulingForm"

import { Input } from "../Shared"

import ScheduleArrow from "./ScheduleArrow"

import devices from "../../devices"

const P = styled(animated.p)`
  font-family: open sans;
  color: #cecece;
  margin: 0;
  border: 0;
  margin-bottom: 5%;
  font-size: 22px;
  line-height: 110.3%;
  font-weight: 300;
`

// const SwitchTainr = styled(animated.div)`
//   overflow: hidden;
//   display: flex;
//   align-content: center;
//   justify-content: center;
// `

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 300px;
  grid-area: switch;
  display: flex;
  align-items: center;
  background: blue;
`

// const Containr = styled.div`
//   max-width: 300px;
//   width: 100%;
// `

const FormTainr = styled(animated.div)`
  position: absolute;
  width: 100%;
  background: red;
`
// const ScheduledTainr = styled(animated.div)`
//   display: flex;
//   flex-direction: column;
//   margin: 100px 0 0 0;
//   position: absolute;
//   background: green;
//   width: 100%;
// `

const ScheduledTainr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: green;
  width: 100%;
`

const SubmitTainr = styled(animated.div)`
  align-self: center;
  text-align: center;
  grid-area: submit;
`

const StatementTainr = styled(animated.div)`
  position: relative;
  grid-area: statement;
`

const Statement = styled(animated.div)`
  position: absolute;
  display: flex;
`

const Containr = styled(animated.div)`
  display: grid;
  grid-template-areas:
    "statement"
    "switch"
    "submit";
  grid-template-rows: 1fr 2fr 1fr;
`

const Statements = ({ style0, style1 }) => {
  return (
    <>
      <Statement style={{ ...style0 }}>
        <P>{`All we need is a phone number or email address.`}</P>
      </Statement>
      <Statement style={{ ...style1 }}>
        <P>{`Great! We'll try to contact you in the next two business days.`}</P>
      </Statement>
    </>
  )
}

const Submit = ({ style }) => {
  const { submit, isSubmitting } = useContext(SchedulingContext)
  return (
    <SubmitTainr>
      <Input
        form="scheduling-form"
        type="submit"
        value={isSubmitting ? "Scheduling..." : "Schedule a chat"}
        style={{
          marginTop: `25px`,
          padding: `16px 0 8px 0`,
          border: `none`,
          background: `none`,
          color: `#FFE9C9`,
          width: `80%`,
          fontFamily: `roboto`,
          fontWeight: 300,
          ...style,
        }}
      />
      <ScheduleArrow />
    </SubmitTainr>
  )
}

export default () => {
  const {
    submitted: { phoneNumber, emailAddress },
  } = useContext(SchedulingContext)
  // const formTransition = useTransition(submitted.emailAddress || submitted.phoneNumber, i => i, {})

  const StatementStuffs = [
    props => (
      <Statement {...props}>
        <P>All we need is a phone number or email address.</P>
      </Statement>
    ),
    props => (
      <Statement {...props}>
        <P>Great! We'll try to contact you in the next two business days.</P>
      </Statement>
    ),
  ]

  // const statementTransitionsRef = useRef()
  // const statementIndex = phoneNumber || emailAddress ? 1 : 0
  // const statementTransitions = useTransition(statementIndex, p => p, {
  //   ref: statementTransitionsRef,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { ...config.slow, duration: 3000 },
  // })

  // let animationOrder
  // if (phoneNumber || emailAddress) {
  // }

  const statementSpringRef = useRef()
  const { opacity0, opacity1, transform0, transform1 } = useSpring({
    from: {
      opacity0: 0,
      opacity1: 0,
      transform0: `translate3d(0px,0,0)`,
      transform1: `translate3d(0px,0,0)`,
    },
    to: [
      { opacity0: 1, transform: `translate3d(0px,0,0)` },
      { opacity1: 0, transform: `translate3d(0px,0,0)` },
    ],
    reset: phoneNumber || emailAddress,
  })

  // useChain([{ current: statementTransitionsRef.current }])
  // useChain([statementTransitionsRef])
  useChain([statementSpringRef])
  // submit arrow goes right...success text comes from left...home button and stuff fades in...one after the other...
  return (
    <Containr>
      <StatementTainr>
        {/* {statementTransitions.map(({ key, item, props }) => {
          const StatementThang = StatementStuffs[item]
          return <StatementThang key={key} style={props} />
        })} */}
        <Statement style={{ opacity: opacity0, transform: transform0 }}>
          <P>All we need is a phone number or email address.</P>
        </Statement>
        <Statement style={{ opacity: opacity1, transform: transform1 }}>
          <P>Great! We'll try to contact you in the next two business days.</P>
        </Statement>
      </StatementTainr>
      <SwitchTainr>
        <ScheduledTainr>
          <Scheduled />
        </ScheduledTainr>
        <FormTainr>
          <SchedulingForm />
        </FormTainr>
      </SwitchTainr>
      <Submit />
    </Containr>
  )
}
