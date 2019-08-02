import React, { useCallback, useState } from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { Input } from "./Shared"

const ErrorLabel = styled(animated.label)`
  color: red;
`

const Containr = styled(animated.div)``

export default ({ formatter, validator, ...props }) => {
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = useCallback(e => {
    setValue(formatter(e.target.value))
    setError(validator(e.target.value))
  }, [])

  return (
    <Containr>
      <Input {...props} onChange={handleChange}>
        {value}
      </Input>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Containr>
  )
}
