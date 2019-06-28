import React from "react"

import styled, { createGlobalStyle } from "styled-components"
import { animated, useSpring } from "react-spring"

import Particles from "react-particles-js"

import Logo from "./src/components/Logo"

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
  padding-bottom: 40%;
`

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

const Background = styled.div`
  background: #2f2f2f;
  position: fixed;
  top: 0;
  z-index: -3;
`

const ParticlesContainr = styled(animated.div)`
  position: absolute;
  height: 200vh;
  width: 100vw;
  top: 0;
  z-index: -1;
`

// const ParticlesOrSomething = () => {
//   return (
//     <ParticlesContainr>
//       <Particles
//         height="1624px"
//         width="375px"
//         params={{
//           particles: {
//             number: {
//               value: 40,
//               density: {
//                 enable: false,
//               },
//             },
//             size: {
//               value: 3,
//               random: true,
//               anim: {
//                 speed: 4,
//                 size_min: 0.3,
//               },
//             },
//             line_linked: {
//               enable: false,
//             },
//             move: {
//               random: true,
//               speed: 0.5,
//               direction: "top",
//               out_mode: "out",
//             },
//           },
//           interactivity: {
//             events: {
//               onhover: {
//                 enable: true,
//                 mode: "bubble",
//               },
//               onclick: {
//                 enable: true,
//                 mode: "repulse",
//               },
//             },
//             modes: {
//               bubble: {
//                 distance: 250,
//                 duration: 2,
//                 size: 0,
//                 opacity: 0,
//               },
//               repulse: {
//                 distance: 400,
//                 duration: 4,
//               },
//             },
//           },
//         }}
//       />
//     </ParticlesContainr>
//   )
// }

// bubble colors
// #27a77d
// #efff2f
// #00e095
// #ff2f2f
// const ParticlesOrSomething = () => {
//   return (
//     <ParticlesContainr>
//       <Particles
//         height="1624px"
//         width="375px"
//         params={{
//           particles: {
//             number: {
//               value: 120,
//               density: {
//                 enable: false,
//               },
//             },
//             size: {
//               value: 6,
//               random: true,
//               anim: {
//                 speed: 4,
//                 size_min: 0.3,
//               },
//             },
//             color: { value: [`#27a77d`, `#1eff61`, `#222826`], random: true },
//             line_linked: {
//               enable: false,
//             },
//             move: {
//               random: true,
//               speed: 0.6,
//               direction: "top",
//               out_mode: "out",
//             },
//           },
//         }}
//       />
//     </ParticlesContainr>
//   )
// }

const ParticlesOrSomething = () => {
  return (
    <ParticlesContainr>
      <Particles
        height="1624px"
        width="375px"
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

const LogoThing = () => {}

export const replaceComponentRenderer = ({ props, ...other }) => (
  <MainTainr>
    <ParticlesOrSomething />
    <GlobalStyle />
    {React.createElement(props.pageResources.component, props)}
    <Background />
  </MainTainr>
)
