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

// import Scheduled from "./Scheduled"
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

const nPages = 3

// const SwitchTainr = styled(animated.div)`
//   overflow: hidden;
//   position: relative;
//   height: 100%;
//   width: ${nPages * 100}%;
//   grid-area: switch;
//   display: flex;
//   flex-direction: row;
// `

const SwitchTainr = styled(animated.div)`
  overflow: hidden;
  position: relative;
  height: 100%;
  grid-area: switch;
  display: flex;
  flex-direction: row;
`

const FormTainr = styled(animated.div)``

const Statement = styled(animated.div)``

const PageTainr = styled(animated.div)`
  height: 100%;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
`

const Containr = styled(animated.div)`
  display: grid;
  grid-template-areas:
    "statement"
    "switch"
    "submit";
  grid-template-rows: 1fr 2fr 1fr;
`

// const Containr = styled(animated.div)`
//   display: grid;
//   grid-template-areas:
//     "statement"
//     "switch"
//     "submit";
//   grid-template-rows: 1fr 2fr 1fr;
//   height: 100vh;
//   height: -moz-available;
//   height: -webkit-fill-available;
//   height: fill-available;
// `

// const Containr = styled(animated.div)`
//   display: grid;
//   grid-template-areas:
//     "statement"
//     "switch"
//     "submit";
//   grid-template-rows: 1fr 2fr 1fr;
//   height: 100vh;
// `

const SubmitterTainr = styled(animated.div)`
  grid-area: submit;
  display: flex;
  /* not even width 100% is necessary... */
  padding: 0 0 10vh 0;
`

const Link = styled(Link_)`
  font-family: open sans;
  font-weight: 300;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 0 0 5px 0;
  font-size: 16px;
`

const RescheduleButton = styled(animated.button)`
  color: white;
  mix-blend-mode: overlay;
  font-size: 16px;
  font-family open sans;
  margin: 0px;
  font-weight: 300;
  margin: 0 0 8px 0;
  padding: 0;

  background: none;
  border: none;
  -webkit-appearance: none;
  
  &:focus {
    outline: 1px solid #979797;
  }
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
      <Link
        style={{ ...homeStyle, color: `#ffffff`, margin: `auto` }}
        {...homeRest}
      >
        Home.
      </Link>
      <RescheduleButton
        style={{ ...rescheduleStyle, color: `#979797`, margin: `auto` }}
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

// const SubmitStateTainr = styled(animated.div)`
//   align-self: center;
//   text-align: center;
//   width: 33.33%;
//   width: calc(100% / 3);
// `

const SubmitStateTainr = styled(animated.div)`
  align-self: center;
  text-align: center;
  width: 100vw;
`

// const SubmitStateTainr = styled(animated.div)`
//   width: 100%;
//   align-self: center;
//   text-align: center;
// `

const Submitter = ({ reset }) => {
  console.log("%cSubmit rendered!", "color: purple")
  const { status, prevStatus, STATUS, resetSubmission } = useContext(
    SchedulingContext
  )

  const text = "Schedule a chat."

  let state
  switch (status) {
    case STATUS.SUBMITTING:
      state = 1
      break
    case STATUS.SUBMITTED:
      state = 2
      break
    default:
      state = 0
      break
  }

  // so we csn move smoothly to the next state...or not if we're already at the right place?
  let prevState
  switch (prevStatus) {
    case STATUS.SUBMITTING:
      prevState = 1
      break
    case STATUS.SUBMITTED:
      prevState = 2
      break
    case STATUS.UNSUBMITTED:
      prevState = 0
      break
    default:
      prevState = -1 // page initialization state...ie: never tried to submit yet or right after a reset?
      break
  }

  console.log("%cSubmitter rendered!", "color: teal", { status })

  const [scheduleProps, setScheduleProps] = useSpring(() => ({
    arrowTransform: `translate3d(0px,0,0)`,
    arrowOpacity: 0,
    submitTextTransform: `translate3d(0px,0,0)`,
    submitTextOpacity: 0,
    submittingOpacity: 0,
    homeTextOpacity: 0,
    rescheduleTextOpacity: 0,
    config: { ...config.stiff, duration: 1000 },
    delay: 0,
  }))

  // triggered via gesture...ie swiping...initial offsets r paged
  const carouselProps = useSpring({
    from: {
      transform: `translate3d(-${(prevState * 100) / 3.0}%,0,0)`,
    },
    to: { transform: `translate3d(-${(state * 100) / 3.0}%,0,0)` },
    onStart: () => {
      console.log("%ccarousel spring started...", "color: pink")
      setScheduleProps({
        arrowOpacity: status !== STATUS.UNSUBMITTED ? 0 : 1,
        submitTextOpacity: status !== STATUS.UNSUBMITTED ? 0 : 1,
        submittingOpacity: status === STATUS.SUBMITTING ? 1 : 0,
        homeTextOpacity: status === STATUS.SUBMITTED ? 1 : 0,
        rescheduleTextOpacity: status === STATUS.SUBMITTED ? 1 : 0,
        delay: state * 1000,
      })
    },
    reset: true,
  })

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
  const { status, STATUS } = useContext(SchedulingContext)

  let state
  switch (status) {
    case STATUS.SUBMITTING:
      state = 1
      break
    case STATUS.SUBMITTED:
      state = 2
      break
    default:
      state = 0
      break
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
    to: { opacity: status === STATUS.UNSUBMITTED ? 1 : 0 },
    config: { ...config.slow, duration: 500 },
  })

  const page1SpringRef = useRef()
  const page1Props = useSpring({
    ref: page1SpringRef,
    from: { opacity: 0 },
    to: { opacity: status === STATUS.SUBMITTING ? 1 : 0 },
    config: { ...config.slow, duration: 500 },
  })

  const page2SpringRef = useRef()
  const page2Props = useSpring({
    ref: page2SpringRef,
    from: { opacity: 0 },
    to: { opacity: status === STATUS.SUBMITTED ? 1 : 0 },
    delay: 500,
    config: { ...config.molasses, duration: 500 },
  })

  const statements = [
    { key: `statement-0`, value: `Signalling hq...` },
    { key: `statement-1`, value: `Trying a telegram...` },
    { key: `statement-2`, value: "Resorting to arcane sorcery..." },
    {
      key: `statement-3`,
      value: "fuq...\nSomething bad may have happened. Please try again later.",
    }, // todo maybs add sad face watermark...
  ]

  const statementProps = useSprings(
    statements.length,
    statements.map(({ key }, idx) => ({
      opacity: status === STATUS.SUBMITTING ? 1 : 0,
      // transform: `translate3d(0,${status === STATUS.SUBMITTING ? 0 : -10}px,0)`,
      delay: 500 + 3000 * idx,
      config: { ...config.molasses, duration: 1000 },
    }))
  )
  // we want this to animate faster...todo maybs look into async chains?
  const statementDriftProps = useSprings(
    statements.length,
    statements.map(({ key }, idx) => ({
      // opacity: status === STATUS.SUBMITTING ? 1 : 0,
      transform: `translate3d(0,${status === STATUS.SUBMITTING ? 0 : -10}px,0)`,
      delay: 500 + 3000 * idx,
      config: { ...config.molasses, duration: 4000 },
    }))
  )

  useChain(
    [switchSpringRef, page0SpringRef, page1SpringRef, page2SpringRef],
    [0, 0.5, 0.7],
    1000
  )

  // submit arrow goes right...success text comes from left...home button and stuff fades in...one after the other...
  return (
    <Containr>
      <SwitchTainr style={{ ...switchProps }}>
        <PageTainr className="page-tainr-0" style={{ ...page0Props }}>
          <Statement style={{ maxWidth: `480px`, margin: `auto` }}>
            <P>All we need is a phone number or email address.</P>
          </Statement>
          <FormTainr>
            <SchedulingForm />
          </FormTainr>
        </PageTainr>
        <PageTainr className="page-tainr-1" style={{ ...page1Props }}>
          {statements.map(({ key, value }, idx) => {
            return (
              <Statement
                key={key}
                style={{
                  ...statementProps[idx],
                  ...statementDriftProps[idx],
                  maxWidth: `480px`,
                  margin: `auto`,
                }}
              >
                <P>{value}</P>
              </Statement>
            )
          })}
        </PageTainr>
        <PageTainr className="page-tainr-2" style={{ ...page2Props }}>
          <Statement style={{ maxWidth: `480px`, margin: `auto` }}>
            <P>
              Great! We'll try to contact you within the next two business days.
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
