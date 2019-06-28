import React, { useRef, useState, useEffect, useCallback } from "react"

import styled from "styled-components"
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring"

import debounce from "lodash/debounce"

import Logo from "../components/Logo"
import LandingPage from "../components/LandingFinal3"
import SchedulePage from "../components/SchedulerFinal"
import SEO from "../components/SEO"

import { FaChevronDown } from "react-icons/fa"

const Page = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 100vh;
  width: 100vw;
`

// with the way we style things i'm worried we'll negatively impact seo making it a h1...
const Title = styled(animated.div)`
  color: #27a77d;
  font-family: inconsolata;
  font-weight: 900;
  font-size: 96px;
  line-height: 200px;
  opacity: 0.9;
  z-index: -1;
  padding: 42px 0 0 32px;
  margin: 0;
`

const LogoContainr = styled(animated.div)`
  text-align: center;
  width: 716px;
  height: 707px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
`

const Containr = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Header = styled(animated.h1)`
  color: #f2f2f2;
  font-family: Inconsolata;
  font-weight: 300;
  font-size: 24px;
  line-height: 25px;
`

const Divider = styled(animated.hr)`
  border-top: 1px solid #f2f2f2;
  width: 100%;
`

const BlurHeader = ({ children }) => {
  return (
    <Containr>
      <Header>{children}</Header>
      <Divider />
    </Containr>
  )
}

export default () => {
  const logoProps = useSpring({
    from: { filter: `blur(20px)` },
    to: { filter: `blur(2px)` },
    config: { ...config.wobbly, duration: 1500 },
  })
  return (
    <>
      <Page>
        <Title>
          the
          <br />
          scuba
          <br />
          wizard
        </Title>
        <LogoContainr style={logoProps}>
          <Logo />
        </LogoContainr>
      </Page>
      <BlurHeader>schedule a chat.</BlurHeader>
      <Page></Page>
    </>
  )
}
