import React from "react"

import { Link as _Link } from "gatsby"
import styled from "styled-components"
import { animated } from "react-spring"

const H1 = styled(animated.h1)`
  color: #ffe9c9;
  text-align: center;
`

const P = styled(animated.p)`
  color: white;
  text-align: center;
`

// const Link = styled(_Link)`
//   text-decoration: none;
//   color: #7cad9f;

//   &:visited {
//     color: #506a61;
//   }
// `

const Link = styled(_Link)`
  color: #7cad9f;
  text-align: center;
  text-decoration: none;
  width: 100%;
`

// didnt really kno wut to call this...:/...TODO figure out a better name?
export default ({ heading, statement, link: { label, to } }) => {
  return (
    <>
      <P>{`Need help with a `}</P>
      <P style={{ color: `green` }}>dive job</P>
      <P>{` ?`}</P>
      <Link to={to}>
        <p>{`contact ` + String.fromCharCode(8594)}</p>
      </Link>
    </>
  )
}
