import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

import { Link } from "../components/Shared"

const Statement = styled(animated.div)`
  font-family: inconsolata;
  font-weight: 600;
  font-style: bold;
  display: inline-block;
  width 100%;
  max-height: 100px;
  padding: 5% 0 5% 0;
`

const StatementChunk = styled(animated.p)`
  margin: 0;
  padding: 0;
  color: #505050;
  font-size: 14px;
`

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  color: #505050;
  font-size: 14px;
  text-align: center;
`

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;

  &:visited {
    color: rgba(255, 255, 255, 0.75);
  }

  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }

  &:active {
    color: rgba(255, 255, 255, 1);
  }
`

const PlugTainr = styled.div`
  color: #505050;
  font-family: inconsolata;
  font-weight: 600;
  font-style: bold;
  font-size: 14px;
  text-align: center;
  padding: 20px 50px 0 50px;
`

const FlatIconsPlug = () => (
  <PlugTainr>
    {`Icons made by `}
    <FooterLink
      href="https://www.flaticon.com/authors/flat-icons"
      title="Flat Icons"
      rel="noopener noreferrer"
      target="_blank"
    >
      Flat Icons
    </FooterLink>
    {` from `}
    <FooterLink
      href="https://www.flaticon.com/"
      title="Flaticon"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.flaticon.com
    </FooterLink>
    {` are licensed by `}
    <FooterLink
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      target="_blank"
      rel="noopener noreferrer"
    >
      CC BY 3.0
    </FooterLink>
  </PlugTainr>
)

export default () => {
  return (
    <>
      <FooterText>the scuba wizard</FooterText>
      <FlatIconsPlug />
    </>
  )
}
