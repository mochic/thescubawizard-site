import React from "react"

import styled from "styled-components"
import { animated } from "react-spring"

import PropTypes from "prop-types"

import { H3, P } from "../Shared"

const IconTainr = styled(animated.div)`
  height: 100px;
  width: 100px;
  overflow: hidden;
  display: flex;
  background: #ffe9c9;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin: auto auto 28px auto;
`

const Service = ({
  children,
  description,
  descriptionProps,
  iconProps,
  name,
  nameProps,
}) => {
  return (
    <>
      <IconTainr style={{ ...iconProps }}>{children}</IconTainr>
      <H3 style={{ fontWeight: 600, textAlign: `center`, ...nameProps }}>
        {name}
      </H3>
      <P
        style={{
          fontFamily: `roboto`,
          fontWeight: 300,
          textAlign: `center`,
          ...descriptionProps,
        }}
      >
        {description}
      </P>
    </>
  )
}

Service.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  descriptionProps: PropTypes.object,
  iconProps: PropTypes.object,
  name: PropTypes.string,
  nameProps: PropTypes.object,
}

export default Service
