import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import { StateProvider } from "../State"

export const SCHEDULING_STATES = {
  UNSUBMITTED: `UNSUBMITTED`,
  SUBMITTING: `SUBMITTING`,
  SUBMITTED: `SUBMITTED`,
}

export default () => {
  const initialState = {
    status: SCHEDULING_STATES.UNSUBMITTED,
    submitted: {},
    errors: {},
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        console.log(`%cform state reset`, `color: blue`)
        return { ...initialState }
      case "UPDATE": {
        console.log(`%cform state update`, `color: blue`, {
          ...state,
          ...action.value,
        })
        return { ...state, ...action.value }
      }
      default:
        console.log(`%cunknown action`, `color: blue`, action)
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div />
    </StateProvider>
  )
}
