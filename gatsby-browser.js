import React, { useContext, useState } from "react"

import styled, { createGlobalStyle } from "styled-components"
import { animated, useSpring, config } from "react-spring"
import { Link } from "gatsby"

import VisibilitySensor from "react-visibility-sensor"

import ScrollProvider from "./src/providers/ScrollProvider"
import ScrollContext from "./src/contexts/scroll.context"

import SchedulingProvider from "./src/providers/SchedulingProvider"

import VisibilityProvider from "./src/providers/VisibilityProvider"
import VisibilityContext from "./src/contexts/visibility.context"
import GeneralProvider from "./src/providers/GeneralProvider"

import GeneralContext from "./src/contexts/general.context"

import Footer from "./src/components/Footer"
import devices from "./src/devices"
import sizes from "./src/sizes"

import TitleSVG from "./src/components/TitleSVG"

import smoothscroll from "smoothscroll-polyfill"

import shared from "./src/shared"

import { navigate } from "gatsby-link"

// kick off the polyfill!
smoothscroll.polyfill()

const GlobalStyle = createGlobalStyle`
    html, body {
    }
    body {
      margin: 0;
      padding: 0;
      background: #191f1d; 
      font-family: inconsolata, sans serif;
      font-size: 16px;
      line-height: 1;
    }
`

const Containr = styled(animated.div)``

// const NavTainr = styled(animated.div)`
//   z-index: 1000 !important; /* really important for being visible... */
//   width: 100%;
//   text-align: center;
//   padding: 0;
//   margin: 0;
//   position: sticky;
//   top: 0px;
//   height: 70px;
//   display: grid;
//   backdrop-filter: blur(2px);
//   float: left;

//   grid-template-areas: ". title .";
//   grid-template-columns: auto auto auto;
//   margin: 0 0 -70px 0; /* needs to be the height of the tainr to "remove" relative positioning gap */
// `

// const navTainrHeight = 70
// const NavTainr = styled(animated.div)`
//   z-index: 1000 !important; /* really important for being visible... */
//   width: 100%;
//   text-align: center;
//   padding: 0;
//   margin: 0;
//   position: sticky;
//   top: 0px;
//   height: ${navTainrHeight}px;
//   display: grid;
//   backdrop-filter: blur(2px);
//   float: left;

//   grid-template-areas: ". title .";
//   grid-template-columns: auto auto auto;
// `

const navTainrHeight = 70
// filter out props that higher level components dont expect and raise weird errors...
const NavTainr = styled(({ ...props }) => <animated.div {...props} />)`
  z-index: 1000 !important; /* really important for being visible... */
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0px;
  height: ${navTainrHeight}px;
  display: grid;
  backdrop-filter: blur(2px);
  float: left;

  grid-template-areas: ". title .";
  grid-template-columns: auto auto auto;
`

// const PageTainr = styled(animated.div)`
//   margin: auto;
//   overflow: hidden;
//   width: 100vw;
// `

const PageTainr = styled(animated.div)`
  margin: auto;
  overflow: hidden;
`

// const PageTainr = styled(animated.div)`
//   margin: auto;
// `

// const HomeLink = styled(Link)`
//   color: #ffe9c9;
//   font-family: inconsolata;
//   font-weight: 900;
//   text-decoration: none;

//   &:focus {
//     color: #ffeed6;
//   }
// `

// const NavBar = ({ linkProps, tainrProps, atHome }) => {
//   return (
//     !atHome && (
//       <HomeLink to="/" style={linkProps}>
//         the scuba wizard
//       </HomeLink>
//     )
//   )
// }

// const HeaderContainr = styled(animated.div)`
//   position: fixed;
//   top: 50px;
//   left: 10px;
//   z-index: 4;
// `

// const FooterContainr = styled.div`
//   padding: 20px;
//   border-top: 1px solid #505050;
// `

// use this with a provider + react spring to create "transition" effect?
const TransitionCover = styled(animated.div)``

// const NavBar = ({ style, atIndex, ...rest }) => {
//   const { navBarVisible } = useContext(GeneralContext)

//   const navBarProps = useSpring({
//     opacity: navBarVisible ? 1 : 0,
//     transform: `translate3d(0,${navBarVisible ? 0 : -100}px,0)`,
//     config: { ...config.stiff },
//     delay: shared.scheduleAnimationDuration + shared.navBarAnimationDuration,
//   })

//   const handleTitleClick = e => {
//     console.log("%ctitle clicked...", "color: green")

//     if (atIndex) {
//       window.scrollTo({ top: 0, behavior: "smooth" })
//     } else {
//       navigate("/")
//     }
//   }

//   return (
//     <NavTainr style={{ ...navBarProps, ...style }}>
//       <TitleSVG
//         style={{
//           gridArea: `title`,
//           width: `100%`,
//           maxWidth: `${sizes.title.width}px`,
//           margin: `auto`,
//         }}
//         onClick={handleTitleClick}
//       />
//     </NavTainr>
//   )
// }

// export const replaceComponentRenderer = ({ props, ...other }) => {
//   const atIndex = props.location.pathname === "/"

//   // we gotta take this out of here somehow...
//   // const [navBarHidden, setNavBarHidden] = useState(atIndex) // initialize to hidden=true if we start at index

//   // const showNavBar = () => {
//   //   setNavBarHidden(true)
//   // }

//   // const hideNavBar = () => {
//   //   setNavBarHidden(false)
//   // }

//   return (
//     <Containr>
//       {/*
//       spreading is best...all overrides need to go here anyway
//       and we should have some conditional overrides
//       eventually...
//       */}
//       {/* <NavBar atIndex={atIndex} /> */}
//       <GlobalStyle />
//       <VisibilityProvider>
//         <ScrollProvider>
//           <SchedulingProvider>
//             <PageTainr>
//               {React.createElement(props.pageResources.component, {
//                 ...props,
//               })}
//               <VisibilitySensor
//         delayedCall
//         onChange={v => {
//           console.log("%cFooter visibility changed...", "color: #ff00ff", v)
//           if (v) {
//             setRevealProps({
//               footerOpacity: 1,
//               delay: 1000,
//               config: { ...config.slow, duration: 1000 },
//             })
//           }
//         }}
//       >
//         <ADiv
//           style={{
//             position: `absolute`,
//             width: `100%`,
//             bottom: `25px`,
//             opacity: revealProps.footerOpacity,
//           }}
//         >
//           {/* zIndex set so its not obfuscated by gradient */}
//           <Footer
//             hrProps={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
//             p0Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
//             p1Props={{ style: { zIndex: shared.depthsGradientZIndex + 1 } }}
//           />
//         </ADiv>
//       </VisibilitySensor>
//             </PageTainr>
//           </SchedulingProvider>
//         </ScrollProvider>
//       </VisibilityProvider>
//     </Containr>
//   )
// }

const ADiv = styled(animated.div)``

export const replaceComponentRenderer = ({ props, ...other }) => {
  const atIndex = props.location.pathname === "/"

  // we gotta take this out of here somehow...
  // const [navBarHidden, setNavBarHidden] = useState(atIndex) // initialize to hidden=true if we start at index

  // const showNavBar = () => {
  //   setNavBarHidden(true)
  // }

  // const hideNavBar = () => {
  //   setNavBarHidden(false)
  // }

  return (
    <Containr>
      {/* 
      spreading is best...all overrides need to go here anyway 
      and we should have some conditional overrides 
      eventually... 
      */}
      {/* <NavBar atIndex={atIndex} /> */}
      <GlobalStyle />
      <VisibilityProvider>
        <ScrollProvider>
          <SchedulingProvider>
            <PageTainr>
              {React.createElement(props.pageResources.component, {
                ...props,
              })}
            </PageTainr>
          </SchedulingProvider>
        </ScrollProvider>
      </VisibilityProvider>
    </Containr>
  )
}
