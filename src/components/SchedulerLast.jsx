import React, { useRef, useState } from "react"

import { animated, useSpring, useChain, config } from "react-spring"
import styled from "styled-components"

const handleSubmitPlaceholder = e => {
  console.log(e)
  alert(e)
}

const AnimatedH2 = styled(animated.h2)`
  color: #00ffb1;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: inconsolata;
  font-size: 36px;
  line-height: 1;
  text-align: right;
  width: 100%;
`

const Page = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
`

const SchedulerContainer = styled(animated.form)`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(24, 1fr);
  margin: 0;
  padding: 0;
  font-family: roboto;
`

const TextToggle = styled(animated.button)`
  margin: 0;
  padding: 0;
  border: none;
  font-family: roboto;
  font-weight: 300;
  background: transparent;
  font-size: 22px;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  color: #f2f2f2;
`

const TextDivider = styled(animated.div)`
  margin: 0;
  padding: 0;
  border: none;
  font-family: roboto;
  font-weight: 300;
  font-size: 22px;
  color: #f2f2f2;
`

const Input = styled(animated.input)``

const Switch = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`

const InputContainer = styled(animated.div)`
  display: flex;
  grid-row: 8 / 16;
  grid-column: 2 / 24;
  overflow: hidden;
`

const OnColorP = styled(animated.p)`
  font-weight: 300;
  font-family: roboto;
  color: #f2f2f2;
  font-size: 36px;
  line-height: 1;
`

const HidingContainer = styled(animated.div)`
  overflow: hidden;
`

const Scheduler = ({
  questionProps,
  switchProps,
  submitProps,
  phoneToggleProps,
  emailToggleProps,
  textDividerProps,
  phoneInputProps,
  emailInputProps,
  handleSwitch,
  handleSubmit,
  handlePhoneChange,
  handleEmailChange,
  style,
}) => {
  const phoneRef = useRef(null)
  const emailRef = useRef(null)

  const getInputValues = () => {
    return {
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    }
  }

  return (
    <SchedulerContainer
      onSubmit={e => {
        e.preventDefault()
        return handleSubmit(getInputValues())
      }}
      style={style}
    >
      <HidingContainer
        style={{ gridArea: `2 / 1 / 8 / 25`, overflow: `hidden` }}
      >
        <OnColorP style={questionProps}>
          How should I get a hold of you?
        </OnColorP>
      </HidingContainer>
      <Switch style={{ gridArea: `8 / 2 / 13 / 24` }}>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            handleSwitch(`phone`)
          }}
          style={phoneToggleProps}
        >
          phone
        </TextToggle>
        <TextDivider style={textDividerProps}>or</TextDivider>
        <TextToggle
          onClick={e => {
            e.preventDefault()
            handleSwitch(`email`)
          }}
          style={emailToggleProps}
        >
          email
        </TextToggle>
      </Switch>
      <InputContainer
        style={{
          gridArea: `14 / 1 / 18 / 25`,
        }}
      >
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
          onChange={handlePhoneChange}
        />
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
          onChange={handleEmailChange}
        />
      </InputContainer>
      <Input
        value="SUBMIT"
        type="submit"
        style={{
          gridArea: `19 / 16 / 22 / 24`,
          color: `#f2f2f2`,
          border: `1px solid #ffffff`,
          ...submitProps,
        }}
      />
    </SchedulerContainer>
  )
}

// we reveal...maybe render for first to make it as efficient as possible...
export default ({ show }) => {
  const [inputType, setInputType] = useState(null)
  const [inputState, setInputState] = useState({})

  const greetingRef = useRef()
  const { h2Transform, pTransform, h2Opacity, pOpacity } = useSpring({
    from: {
      h2Transform: `translate3d(0,0px,0)`,
      h2Opacity: 0,
      pTransform: `translate3d(0,40px,0)`,
      pOpacity: 0,
    },
    to: {
      h2Transform: `translate3d(0,0px,0)`,
      pTransform: `translate3d(0,0px,0)`,
      h2Opacity: 1,
      pOpacity: 1,
    },
    ref: greetingRef,
  })

  const questionRef = useRef()
  const questionProps = useSpring({
    from: { transform: `translate3d(-80px,0,0)`, opacity: 0 },
    to: {
      transform: `translate3d(0px,0,0)`,
      opacity: 1,
    },
    ref: questionRef,
  })

  const phoneToggleRef = useRef()
  const phoneToggleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,20px,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0,0px,0)`,
    },
    config: { ...config.wobbly, duration: 500 },
    ref: phoneToggleRef,
  })

  const textDividerRef = useRef()
  const textDividerProps = useSpring({
    from: { opacity: 0, transform: `translate3d(-5px,0,0)` },
    to: {
      opacity: 1,
      transform: `translate3d(0px,0,0)`,
    },
    config: { ...config.stiff, duration: 500 },
    ref: textDividerRef,
  })

  const emailToggleRef = useRef()
  const emailToggleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,-20px,0)`,
    },
    to: {
      opacity: 1,
      transform: `translate3d(0,0px,0)`,
    },
    config: { ...config.wobbly, duration: 500 },
    ref: emailToggleRef,
  })

  useChain(
    [greetingRef, questionRef, phoneToggleRef, textDividerRef, emailToggleRef]
    // [0, 0.5, 0.8, 1],
    // 2000
  )

  const phoneInputRef = useRef()
  const phoneInputProps = useSpring({
    from: { height: `0%`, width: `0%`, opacity: 0 },
    to: {
      height: inputType === `phone` ? `100%` : `100%`,
      width: inputType === `phone` ? `100%` : `0%`,
      opacity: inputType === `phone` ? 1 : 0,
    },
    // immediate: inputType !== `phone`,
    ref: phoneInputRef,
  })

  const emailInputRef = useRef()
  const emailInputProps = useSpring({
    from: { height: `0%`, width: `0%`, opacity: 0 },
    to: {
      height: inputType === `email` ? `100%` : `100%`,
      width: inputType === `email` ? `100%` : `0%`,
      opacity: inputType === `email` ? 1 : 0,
    },
    // immediate: inputType !== `email`,
    ref: emailInputRef,
  })

  useChain([phoneInputRef, emailInputRef])

  const submitProps = useSpring({
    to: {
      opacity:
        (inputState.phone && inputType === `phone`) ||
        (inputState.email && inputType === `email`)
          ? 1
          : 0,
      transform:
        (inputState.phone && inputType === `phone`) ||
        (inputState.email && inputType === `email`)
          ? `translate3d(0,0px,0)`
          : `translate3d(0,10px,0)`,
    },
    config: { ...config.wobbly, duration: 1000 },
  })

  const handlePhoneChange = ({ target }) => {
    console.log(target)
    setInputState({
      ...inputState,
      phone: target && target.value,
    })
  }

  const handleEmailChange = ({ target }) => {
    console.log(target)
    setInputState({
      ...inputState,
      email: target && target.value,
    })
  }

  return (
    <Page>
      <AnimatedH2
        style={{
          gridArea: `3 / 3 / 5 / span 20`,
          transform: h2Transform,
          opacity: h2Opacity,
        }}
      >
        schedule a chat.
      </AnimatedH2>
      <OnColorP
        style={{
          gridArea: `7 / 3 / 10 / span 20`,
          transform: pTransform,
          opacity: pOpacity,
        }}
      >
        Let's talk about that next dive job.
      </OnColorP>
      <Scheduler
        questionProps={questionProps}
        phoneToggleProps={phoneToggleProps}
        emailToggleProps={emailToggleProps}
        textDividerProps={textDividerProps}
        phoneInputProps={phoneInputProps}
        emailInputProps={emailInputProps}
        submitProps={submitProps}
        style={{ gridArea: `11 / 3 / 22 / span 20` }}
        handleSubmit={handleSubmitPlaceholder}
        handleSwitch={setInputType}
        handlePhoneChange={handlePhoneChange}
        handleEmailChange={handleEmailChange}
      />
    </Page>
  )
}
