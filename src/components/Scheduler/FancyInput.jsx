import React, { useState, useCallback, useRef } from "react"

import PropTypes from "prop-types"
import { animated, useSpring, config } from "react-spring"
import styled from "styled-components"

const Containr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100px;
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
  min-height: 13px;
  margin-left: 3px; /* ios inputs again :( */
`

const PlaceholderLabel = styled(animated.label)`
  color: #656565;
  font-family: roboto;
  font-weight: 300;
  margin-bottom: 5px;
  margin-left: 3px; /* ios inputs again :( */
  align-self: left;
`

const Input = styled.input`
  outline: 0;
  border: 0;
  border-radius: 0; /* ios inputs :( */
  background: transparent;
  border-bottom: 1px solid
    ${({ value, error }) => {
      if (error) {
        return `red`
      } else if (value) {
        return "#c4c4c4"
      } else {
        return `#656565`
      }
    }};
  text-align: center;
  font-family: montserrat alternates;
  font-size: 16px !important; /* less than 16px will trigger terrible safari zoom */
  font-weight: 400;
  color: ${props => (props.error ? "red" : "#c4c4c4")};
  padding: 5px 5px 5px 5px;
`

const FancyInput = ({
  value,
  error,
  onChange,
  tainrStyle,
  placeholder,
  ...props
}) => {
  const inputRef = useRef()
  const [focused, setFocused] = useState(false)

  const handleFocus = e => {
    setFocused(true)
    console.log("%cinput focused", "color: blue")
    props.onFocus && props.onFocus()
  }

  const handleBlur = e => {
    setFocused(false)
    console.log("%cinput blurred", "color: blue")
    props.onBlur && props.onBlur()
  }

  const handleLabelClick = e => {
    // clicking the pseudo-placeholder label should give focus to the input
    e.preventDefault()
    console.log("%clabel focused", "color: pink")
    inputRef.current.focus()
  }

  let placeholderLabelColor
  if (error) {
    placeholderLabelColor = errorColor
  } else if (focused || value) {
    placeholderLabelColor = filledColor
  } else {
    placeholderLabelColor = unfilledColor
  }

  // const placeholderLabelProps = useSpring({
  //   from: { transform: `translate3d(0,-40px,0)` },
  //   to: {
  //     transform:
  //       focused || value
  //         ? `translate3d(0,-65px,0) scale(0.7)`
  //         : `translate3d(0,-40px,0) scale(1.0)`,
  //   },
  // })

  const placeholderLabelProps = useSpring({
    from: {
      transform: `translate3d(0px,-40px,0) scale(1.0)`,
      transformOrigin: `left top`,
    },
    to: {
      transform:
        focused || value
          ? `translate3d(0px,-65px,0) scale(0.7)`
          : `translate3d(0px,-40px,0) scale(1.0)`,
    },
    config: { ...config.molasses, duration: 500 },
  })

  // const errorLabelProps = useSpring({})

  return (
    <Containr style={tainrStyle}>
      <PlaceholderLabel
        onClick={handleLabelClick}
        style={{
          position: `absolute`,
          color: placeholderLabelColor,
          ...placeholderLabelProps,
        }}
      >
        {placeholder}
      </PlaceholderLabel>
      <Input
        {...props}
        ref={inputRef}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        error={error !== null}
        style={{
          ...props.style,
          color: placeholderLabelColor,
          borderColor: placeholderLabelColor,
        }}
      />

      <ErrorLabel
        style={{ visibility: error ? `visible` : `hidden` }}
        onClick={handleLabelClick}
      >
        {error}
      </ErrorLabel>
    </Containr>
  )
}

FancyInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  tainrStyle: PropTypes.object,
  placeholder: PropTypes.string,
}

export default FancyInput
