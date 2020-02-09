import React from "react"

import SchedulingProvider from "./src/providers/SchedulingProvider"

import styled, { createGlobalStyle } from "styled-components"

// import smoothscroll from "smoothscroll-polyfill"

// smoothscroll.polyfill()

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
      margin: 0;
      padding: 0;
      background: #191f1d; 
      font-family: playfair display, serif;
      font-size: 16px;
      line-height: 1;
    }
`

export default ({ element }) => (
  <>
    <GlobalStyle />
    <SchedulingProvider>{element}</SchedulingProvider>
  </>
)
