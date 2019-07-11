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

  @media ${devices.mobileS} {
    max-width: 200px;
    padding: 30px 0 40px 0;
  }
`

const StatementChunk = styled(animated.p)`
  margin: 0;
  padding: 0;
  color: #151515;
`

export default ({ initSpringRef }) => {
  return (
    <>
      {/* helps us remember/not remove the space at the end */}
      <Statement>
        <StatementChunk>
          {`site by `}
          <Link
            href="https://github.com/mochic"
            target="_blank"
            rel="noopener noreferrer"
          >
            mochic
          </Link>
        </StatementChunk>
      </Statement>
    </>
  )
}
