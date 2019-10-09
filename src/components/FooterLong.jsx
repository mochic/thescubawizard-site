import React from "react"

import styled from "styled-components"

const P = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: open sans;
  font-size: 14px;
  color: #ffe9c9;
`

const Link = styled.a`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #252927;
  }
  font-size: 12px;
`

const SOURCE_URI = `https://github.com/mochic/thescubawizard-site`

export default () => {
  return (
    <>
      <P style={{ color: `#252927` }}>the scuba wizard</P>
      <P style={{ padding: `8px 0 0 0`, color: `#252927`, fontSize: `12px` }}>
        A Seattle dive operation.
      </P>
      <Link href={SOURCE_URI} target="_blank" rel="noopener noreferrer">
        source
      </Link>
    </>
  )
}
