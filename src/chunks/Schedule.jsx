import React, { useRef, useState } from "react"

import styled from "styled-components"
import {
  animated,
  config,
  useSpring,
  useChain,
  useTransition,
} from "react-spring"

import ScheduleHeaderThin from "../components/ScheduleHeaderThin"

import { H2, OnColorP } from "../components/Shared"
import { submitToSchedulingAPI } from "../utils"
import devices from "../devices"

const Form = styled(animated.form)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.mobileS} {
    background: none;
  }
`

const Containr = styled(animated.div)`
  font-family: inconsolata;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 30px;
  background: #0a0a0a;
`

const Text = styled(animated.div)`
  color: #ffe7d0;
  font-size: 32px;
  font-family: roboto;
  margin-bottom: 40px;
  font-weight: 300;
  line-height: 1;
`

const Button = styled(animated.button)`
  background: #ffe7d0;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  padding: 20px;
  max-width: 240px;
`

const PContainr = styled(animated.div)`
  display: flex;
`

const Tainr = styled(animated.div)``

const SchedulingForm = ({ handleSubmit, ...props }) => {
  return <SFormTainr {...props}></SFormTainr>
}

const Input = styled(animated.input)`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #656565;
  text-align: center;
  font-family: Montserrat Alternates;
  font-weight: 400;
  font-size: 20px;
  color: #656565;
  padding: 5px;
`

const Statement = styled(animated.p)`
  line-height: 1;
  font-family: montserrat alternates;
  font-weight: 300;
  font-size: 20px;
  color: #c4c4c4;
  margin: 0;
  padding: 0;
`

const SFormTainr = styled(animated.div)`
  background: none;
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

const InputButton = styled(animated.input)`
  margin-top: 16%;
  margin-left: 45%;
  border: 0;
  outline: 0;
  font-family: montserrat alternates;
  font-weight: 400;
  font-size: 20px;
  padding: 6px;
  background: #ffe7d0;
  color: #0a0a0a;
`

const ScheduleForm = props => {
  const [inputValues, setInputValues] = useState({})
  const [inputErrors, setInputErrors] = useState({})
  const [inputType, setInputType] = useState(null)

  const inputTransitions = useState(inputType, null, {
    from: {},
    enter: {},
  })

  return (
    <SFormTainr>
      <Form
        {...props}
        onSubmit={e => {
          e.preventDefault()
          const response = submitToSchedulingAPI(inputValues)
          console.log(response)
        }}
      >
        <H2>Interested in hiring me for that next dive job?</H2>
        <Statement>Let me know your</Statement>
        <InputSwitchTainr>
          <Input
            type="tel"
            placeholder="phone number"
            onChange={e => {
              e.preventDefault()
              setInputValues({ ...inputValues, phone: e.target.value })
            }}
          />
          <Statement
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              marginTop: `16px`,
              marginBottom: `16px`,
            }}
          >
            or
          </Statement>
          <Input
            type="email"
            placeholder="email address"
            onChange={e => {
              e.preventDefault()
              setInputValues({ ...inputValues, email: e.target.value })
            }}
          />
        </InputSwitchTainr>
        <Statement>so we can schedule a chat.</Statement>
        {/* <Input type="submit" value="schedule" style={{ marginTop: `50px` }} /> */}
        <InputButton type="submit" value="schedule" />
      </Form>
    </SFormTainr>
  )
}

const Tainer = styled(animated.div)`
  overflow: hidden;
`

const HTainr = styled(animated.div)`
  background: none;
  overflow: hidden;
  min-width: 50px;
  text-align: right;
  margin-bottom: 40px;
`

const SubHTainr = styled(animated.div)`
  max-height: 300px;
  min-width: 50px;
  position: absolute;
`

const OuterTainr = styled(animated.div)`
  background: black;
  padding-top: 80px;
  padding-bottom: 40px;
`

export default ({ initSpringRef }) => {
  const [isScheduling, setScheduling] = useState(false)
  const [inputState, setInputState] = useState(null)

  const schedulingTransition = useTransition(isScheduling, null, {
    from: {
      opacity: 0,
      transform: `translate3d(0,40px,0)`,
    },
    enter: { opacity: 1, transform: `translate3d(0,0px,0)` },
    leave: { opacity: 0, transform: `translate3d(0,-20px,0)` },
    config: { ...config.stiff, duration: 1000 },
  })
  //   const initProps = useSpring({
  //     from: {},
  //     to: {},
  //     ref: initSpringRef,
  //   })
  return (
    <OuterTainr>
      <Containr>
        <HTainr>
          <ScheduleHeaderThin />
        </HTainr>
        <Tainer>
          <ScheduleForm />
        </Tainer>
      </Containr>
    </OuterTainr>
  )
}
