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

export default () => {
  return (
    <>
      {/* helps us remember/not remove the space at the end */}
      <Statement>
        <StatementChunk>the scuba wizard</StatementChunk>
        <div>
          {`Icons made by `}
          <a
            href="https://www.flaticon.com/authors/flat-icons"
            title="Flat Icons"
          >
            Flat Icons
          </a>
          {` from `}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          {` is licensed by `}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
        {/* lets put our name on it in a different way */}
        {/* <StatementChunk>
          {`site by `}
          <Link
            href="https://github.com/mochic"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `#505050` }}
          >
            mochic
          </Link>
        </StatementChunk> */}
      </Statement>
    </>
  )
}
