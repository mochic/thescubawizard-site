import React, { useState, useCallback } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { Input } from "../Shared"

const Containr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  min-height: 85px;
`

const filledColor = `#ffe9c9`

const unfilledColor = `#656565`

const errorColor = `#d20000`

const ErrorLabel = styled(animated.label)`
  color: ${errorColor};
  font-family: roboto;
  font-weight: 300;
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 13px;
  align-self: left;
`

const PlaceholderLabel = styled(animated.label)`
  color: #656565;
  font-family: roboto;
  font-weight: 300;
  margin-bottom: 5px;
  align-self: left;
`

export default ({ value, error, onChange, tainrStyle, ...props }) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback(
    e => {
      setFocused(true)
      console.log("%cinput focused", "color: blue")
      props.onFocus && props.onFocus()
    },
    [focused]
  )

  const handleBlur = useCallback(
    e => {
      setFocused(false)
      console.log("%cinput blurred", "color: blue")
      props.onBlur && props.onBlur()
    },
    [focused]
  )

  let placeholderLabelColor
  if (error) {
    placeholderLabelColor = errorColor
  } else if (focused || value) {
    placeholderLabelColor = filledColor
  } else {
    placeholderLabelColor = unfilledColor
  }

  return (
    <Containr style={tainrStyle}>
      {props.placeholder && (
        <PlaceholderLabel style={{ color: placeholderLabelColor }}>
          {props.placeholder}
        </PlaceholderLabel>
      )}
      <Input
        {...props}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        style={{
          ...props.style,
          color: placeholderLabelColor,
          borderColor: placeholderLabelColor,
        }}
      />
      <ErrorLabel style={{ visibility: error ? `visible` : `hidden` }}>
        {error}
      </ErrorLabel>
    </Containr>
  )
}
