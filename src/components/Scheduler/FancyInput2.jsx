import React, { useState, useCallback, useRef } from "react"

import PropTypes from "prop-types"
import { animated, useSpring, config, useChain } from "react-spring"
import styled, { keyframes } from "styled-components"

const Containr = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100px;
`

const filledColor = `#ffe9c9`

const unfilledColor = `#656565`

const errorColor = `#d20000`

const colors = {
  filled: {
    rgb: [255, 233, 201],
  },
  unfilled: {
    rgb: [101, 101, 101],
  },
  error: {
    rgb: [210, 0, 0],
  },
}

const ErrorLabel = styled(animated.label)`
  color: ${errorColor};
  font-family: open sans;
  font-weight: normal;
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

// const Input = styled.input`
//   outline: 0;
//   border: 0;
//   border-radius: 0; /* ios inputs :( */
//   background: transparent;
//   border-bottom: 1px solid
//     ${({ value, error }) => {
//       if (error) {
//         return `red`
//       } else if (value) {
//         return "#c4c4c4"
//       } else {
//         return `#656565`
//       }
//     }};
//   text-align: center;
//   font-family: montserrat alternates;
//   font-size: 16px !important; /* less than 16px will trigger terrible safari zoom */
//   font-weight: 400;
//   color: ${props => (props.error ? "red" : "#c4c4c4")};
//   padding: 5px 5px 5px 5px;
// `

const Input = styled.input`
  outline: 0;
  border: 0;
  border-radius: 0; /* ios inputs :( */
  background: transparent;
  border-bottom: 1px solid
    ${({ value, error }) => {
      if (error) {
        return `rgb(${errorColor[0]},${errorColor[1]},${errorColor[2]})`
      } else if (value) {
        return "#c4c4c4"
      } else {
        return `#656565`
      }
    }};
  text-align: left;
  font-family: open sans;
  font-size: 16px !important; /* less than 16px will trigger terrible safari zoom */
  font-weight: normal;
  color: ${props => (props.error ? "red" : "#c4c4c4")};
  padding: 5px 5px 5px 10px;
`

const FadeIn = keyframes`
    from {
        caret-color: rgba255,233,201,0)
    } to {
        caret-color: rgba(255,233,201,1)
    }
`

const AInput = styled(animated.input)`
  outline: 0;
  border: 0;
  border-radius: 0; /* ios inputs :( */
  background: transparent;
  border-style: solid;
  text-align: left;
  font-family: open sans;
  font-size: 16px !important; /* less than 16px will trigger terrible safari zoom */
  font-weight: normal;
  padding: 5px 5px 5px 10px;

  &:focus {
    caret-color: rgba255,233,201,0)
    animation: 2s ${FadeIn};
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
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
  let inputColorTemplate
  if (error) {
    placeholderLabelColor = errorColor
    inputColorTemplate = `rgba(${colors.error.rgb[0]},${colors.error.rgb[1]},${
      colors.error.rgb[2]
    },`
  } else if (focused || value) {
    placeholderLabelColor = filledColor
    inputColorTemplate = `rgba(${colors.filled.rgb[0]},${
      colors.filled.rgb[1]
    },${colors.filled.rgb[2]},`
  } else {
    placeholderLabelColor = unfilledColor
    inputColorTemplate = `rgba(${colors.unfilled.rgb[0]},${
      colors.unfilled.rgb[1]
    },${colors.unfilled.rgb[2]},`
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
  const placeholderLabelRef = useRef()
  const placeholderLabelProps = useSpring({
    ref: placeholderLabelRef,
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
    reset: focused,
  })

  const inputSpringRef = useRef()
  const inputProps = useSpring({
    ref: inputSpringRef,
    from: { colorAlpha: 0 },
    to: { colorAlpha: 1.0 },
    // reset: focused,
    delay: 500,
  })

  const errorLabelRef = useRef()
  const errorLabelProps = useSpring({
    ref: errorLabelRef,
    from: { opacity: 0 },
    to: { opacity: error ? 1 : 0 },
  })

  useChain([placeholderLabelRef, inputSpringRef, errorLabelRef])

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
      <AInput
        {...props}
        ref={inputRef}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        error={error !== null}
        style={{
          ...props.style,
          color: inputProps.colorAlpha.interpolate(
            v => inputColorTemplate + `${v})`
          ),
          borderBottom: inputProps.colorAlpha.interpolate(
            v => `1px solid ` + inputColorTemplate + `${v})`
          ),
          //   caretColor: inputProps.colorAlpha.interpolate(
          //     v => inputColorTemplate + `${v})`
          //   ),
          // borderColor: placeholderLabelColor,
        }}
      />

      <ErrorLabel style={errorLabelProps} onClick={handleLabelClick}>
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
