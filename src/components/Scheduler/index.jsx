import React, { useContext, useRef } from "react"

import { Link as Link_ } from "gatsby"
import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
  useSprings,
  useTrail,
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

const nPages = 3

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: ${nPages * 100}%;
  grid-area: switch;
  display: flex;
  flex-direction: row;
`

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

// const Statements = ({ style0, style1 }) => {
//   return (
//     <>
//       <Statement style={{ ...style0 }}>
//         <P>{`All we need is a phone number or email address.`}</P>
//       </Statement>
//       <Statement style={{ ...style1 }}>
//         <P>{`Great! We'll try to contact you in the next two business days.`}</P>
//       </Statement>
//     </>
//   )
// }

// Input is not an animated component

// const Submit = ({ outerputProps, arrowTainrProps }) => {
//   const {
//     submitted: { phoneNumber, emailAddress },
//     isSubmitting,
//   } = useContext(SchedulingContext)

//   let text
//   if (phoneNumber || emailAddress) {
//     text = "Scheduled."
//   } else if (isSubmitting) {
//     text = "Scheduling..."
//   } else {
//     text = "Schedule a chat."
//   }

//   return (
//     <SubmitTainr>
//       <SubmitInputTainr {...outerputProps}>
//         <Input
//           form="scheduling-form"
//           type="submit"
//           value={text}
//           style={{
//             marginTop: `25px`,
//             padding: `16px 0 8px 0`,
//             border: `none`,
//             background: `none`,
//             color: `#FFE9C9`,
//             width: `80%`,
//             fontFamily: `roboto`,
//             fontWeight: 300,
//           }}
//         />
//       </SubmitInputTainr>
//       <SubmitArrowTainr {...arrowTainrProps}>
//         <ScheduleArrow />
//       </SubmitArrowTainr>
//     </SubmitTainr>
//   )
// }

const SubmitterTainr = styled(animated.div)`
  grid-area: submit;
  display: flex;
  width: 300%; /* 3 slider states */
`

// const SubmittedTainr = styled(animated.div)`
//   align-self: center;
//   text-align: center;
//   position: absolute;
//   width: 100%;
//   padding: 30px 0 20px 0;
// `

// const UnsubmittedTainr = styled(animated.div)`
//   align-self: center;
//   text-align: center;
//   position: absolute;
//   width: 100%;
// `

const Link = styled(Link_)`
  font-family: open sans;
  font-weight: 300;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 0 0 5px 0;
`

const RescheduleButton = styled(animated.button)`
  color: #979797;
  font-size: 14px;
  font-family open sans;
  margin: 0px;
  font-weight: 300;
  margin: 0 0 8px 0;
  padding: 0;
`

const SubmitInputTainr = styled(animated.div)``

const SubmitArrowTainr = styled(animated.div)``

const Submitted = ({
  homeProps: { style: homeStyle, ...homeRest },
  rescheduleProps: { style: rescheduleStyle, ...rescheduleRest },
  onRescheduleClick,
}) => {
  return (
    <>
      <Link style={{ ...homeStyle, color: `#ffffff` }} {...homeRest}>
        Home.
      </Link>
      <RescheduleButton
        style={{ ...rescheduleStyle, color: `#979797` }}
        {...rescheduleRest}
        onClick={e => {
          e.preventDefault()
          onRescheduleClick()
        }}
      >
        Reschedule.
      </RescheduleButton>
    </>
  )
}

// const Unsubmitted = ({ text, arrowProps, inputProps }) => {
//   return (
//     <>
//       <SubmitInputTainr {...inputProps}>
//         <Input
//           form="scheduling-form"
//           type="submit"
//           value={text}
//           style={{
//             marginTop: `25px`,
//             padding: `16px 0 8px 0`,
//             border: `none`,
//             background: `none`,
//             color: `#FFE9C9`,
//             width: `80%`,
//             fontFamily: `roboto`,
//             fontWeight: 300,
//           }}
//         />
//       </SubmitInputTainr>
//       <SubmitArrowTainr {...arrowProps}>
//         <ScheduleArrow />
//       </SubmitArrowTainr>
//     </>
//   )
// }

const Unsubmitted = ({ text, arrowProps, inputProps }) => {
  return (
    <>
      <SubmitInputTainr {...inputProps}>
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
            fontFamily: `open sans`,
            fontWeight: 300,
          }}
        />
      </SubmitInputTainr>
      <SubmitArrowTainr {...arrowProps}>
        <ScheduleArrow />
      </SubmitArrowTainr>
    </>
  )
}

const SubmitStateTainr = styled(animated.div)`
  width: 100%;
  align-self: center;
  text-align: center;
`

const Submitter = ({ reset }) => {
  console.log("%cSubmit rendered!", "color: purple")
  const {
    submitted: { phoneNumber, emailAddress },
    isSubmitting,
    resetSubmission,
  } = useContext(SchedulingContext)

  // let text
  // if (phoneNumber || emailAddress) {
  //   text = "Scheduled."
  // } else if (isSubmitting) {
  //   text = "Scheduling..."
  // } else {
  //   text = "Schedule a chat."
  // }

  const text = "Schedule a chat."

  // const [scheduledProps, setScheduledProps] = useSpring(() => ({
  //   homeOpacity: 0,
  //   rescheduleOpacity: 0,
  // }))

  // const [scheduledProps, setScheduledProps] = useSpring(() => ({
  //   homeOpacity: 1,
  //   rescheduleOpacity: 1,
  //   config: { ...config.stiff, duration: 1000 },
  //   immediate: true,
  // }))

  // const [homeProps, setHomeProps] = useSpring(() => ({opacity: 0}))
  // const [rescheduleProps, setRescheduleProps]

  //   const scheduleProps = useSpring({
  //     from: {
  //       textOpacity: 1,
  //       arrowOpacity: 1,
  //       textTransform: `translate3d(0px,0,0)`,
  //       arrowTransform: `translate3d(0px,0,0)`,
  //     },
  //     to: {
  //       textOpacity: phoneNumber || emailAddress ? 0 : 1,
  //       arrowOpacity: phoneNumber || emailAddress ? 0 : 1,
  //       textTransform: `translate3d(${
  //         phoneNumber || emailAddress ? -70 : 0
  //       }px,0,0)`,
  //       arrowTransform: `translate3d(${
  //         phoneNumber || emailAddress ? 70 : 0
  //       }px,0,0)`,
  //     },
  //     config: { ...config.stiff, duration: 500 },
  //     // reset: !(phoneNumber || emailAddress),
  //     // delay: !(phoneNumber || emailAddress) ? 0 : 0,
  //     onStart: () => {
  //       const homeOpacity = phoneNumber || emailAddress ? 1 : 0
  //       const rescheduleOpacity = phoneNumber || emailAddress ? 1 : 0

  //       console.log(
  //         "%cSubmitter main spring starting...",
  //         "color: #34abeb",
  //         phoneNumber,
  //         emailAddress,
  //         homeOpacity,
  //         rescheduleOpacity
  //       )
  //       if (phoneNumber || emailAddress || !isSubmitting) {
  //         console.log("%cSetting scheduled opacity...", "color: #34abeb", {
  //           phoneNumber,
  //           emailAddress,
  //           isSubmitting,
  //           homeOpacity,
  //           rescheduleOpacity,
  //         })
  //         setScheduledProps({
  //           homeOpacity,
  //           rescheduleOpacity,
  //           // delay: 100,
  //         })
  //       }
  //     },
  //   })

  //   const mainProps = useSprings(3, [
  //     { key: "spring-0", opacity: phoneNumber || emailAddress ? 0 : 1 },
  //     { key: "spring-1", opacity: isSubmitting ? 1 : 0 },
  //     { key: "spring-2", opacity: phoneNumber || emailAddress ? 1 : 0 },
  //   ])

  let state
  if (isSubmitting) {
    state = 1
  } else if (phoneNumber || emailAddress) {
    state = 2
  } else {
    state = 0
  }

  const [scheduleProps, setScheduleProps] = useSpring(() => ({
    arrowTransform: `translate3d(0px,0,0)`,
    arrowOpacity: 0,
    submitTextTransform: `translate3d(0px,0,0)`,
    submitTextOpacity: 0,
    submittingOpacity: 0,
    homeTextOpacity: 0,
    rescheduleTextOpacity: 0,
    config: { ...config.stiff, duration: 1000 },
  }))

  // triggered via gesture...ie swiping...initial offsets r paged
  const carouselProps = useSpring({
    from: {
      transform: `translate3d(-${((state > 0 ? state - 1 : 2) * 100) /
        3.0}%,0,0)`,
    },
    to: { transform: `translate3d(-${(state * 100) / 3.0}%,0,0)` },
    onStart: () => {
      console.log("%ccarousel spring started...", "color: pink")
      setScheduleProps({
        arrowOpacity: phoneNumber || emailAddress || isSubmitting ? 0 : 1,
        submitTextOpacity: phoneNumber || emailAddress || isSubmitting ? 0 : 1,
        submittingOpacity: isSubmitting ? 1 : 0,
        homeTextOpacity: phoneNumber || emailAddress ? 1 : 0,
        rescheduleTextOpacity: phoneNumber || emailAddress ? 1 : 0,
        // delay: 1000,
      })
    },
    reset: true,
  })

  // const [mainProps, setMainProps, stop] = useSprings(3, ({ index }) => {
  //   // it is ins the 'unscheduled' state, etc.
  //   const isState = state === index
  //   switch (index) {
  //     // unscheduled
  //     case 0:
  //       return {
  //         from: {
  //           arrowOpacity: 0,
  //           arrowTransform: `translate3d(${0}px,0,0)`,
  //         },
  //         to: {
  //           arrowOpacity: isState ? 1 : 0,
  //           arrowTransform: `translate3d(${isState ? 20 : 0}px,0,0)`,
  //         },
  //       }
  //       break
  //     // scheduling
  //     case 1:
  //       return {}
  //       break
  //     // scheduled
  //     case 2:
  //       return {}
  //       break
  //     // no idea
  //     default:
  //       return {}
  //       break
  //   }
  // })

  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log('Scheduler clicked!')
  // }

  return (
    <SubmitterTainr style={carouselProps}>
      <SubmitStateTainr style={{}}>
        <Unsubmitted
          text={text}
          arrowProps={{
            style: {
              opacity: scheduleProps.arrowOpacity,
              transform: scheduleProps.arrowTransform,
            },
          }}
          inputProps={{
            style: {
              opacity: scheduleProps.submitTextOpacity,
              transform: scheduleProps.submitTextTransform,
            },
          }}
        />
      </SubmitStateTainr>
      <SubmitStateTainr
        style={
          {
            // background: `blue`,
          }
        }
      >
        <animated.div
          style={{
            marginTop: `25px`,
            // padding: `16px 0 8px 0`,
            border: `none`,
            background: `none`,
            color: `#FFE9C9`,
            width: `100%`,
            fontFamily: `open sans`,
            fontWeight: 300,
            opacity: scheduleProps.submittingOpacity,
          }}
        >
          Scheduling...
        </animated.div>
      </SubmitStateTainr>
      <SubmitStateTainr
        style={{
          // background: `green`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <Submitted
          homeProps={{ style: { opacity: scheduleProps.homeTextOpacity } }}
          rescheduleProps={{
            style: { opacity: scheduleProps.rescheduleTextOpacity },
          }}
          onRescheduleClick={resetSubmission}
        />
      </SubmitStateTainr>
    </SubmitterTainr>
  )
}

export default () => {
  const {
    submitted: { phoneNumber, emailAddress },
    isSubmitting,
  } = useContext(SchedulingContext)
  // const formTransition = useTransition(submitted.emailAddress || submitted.phoneNumber, i => i, {})

  // const StatementStuffs = [
  //   props => (
  //     <Statement {...props}>
  //       <P>All we need is a phone number or email address.</P>
  //     </Statement>
  //   ),
  //   props => (
  //     <Statement {...props}>
  //       <P>Great! We'll try to contact you in the next two business days.</P>
  //     </Statement>
  //   ),
  // ]

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

  let state
  if (isSubmitting) {
    state = 1
  } else if (phoneNumber || emailAddress) {
    state = 2
  } else {
    state = 0
  }

  // const nPages = 3

  const switchSpringRef = useRef()
  const switchProps = useSpring({
    ref: switchSpringRef,
    from: {
      transform: `translate3d(0%,0,0)`,
    },
    to: {
      transform: `translate3d(${-(state * 100) / nPages}%,0,0)`,
    },
    config: { ...config.slow, duration: 500 },
  })

  const page0SpringRef = useRef()
  const page0Props = useSpring({
    ref: page0SpringRef,
    from: { opacity: 1 },
    to: { opacity: phoneNumber || emailAddress || isSubmitting ? 0 : 1 },
    config: { ...config.slow, duration: 500 },
  })

  const page1SpringRef = useRef()
  const page1Props = useSpring({
    ref: page1SpringRef,
    from: { opacity: 0 },
    to: { opacity: isSubmitting ? 1 : 0 },
    config: { ...config.slow, duration: 500 },
  })

  const page2SpringRef = useRef()
  const page2Props = useSpring({
    ref: page2SpringRef,
    from: { opacity: 0 },
    to: { opacity: phoneNumber || emailAddress || !isSubmitting ? 1 : 0 },
    config: { ...config.slow, duration: 500 },
  })

  // const scheduleSpringRef = useRef()
  // const scheduleProps = useSpring({
  //   ref: scheduleSpringRef,
  //   from: {
  //     textOpacity: 1,
  //     arrowOpacity: 1,
  //     textTransform: `translate3d(0px,0,0)`,
  //     arrowTransform: `translate3d(0px,0,0)`,
  //   },
  //   to: {
  //     textOpacity: phoneNumber || emailAddress ? 0 : 1,
  //     arrowOpacity: phoneNumber || emailAddress ? 0 : 1,
  //     textTransform: `translate3d(${
  //       phoneNumber || emailAddress ? -70 : 0
  //     }px,0,0)`,
  //     arrowTransform: `translate3d(${
  //       phoneNumber || emailAddress ? 70 : 0
  //     }px,0,0)`,
  //   },
  //   config: { ...config.stiff, duration: 500 },
  //   reset: !(phoneNumber || emailAddress),
  //   delay: !(phoneNumber || emailAddress) ? 0 : 0,
  // })

  useChain(
    [switchSpringRef, page0SpringRef, page1SpringRef, page2SpringRef],
    [0, 0.5, 0.7],
    1000
  )

  // useChain([{ current: statementTransitionsRef.current }])
  // useChain([statementTransitionsRef])
  // useChain([statementSpringRef])
  // submit arrow goes right...success text comes from left...home button and stuff fades in...one after the other...
  return (
    <Containr>
      <SwitchTainr style={{ ...switchProps }}>
        <PageTainr className="page-tainr-0" style={{ ...page0Props }}>
          <Statement>
            <P>All we need is a phone number or email address.</P>
          </Statement>
          <FormTainr>
            <SchedulingForm />
          </FormTainr>
        </PageTainr>
        <PageTainr className="page-tainr-1" style={{ ...page1Props }}>
          <Statement>
            <P>Sending a bat signal to hq...</P>
          </Statement>
        </PageTainr>
        <PageTainr className="page-tainr-2" style={{ ...page2Props }}>
          <Statement>
            <P>
              Great! We'll try to contact you in the next two business days.
            </P>
          </Statement>
          {/* <ScheduledTainr>
            <Scheduled />
          </ScheduledTainr> */}
        </PageTainr>
      </SwitchTainr>
      <Submitter />
    </Containr>
  )
}
