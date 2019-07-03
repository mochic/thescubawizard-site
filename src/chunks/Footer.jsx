import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import devices from "../devices"

import { GridTainr, Link } from "../components/Shared"

const Statement = styled(animated.div)`
  background: yellow;
  grid-area: 1 / 1 / auto / auto;
`

const StatementChunk = styled(animated.p)``

const Grid = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
`

export default ({ initSpringRef }) => {
  return (
    <Grid>
      {/* helps us remember/not remove the space at the end */}
      <Statement>
        <StatementChunk>{`site by `}</StatementChunk>
        <Link
          href="https://github.com/mochic"
          target="_blank"
          rel="noopener noreferrer"
        >
          mochic
        </Link>
      </Statement>
    </Grid>
  )
}
