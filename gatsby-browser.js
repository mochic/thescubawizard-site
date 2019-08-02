import React from "react"

import styled, { createGlobalStyle } from "styled-components"
import { animated } from "react-spring"

import devices from "./src/devices"

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
      margin: 0;
      padding: 0;
      background: #2f2f2f; 
      font-family: inconsolata, sans serif;
      font-size: 16px;
      line-height: 1;
    }
`

const Containr = styled(animated.div)`
  background: black;
  z-index: 3;
`

const PageTainr = styled(animated.div)`
  margin: auto;
  overflow: hidden;
`

export const replaceComponentRenderer = ({ props, ...other }) => (
  <Containr>
    <GlobalStyle />
    <PageTainr>
      {React.createElement(props.pageResources.component, props)}
    </PageTainr>
  </Containr>
)
