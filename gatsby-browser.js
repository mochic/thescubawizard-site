import React from "react"

import styled, { createGlobalStyle, keyframes } from "styled-components"
import { animated, useSpring } from "react-spring"

import Particles from "react-particles-js"

import devices from "./src/devices"

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
        margin: 0;
        padding: 0;
        background: #2f2f2f; 
        font-family: inconsolata, sans serif;
        font-size: 20px;
    }
`

const ParticlesContainr = styled(animated.div)`
  position: absolute;
  top: 0;
  z-index: -1;
`

const ParticlesOrSomething = () => {
  return (
    <ParticlesContainr>
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: false,
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            color: {
              value: [`#27a77d`, `#1eff61`, `#222826`, `#ffffff`],
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 0.6,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
    </ParticlesContainr>
  )
}

const OutrTainr = styled(animated.div)``

const InnrTainr = styled(animated.div)`
  max-width: 1440px;
  background: blue;
`

export const replaceComponentRenderer = ({ props, ...other }) => (
  <>
    <GlobalStyle />
    <ParticlesOrSomething />
    {React.createElement(props.pageResources.component, props)}
  </>
)
