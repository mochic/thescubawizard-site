import React, { useRef, useState } from "react"

import styled from "styled-components"
import {
  animated,
  config,
  useSpring,
  useChain,
  useTransition,
} from "react-spring"

// import ScheduleHeader from "../components/ScheduleHeader"
import ScheduleHeader from "../components/ScheduleSVG"

import ContactHeader from "../components/ContactHeader"

import devices from "../devices"

const HeaderTainer = styled(animated.div)`
  margin-right: 20px;
`

const Form = styled(animated.form)`
  background: green;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.mobileS} {
    background: none;
  }
`

const Containr = styled(animated.div)`
  font-family: inconsolata;
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 80px;
  margin-bottom: 80px;
`

const Text = styled(animated.div)`
  color: #ffe7d0;
  font-size: 32px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
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
  margin-left: 20px;
  margin-right: 20px;
`

const PContainr = styled(animated.div)`
  display: flex;
  flex-direction: column;
`

const Proposal = ({ handleClick, ...props }) => {
  return (
    <PContainr {...props}>
      <Text>Interested in hiring me for your next dive job?</Text>
      <Button onClick={handleClick}>schedule a chat.</Button>
    </PContainr>
  )
}

const Input = styled(animated.input)``

const Statement = styled(animated.p)`
  line-height: 1;
`

const ScheduleForm = props => {
  const [inputType, setInputType] = useState(null)

  return (
    <Form {...props}>
      <Statement>
        I'll try to contact you in 12-24 hours via{" "}
        <Input type="tel" placeholder="phone" /> or{" "}
        <Input type="email" placeholder="email" />.
      </Statement>
      <Input type="submit" value="schedule" style={{ marginTop: `50px` }} />
    </Form>
  )
}

const Tainer = styled(animated.div)`
  overflow: hidden;
`

export default ({ initSpringRef }) => {
  const [isScheduling, setScheduling] = useState(false)
  const [inputState, setInputState] = useState(null)

  const schedulingTransition = useTransition(isScheduling, null, {
    from: {
      position: `absolute`,
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
    <Containr>
      <HeaderTainer>
        <ContactHeader />
      </HeaderTainer>
      <Tainer>
        {schedulingTransition.map(({ item, key, props }) => {
          if (item) {
            return <ScheduleForm style={props} />
          } else {
            return (
              <Proposal
                handleClick={e => {
                  e.preventDefault()
                  setScheduling(true)
                }}
                style={props}
              />
            )
          }
        })}
      </Tainer>
    </Containr>
  )
}
