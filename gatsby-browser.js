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
    }
`

// might as well have fun with these component defs...
// const MainTainr = styled.div`
//   height: 220vh;
//   width: 100vw;

//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(12, 48, 36, 0.9) 43.23%,
//     rgba(1, 0, 0, 0.9) 91.15%
//   );
//   z-index: -1;
//   top: -10vh;
// `

// const MainTainr = styled.div`
//   height: 200vh;
//   width: 100vw;
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   z-index: -1;
//   overflow: hidden;
// `

// const MainTainr = styled.div`
//   height: 180vh;
//   width: 100vw;
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   z-index: -1;
//   overflow: hidden;
// `
const MainTainr = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(39, 167, 125, 0.9) 0%,
    rgba(1, 0, 0, 0.9) 64.06%
  );
  z-index: -1;
  overflow: hidden;
  margin: 0;
  padding: 0;

  @media ${devices.mobileS} {
    padding-bottom: 80px;
  }

  @media ${devices.mobileM} {
    padding-bottom: 100px;
  }
`

// const MainTainr = styled.div`
//   height: 180vh;
//   width: 100vw;
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   z-index: -1;
//   overflow: hidden;
// `

// const MainTainr = styled.div`
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   z-index: -1;
//   overflow: hidden;
//   padding-bottom: 40%;
// `

// const MainTainr = styled.div`
//   height: 150vh;
//   width: 100vw;
//   z-index: -1;
// `

// const AbsTainr = styled.div`
//   height: 150vh;
//   width: 100vw;
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   z-index: -1;
//   position: absolute;
// `

// const WaterKeys = keyframes`
//   0% {background-position:0% 31%}
//   50% {background-position:100% 70%}
//   100% {background-position:0% 31%}
// `

// const MainTainr = styled(animated.div)`
//   background: linear-gradient(
//     180deg,
//     rgba(39, 167, 125, 0.9) 0%,
//     rgba(1, 0, 0, 0.9) 64.06%
//   );
//   background-size: 400% 400%;
//   animation: ${WaterKeys} 43s ease infinite;
// `

// const Background = styled.div`
//   background: #2f2f2f;
//   position: fixed;
//   top: 0;
//   z-index: -3;
// `

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

export const replaceComponentRenderer = ({ props, ...other }) => (
  <MainTainr>
    {/* <ParticlesOrSomething /> */}
    <GlobalStyle />
    {React.createElement(props.pageResources.component, props)}
  </MainTainr>
)
