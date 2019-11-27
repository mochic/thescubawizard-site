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

// const SwitchTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 300px;
//   grid-area: switch;
//   display: flex;
//   align-items: center;
//   background: blue;
// `

// const SwitchTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 100%;
//   width; 100%;
//   grid-area: switch;
//   display: flex;
//   flex-direction: row;
//   background: blue;
// `

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 200%;
  grid-area: switch;
  display: flex;
  flex-direction: row;
`

// const Containr = styled.div`
//   max-width: 300px;
//   width: 100%;
// `

// const FormTainr = styled(animated.div)`
//   position: absolute;
//   width: 100%;
// `

const FormTainr = styled(animated.div)`
  width: 100%;
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

const Statement = styled(animated.div)``

// const PageTainr = styled(animated.div)`
//   height: 100%;
//   width: 100%;
//   width: 400px;
// `

const PageTainr = styled(animated.div)`
  height: 100%;
  width: 100%;
  padding: 16px 16px 0 16px;
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

// Input is not an animated component
const SubmitInputTainr = styled(animated.div)``

const SubmitArrowTainr = styled(animated.div)``

const Submit = ({ outerputProps, arrowTainrProps }) => {
  const {
    submitted: { phoneNumber, emailAddress },
    isSubmitting,
  } = useContext(SchedulingContext)

  let text
  if (phoneNumber || emailAddress) {
    text = "Scheduled."
  } else if (isSubmitting) {
    text = "Scheduling..."
  } else {
    text = "Schedule a chat."
  }

  return (
    <SubmitTainr>
      <SubmitInputTainr {...outerputProps}>
        <Input
          form="scheduling-form"
          type="submit"
          value={text}
          style={{
            marginTop: `25px`,
            padding: `16px 0 8px 0`,
            border: `none`,
            background: `none`,
            color: `#FFE9C9`,
            width: `80%`,
            fontFamily: `roboto`,
            fontWeight: 300,
          }}
        />
      </SubmitInputTainr>
      <SubmitArrowTainr {...arrowTainrProps}>
        <ScheduleArrow />
      </SubmitArrowTainr>
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
  //   from: {
  //     opacity: 0,
  //     transform: `translate3d(${statementIndex === 1 ? 100 : 0}px,0,0)`,
  //   },
  //   enter: { opacity: 1, transform: `translate3d(${0}px,0,0)` },
  //   leave: {
  //     opacity: 0,
  //     transform: `translate3d(${statementIndex === 1 ? -100 : -100}px,0,0)`,
  //   },
  //   config: { ...config.slow, duration: 500 },
  // })

  // let animationOrder
  // if (phoneNumber || emailAddress) {
  // }

  // const statementSpringRef = useRef()
  // const { opacity0, opacity1, transform0, transform1 } = useSpring({
  //   from: {
  //     opacity0: 0,
  //     opacity1: 0,
  //     transform0: `translate3d(0px,0,0)`,
  //     transform1: `translate3d(0px,0,0)`,
  //   },
  //   to: [
  //     { opacity0: 1, transform: `translate3d(0px,0,0)` },
  //     { opacity1: 0, transform: `translate3d(0px,0,0)` },
  //   ],
  //   reset: phoneNumber || emailAddress,
  // })

  // const isScheduled = phoneNumber || emailAddress

  const switchSpringRef = useRef()
  const switchProps = useSpring({
    ref: switchSpringRef,
    from: {
      transform: `translate3d(0%,0,0)`,
    },
    to: {
      transform: `translate3d(${phoneNumber || emailAddress ? -50 : 0}%,0,0)`,
    },
    config: { ...config.slow, duration: 500 },
  })

  const page0SpringRef = useRef()
  const page0Props = useSpring({
    ref: page0SpringRef,
    from: { opacity: 1 },
    to: { opacity: phoneNumber || emailAddress ? 0 : 1 },
    config: { ...config.slow, duration: 500 },
  })

  const page1SpringRef = useRef()
  const page1Props = useSpring({
    ref: page1SpringRef,
    from: { opacity: 0 },
    to: { opacity: phoneNumber || emailAddress ? 1 : 0 },
    config: { ...config.slow, duration: 500 },
  })

  const scheduleSpringRef = useRef()
  const scheduleProps = useSpring({
    ref: scheduleSpringRef,
    from: {
      textOpacity: 1,
      arrowOpacity: 1,
      textTransform: `translate3d(0px,0,0)`,
      arrowTransform: `translate3d(0px,0,0)`,
    },
    to: {
      textOpacity: phoneNumber || emailAddress ? 0 : 1,
      arrowOpacity: phoneNumber || emailAddress ? 0 : 1,
      textTransform: `translate3d(${
        phoneNumber || emailAddress ? -70 : 0
      }px,0,0)`,
      arrowTransform: `translate3d(${
        phoneNumber || emailAddress ? 70 : 0
      }px,0,0)`,
    },
    config: { ...config.stiff, duration: 500 },
    reset: !(phoneNumber || emailAddress),
    delay: !(phoneNumber || emailAddress) ? 0 : 0,
  })

  useChain(
    [scheduleSpringRef, switchSpringRef, page0SpringRef, page1SpringRef],
    [0, 0.2, 0.5, 0.7],
    1000
  )

  // useChain([{ current: statementTransitionsRef.current }])
  // useChain([statementTransitionsRef])
  // useChain([statementSpringRef])
  // submit arrow goes right...success text comes from left...home button and stuff fades in...one after the other...
  return (
    <Containr>
      <SwitchTainr style={{ ...switchProps }}>
        <PageTainr className="page-tainr" style={{ ...page0Props }}>
          <Statement>
            <P>All we need is a phone number or email address.</P>
          </Statement>
          <FormTainr>
            <SchedulingForm />
          </FormTainr>
        </PageTainr>
        <PageTainr style={{ ...page1Props }}>
          <Statement>
            <P>
              Great! We'll try to contact you in the next two business days.
            </P>
          </Statement>
          <ScheduledTainr>
            <Scheduled />
          </ScheduledTainr>
        </PageTainr>
      </SwitchTainr>
      <Submit
        outerputProps={{
          style: {
            opacity: scheduleProps.textOpacity,
            transform: scheduleProps.textTransform,
          },
        }}
        arrowTainrProps={{
          style: {
            opacity: scheduleProps.arrowOpacity,
            transform: scheduleProps.arrowTransform,
          },
        }}
      />
    </Containr>
  )
}
