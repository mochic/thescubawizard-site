import React, { useContext } from "react"

import styled, { createGlobalStyle } from "styled-components"
import { animated } from "react-spring"
import { Link } from "gatsby"

import ScrollProvider from "./src/providers/ScrollProvider"
import ScrollContext from "./src/contexts/scroll.context"

import VisibilityProvider from "./src/providers/VisibilityProvider"
import VisibilityContext from "./src/contexts/visibility.context"

import Footer from "./src/components/Footer"
import devices from "./src/devices"

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

const PageTainr = styled(animated.div)`
  margin: auto;
  overflow: hidden;
`

const HomeLink = styled(Link)`
  color: #ffe9c9;
  font-family: inconsolata;
  font-weight: 900;
  text-decoration: none;

  &:focus {
    color: #ffeed6;
  }
`

const NavBar = ({ linkProps, tainrProps, atHome }) => {
  return (
    !atHome && (
      <HomeLink to="/" style={linkProps}>
        the scuba wizard
      </HomeLink>
    )
  )
}

const HeaderContainr = styled(animated.div)`
  position: fixed;
  top: 50px;
  left: 10px;
  z-index: 4;
`

const FooterContainr = styled.div`
  padding: 20px;
  border-top: 1px solid #505050;
`

export const replaceComponentRenderer = ({ props, ...other }) => {
  return (
    <Containr>
      <GlobalStyle />
      <VisibilityProvider>
        <ScrollProvider>
          <PageTainr>
            {React.createElement(props.pageResources.component, props)}
          </PageTainr>
          {/* <FooterContainr>
            <Footer />
          </FooterContainr> */}
        </ScrollProvider>
      </VisibilityProvider>
    </Containr>
  )
}
